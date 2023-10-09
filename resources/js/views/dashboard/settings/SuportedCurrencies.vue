<template>
  <div class="container">
    <v-row>
      <v-col class="col-md-10 pr-md-1 sm-6">
        <h1 class="font-weight-light mb-2">Currencies</h1>
        <span class="overline">Manage Suported Currencies here</span>
      </v-col>

      <v-col class="col-md-2 pr-md-1 fill-width">
        <v-btn @click="dialogCompose = true" class="primary">New</v-btn>
      </v-col>
    </v-row>

    <v-card class="py-2 pa-0">
      <v-data-table
        :headers="headers"
        :items="getSuportedCurrencies"
        item-key="id"
      >
        <template v-slot:item="{ item }">
          <tr @click="loadCurrency(item)">
            <td>{{ item.entity }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.minorUnit }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialogCompose" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          New Currency
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="sendForm" v-model="valid" lazy-validation>
            <v-autocomplete
              v-model="newCurrency"
              :items="currencies"
              label="Select Currency"
              item-text="Currency"
              item-value="AlphabeticCode"
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
            >Add Currency</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="viewActiveCurrency" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ activeCurrency.name }}
        </v-card-title>
        <!-- <v-card-title>
          {{ JSON.parse(escapeHtml(activeCurrency.flag)) }}
        </v-card-title> -->
        <v-card-text class="pa-5">
          <p>
            CODE: {{ activeCurrency.code }}
            <br />
            Country: {{ activeCurrency.entity }}
            <br />
            DATE: {{ activeCurrency.created_at }}
          </p>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn color="red" @click="deleteCurrency(activeCurrency)" outlined
            >Delete</v-btn
          >
          <v-btn
            class="ml-auto"
            @click="OpenCuccencyDetails(activeCurrency)"
            outlined
            color="primary"
            >Details</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data: () => ({
    file: null,
    currencies: currencies,
    uploads: uploads,
    escapeHtml: escapeHtml,
    newCurrency: {},
    activeCurrency: {},
    composeMessage: {},
    dialogCompose: false,
    dialogComposeEmail: false,
    viewActiveCurrency: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      {
        text: "Country",
        value: "entity",
      },
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
      },
      {
        text: "Code",
        value: "code",
      },
      {
        text: "Minor Unit",
        value: "minorUnit",
      },
      {
        text: "Date Added",
        value: "created_at",
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
    this.$store.dispatch("fetchSupportedCurrencies");
  },

  computed: {
    ...mapState(["suportedCurrencies"]),
    ...mapGetters(["getSuportedCurrencies", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("fetchSupportedCurrencies");
      }
    },
  },

  methods: {
    loadCurrency(country) {
      this.activeCurrency = country;
      this.viewActiveCurrency = true;
    },

    deleteCurrency(activeCurrency) {
      this.$store.dispatch("deleteCurrency", activeCurrency.code);
      this.viewActiveCurrency = false;
    },

    composeEmail(user) {
      this.viewActiveCurrency = false;
      this.dialogComposeEmail = true;
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.newCurrency);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createUser(this.newCurrency);
      }
    },

    createUser(newCurrency) {
      //send the message via API/server endpoint here
      this.dialogCompose = false;
      let index = this.currencies.findIndex(
        (el) => el.AlphabeticCode == newCurrency
      );

      console.log("addSuportedCurrency", this.currencies[index]);
      this.$store.dispatch("addSuportedCurrency", this.currencies[index]);
    },

    OpenCuccencyDetails(activeCurrency) {
      this.$router.push({
        path: "/admin/settings/suportedCurrencies/" + activeCurrency.code,
      });
    },
  },
};
</script>
