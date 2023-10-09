<template>
  <div class="container">
    <div>
      <v-row>
        <v-col class="col-md-10 pr-md-1 sm-6">
          <h1 class="font-weight-light mb-2">System Users</h1>
          <span class="overline">Manage System Users here</span>
        </v-col>

        <v-col class="col-md-2 pr-md-1 fill-width">
          <v-btn @click="dialogAddNewUser = true" class="primary">New</v-btn>
        </v-col>
      </v-row>

      <v-card class="py-2 pa-0">
        <v-data-table
          :headers="headers"
          :items="getMyCompanyUsers"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="loadUserProfile(item)">
              <td>
                <img
                  :src="`${uploads}${item.profile_picture}`"
                  width="30px"
                  height="30px"
                />
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.level }}</td>
              <td>{{ item.created_at }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-dialog v-model="dialogAddNewUser" width="500">
        <v-card>
          <v-card-title class="headline black" primary-title>
            New User
          </v-card-title>
          <v-card-text class="pa-5">
            <v-form ref="sendForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="newUser.email"
                label="User Email"
                :rules="[rules.required, rules.email]"
                autocomplete="email"
                outlined
                dense
              ></v-text-field>

              <v-select
                v-model="newUser.level"
                :items="systemUserLevels"
                label="Select Level"
                item-text="label"
                item-value="id"
                :rules="[rules.required]"
                outlined
                dense
              >
              </v-select>
            </v-form>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="dialogAddNewUser = false"
              outlined
              color="primary"
              >Cancel</v-btn
            >
            <v-btn color="primary" :disabled="!valid" @click="validate"
              >Add User</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="viewUserProfile" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            {{ activeUser.name }}
          </v-card-title>
          <v-card-title>
            <v-img
              :src="`${uploads}${activeUser.profilePicture}`"
              width="350px"
            />
          </v-card-title>
          <v-card-text class="pa-5">
            <p>
              EMAIL: {{ activeUser.email }}
              <br />
              DATE: {{ activeUser.created_at }}
              <br />
              LEVEL: {{ activeUser.level }}
            </p>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-btn color="red" @click="deleteUser(activeUser)" outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="openAdminDetails(activeUser)"
              outlined
              color="green"
              >Details</v-btn
            >
            <v-btn @click="composeEmail(activeUser)" outlined color="primary"
              >Email</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogComposeEmail" width="500">
        <v-card>
          <v-card-title class="headline black" primary-title>
            Compose Message
          </v-card-title>
          <v-card-text class="pa-5">
            <v-form ref="sendForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="activeUser.email"
                label="To"
                disabled
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                v-model="composeMessage.subject"
                label="Subject"
                :rules="[rules.required]"
              ></v-text-field>
              <v-textarea
                :rules="[rules.required]"
                v-model="composeMessage.body"
                label="Message"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="dialogComposeEmail = false"
              outlined
              color="primary"
              >Cancel</v-btn
            >
            <v-btn color="primary" :disabled="!valid" @click="validateEmail"
              >Send</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data: () => ({
    file: null,
    uploads: uploads,
    newUser: {},
    activeUser: {},
    composeMessage: {},
    dialogAddNewUser: false,
    dialogComposeEmail: false,
    viewUserProfile: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      {
        text: "Image",
        value: "imageTitle",
      },
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
      },
      {
        text: "Email",
        value: "email",
      },
      {
        text: "Level",
        value: "level",
      },
      {
        text: "Date Added",
        value: "timeAdded",
      },
    ],
    systemUserLevels: [
      {
        id: "OWNER",
        label: "System Owner",
      },
      {
        id: "EDITOR",
        label: "System Editor",
      },
      {
        id: "VIEWER",
        label: "System Viewer",
      },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("getAdminUsers");
    this.$store.dispatch("fetchMyServicePoints");
  },

  computed: {
    ...mapState(["myCompanyUsers", "myServicePints"]),
    ...mapGetters(["getMyCompanyUsers", "getMyServicePints"]),
  },

  methods: {
    loadUserProfile(user) {
      this.activeUser = user;
      this.viewUserProfile = true;
    },

    deleteUser(activeUser) {
      alert("Deleting");
    },

    composeEmail(user) {
      this.viewUserProfile = false;
      this.dialogComposeEmail = true;
    },

    openAdminDetails(user) {
      this.$router.push({
        path: "/admin/customers/" + user.id,
        query: {
          userId: user.id,
        },
      });
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.newUser);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createUser(this.newUser);
      }
    },

    createUser(newUser) {
      //send the message via API/server endpoint here
      this.dialogAddNewUser = false;
      this.$store.dispatch("submitSystemAdmin", newUser);
    },
  },
};
</script>
