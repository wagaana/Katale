<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card-actions class="pa-3">
          <h5 class="font-weight-light mb-2">Regions (States)</h5>

          <v-btn @click="dialogNewRegion = true" class="primary ml-auto"
            >New</v-btn
          >
        </v-card-actions>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-data-table :headers="headers" :items="getStates" item-key="id">
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.country_code }}</td>
              <td>
                <v-btn icon @click="deleteRegion(item)">
                  <v-icon color="primary">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogNewRegion" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          New Region
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="regionForm" v-model="valid" lazy-validation>
            <v-autocomplete
              v-model="newRegion.countryId"
              :items="getSuportedCountries"
              label="Select Country"
              item-text="name"
              item-value="id"
              :rules="[rules.required]"
              outlined
              dense
            >
            </v-autocomplete>
          </v-form>

          <v-text-field
            v-model="newRegion.name"
            label="Label"
            autocomplete="company"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogNewRegion = false"
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
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../../utils/constants";

export default {
  data: () => ({
    uploads: uploads,
    dialogNewRegion: false,
    getFreelancerCompany: {},
    headers: [
      { text: "State", value: "name" },
      { text: "Country", value: "country" },
      { text: "Country Code", value: "country_code" },
      { text: "Delete", value: "delete" },
    ],
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    newRegion: {},
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState(["states", "suportedCountries"]),
    ...mapGetters(["getStates", "getSuportedCountries", "messageAlert"]),
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
        this.$store.dispatch("fetchStates");
        this.$store.dispatch("fetchSupportedCountries");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchStates");
    this.$store.dispatch("fetchSupportedCountries");
  },

  methods: {
    validate() {
      if (this.$refs.regionForm.validate()) {
        // send it
        this.createRegion(this.newRegion);
      }
    },

    createRegion(newRegion) {
      this.$store.dispatch("submitState", newRegion);
      this.dialogNewRegion = false;
    },

    deleteRegion(region) {
      this.$store.dispatch("deleteState", region.id);
    },
  },
};
</script>
