<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0 pa-5">
        <h1 class="font-weight-light mb-0">Create Service Point</h1>
        <span class="overline">Register Your Service Point here</span>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-row>
          <v-col xxs="12">
            <v-form
              ref="servicePointForm"
              v-model="validServicePoint"
              lazy-validation
            >
              <v-card class="mb-4 pa-5">
                <v-text-field
                  v-model="newServicePoint.label"
                  label="Label"
                  autocomplete="company"
                  outlined
                  dense
                  :rules="[rules.required]"
                ></v-text-field>

                <v-textarea
                  v-model="newServicePoint.description"
                  label="Description"
                  rows="2"
                  max-rows="4"
                  outlined
                  dense
                  :rules="[rules.required]"
                />

                <v-text-field
                  v-model="newServicePoint.phone"
                  label="Phone"
                  autocomplete="phone"
                  outlined
                  dense
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  v-model="newServicePoint.website"
                  label="Website"
                  autocomplete="website"
                  outlined
                  dense
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  v-model="newServicePoint.email"
                  label="Email"
                  autocomplete="email"
                  outlined
                  dense
                  :rules="[rules.required, rules.email]"
                ></v-text-field>

                <v-file-input
                  label="Featured Picture"
                  v-model="newServicePoint.image"
                  :rules="[rules.required]"
                  outlined
                  dense
                ></v-file-input>

                <vuetify-google-autocomplete
                  ref="address"
                  id="map"
                  classname="form-control"
                  placeholder="Please type your address"
                  @placechanged="getAddressData"
                  country="ug"
                  outlined
                  dense
                >
                </vuetify-google-autocomplete>

                <v-btn
                  class="mb-1"
                  @click="validateNewServicePointForm"
                  :disabled="!validServicePoint"
                  variant="success"
                  >Submit</v-btn
                >
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data() {
    return {
      validServicePoint: false,
      newServicePoint: {},
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  beforeCreate() {
    this.$store.dispatch("fetchMyCompany");
  },

  computed: {
    ...mapState(["freelancerCompany"]),
    ...mapGetters(["messageAlert"]),
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
        this.$router.push("/admin/settings/myServicePoints");
      }
    },
  },

  methods: {
    validateNewServicePointForm() {
      if (this.$refs.servicePointForm.validate()) {
        // send it
        this.$store.dispatch("submitServicePoint", this.newServicePoint);
      }
    },

    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function (addressData, placeResultData, id) {
      this.address = addressData;
      console.log(placeResultData);
      this.newServicePoint.data = placeResultData;
    },
  },
};
</script>
