<template>
  <v-container>
    <div>
      <div class="row">
        <div class="col-md-12 pr-md-1 sm-6">
          <h1 class="font-weight-light">System Users</h1>
          <span class="overline">Manage all the users Here</span>
        </div>
      </div>
      <v-card>
        <v-data-table :headers="headers" :items="getUserProfiles" item-key="id">
          <template v-slot:item="{ item }">
            <tr @click="loadTemplate(item)">
              <td>{{ item.id }}</td>
              <td>
                <img
                  :src="`${item.profile_picture}`"
                  width="30px"
                  height="30px"
                />
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>
                {{ item.gender }}
              </td>
              <td>{{ item.email_verified }}</td>
              <td>{{ item.created_at }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-dialog v-model="dialogTemplate" width="420">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>{{ activeProfile.name }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-card-title>
              <v-img
                :src="`${uploads}${activeProfile.profile_picture}`"
                width="350px"
              />
            </v-card-title>

            <v-card-text>
              <p>{{ activeProfile.email }}</p>

              <span class="success--text subtitle-1">
                Created: {{ activeProfile.created_at }}
              </span>
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn color="success" outlined>Email</v-btn>
            <v-btn
              class="ml-auto"
              @click="dialogTemplate = false"
              outlined
              color="red"
              >Close</v-btn
            >
            <v-btn outlined color="primary" @click="viewProfile(activeProfile)"
              >View Profile</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../utils/constants";

export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      uploads: uploads,
      dialogTemplate: false,
      activeProfile: {},
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id",
        },
        { text: "Avator", value: "profile_picture" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Gender", value: "gender" },
        { text: "Email Varified", value: "email_verified" },
        { text: "Join Date", value: "created_at" },
      ],
    };
  },

  created() {
    this.$store.dispatch("loadSystemUsers");
  },

  computed: {
    ...mapState(["profiles"]),
    ...mapGetters(["getUserProfiles", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type,
        });
      }
    },
  },

  methods: {
    viewProfile(activeProfile) {
      this.$router.push({
        path: "/admin/customers/" + activeProfile.id,
        query: {},
      });
    },

    createCampaign() {
      this.$router.push({
        path: "/createCampaign",
        query: { action: "newCampaign" },
      });
    },

    loadTemplate(template) {
      this.activeProfile = template;
      this.dialogTemplate = true;
    },
  },
};
</script>
