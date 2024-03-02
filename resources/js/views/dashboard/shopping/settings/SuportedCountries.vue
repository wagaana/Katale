<template>
  <div class="container">
    <v-card-actions class="pa-3">
      <h5 class="font-weight-light mb-2">Sub Categories</h5>

      <v-btn @click="dialogCompose = true" class="primary ml-auto">New</v-btn>
    </v-card-actions>

    <v-data-table
      :headers="headers"
      :items="getSuportedCountries"
      item-key="id"
    >
      <template v-slot:item="{ item }">
        <tr @click="loadCountry(item)">
          <td>{{ JSON.parse(escapeHtml(item.flag)) }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.dial_code }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogCompose" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          New Country
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="sendForm" v-model="valid" lazy-validation>
            <v-autocomplete
              v-model="newCountry"
              :items="countries"
              label="Select Country"
              item-text="name"
              item-value="code"
              :rules="[rules.required]"
              outlined
              dense
            >
            </v-autocomplete>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogCompose = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Add Country</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="viewUserProfile" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ activeCountry.name }}
        </v-card-title>
        <!-- <v-card-title>
          {{ JSON.parse(escapeHtml(activeCountry.flag)) }}
        </v-card-title> -->
        <v-card-text class="pa-5">
          <p>
            CODE: {{ activeCountry.dial_code }}
            <br />
            DATE: {{ activeCountry.created_at }}
          </p>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn color="red" @click="deleteCountry(activeCountry)" outlined
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../../utils/constants";

export default {
  data: () => ({
    file: null,
    countries: countries,
    uploads: uploads,
    escapeHtml: escapeHtml,
    newCountry: {},
    activeCountry: {},
    composeMessage: {},
    dialogCompose: false,
    dialogComposeEmail: false,
    viewUserProfile: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      { text: "Flag", value: "flag" },
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "Code", value: "code" },
      { text: "Dial Code", value: "dial_code" },
      { text: "Date Added", value: "created_at" },
    ],
    systemUserLevels: [
      { id: "OWNER", label: "System Owner" },
      { id: "EDITOR", label: "System Editor" },
      { id: "VIEWER", label: "System Viewer" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("fetchSupportedCountries");
  },

  computed: {
    ...mapState(["suportedCountries"]),
    ...mapGetters(["getSuportedCountries", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("fetchSupportedCountries");
      }
    },
  },

  methods: {
    loadCountry(country) {
      this.activeCountry = country;
      this.viewUserProfile = true;
    },

    deleteCountry(activeCountry) {
      this.$store.dispatch("deleteCountry", activeCountry.code);
      this.viewUserProfile = false;
    },

    composeEmail(user) {
      this.viewUserProfile = false;
      this.dialogComposeEmail = true;
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.newCountry);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createUser(this.newCountry);
      }
    },

    createUser(newCountry) {
      //send the message via API/server endpoint here
      this.dialogCompose = false;
      let index = this.countries.findIndex((el) => el.code == newCountry);

      this.$store.dispatch("addSuportedCountry", this.countries[index]);
    },
  },
};
</script>
