<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h2 class="font-weight-light mb-0">
          {{ myServicePointDetails.label }}
        </h2>
        <span class="overline">{{ myServicePointDetails.address }}</span>
      </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <v-card elevation="10">
          <v-row class="px-4">
            <v-col class="col-md-10 pr-md-1">
              <p class="font-weight-light">
                <v-icon color="primary"
                  >mdi-checkbox-marked-circle-outline</v-icon
                >
                <!-- You attended this event -->
              </p>
            </v-col>
            <v-col class="col-md-2 pr-md-1 fill-width">
              <input
                type="file"
                id="photoInput"
                hidden
                @change="handleImageChange"
              />
              <v-btn
                @click="PostPhotos"
                color="primary"
                class="font-weight-light"
                >post photos</v-btn
              >
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="px-4">
            <v-col cols="12" sm="4" order-sm="2">
              <v-card min-width="150" elevation="12">
                <v-img :src="`${uploads}${myServicePointDetails.imageUrl}`" />
              </v-card>
            </v-col>

            <v-col cols="12" sm="8" order-sm="2">
              <v-card
                min-height="300"
                min-width="150"
                elevation="1"
                class="py-2"
              >
                <ServicePointConfiguration :data="myServicePointDetails" />

                <v-row class="px-4">
                  <v-col cols="12" class="py-2">
                    <h4 class="font-weight-bold mb-0">
                      {{ myServicePointDetails.label }}
                    </h4>
                  </v-col>
                  <v-col cols="12" class="py-2">
                    <div v-html="myServicePointDetails.description"></div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <BranchPhotosAndAdmins :data="myServicePointDetails" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../utils/constants";
import ActiveCompanyLoader from "../../../components/ActiveCompanyLoader.vue";
import CompanyListLoader from "../../../components/CompanyListLoader.vue";
import BranchPhotosAndAdmins from "../../../components/BranchPhotosAndAdmins.vue";
import ServicePointConfiguration from "../../../components/ServicePointConfiguration.vue";

export default {
  template: "#ServicePointDetails",

  components: {
    ActiveCompanyLoader,
    CompanyListLoader,
    BranchPhotosAndAdmins,
    ServicePointConfiguration,
  },

  data: () => ({
    uploads: uploads,
    showApiKey: false,
    showKey: false,

    newPlasticPricing: {},
    activePromo: {},
    composeMessage: {},
    dialogNewPricing: false,
    viewPromo: false,
    valid: false,

    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },

    headers: [
      {
        text: "Label",
        align: "left",
        sortable: false,
        value: "label",
      },
      { text: "Category", value: "categoryLabel" },
      { text: "Author", value: "name" },
      { text: "Purchase Price", value: "buy" },
      { text: "Sell Price", value: "sell" },
      { text: "Txn Charge", value: "transactionCharge" },
      { text: "Date Added", value: "created_at" },
    ],
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState([
      "servicePointUsers",
      "myServicePints",
      "myServicePointDetails",
      "plasticCategories",
    ]),
    ...mapGetters([
      "getMyServicePints",
      "myServicePointDetails",
      "getServicePointUsers",
      "getPlasticCategories",
      "messageAlert",
    ]),
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
        this.$store.dispatch("fetchServicePointDetails", this.$route.params.id);
        this.$store.dispatch("fetchServicePointAdmins", this.$route.params.id);
        this.$store.dispatch("fetchPlasticCategories");
      }
    },
  },

  created() {
    this.$store.dispatch("fetchServicePointDetails", this.$route.params.id);
    this.$store.dispatch("fetchServicePointAdmins", this.$route.params.id);
    this.$store.dispatch("fetchPlasticCategories");
  },

  methods: {
    handleImageChange(event) {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      formData.append("servicePointId", this.$route.params.id);
      this.$store.dispatch("sendServicePointGalleryImage", formData);
    },

    PostPhotos() {
      const photoInput = document.getElementById("photoInput");
      photoInput.click();
    },

    registerServicePoint() {
      this.$router.push({
        path: "/createServicePoint",
        query: {},
      });
    },

    onBasicSubmit() {},

    loadPromo(promo) {
      this.activePromo = promo;
      this.viewPromo = true;
    },

    deletePromo(activePromo) {
      alert("Deleting");
    },

    validate() {
      if (this.$refs.pricingForm.validate()) {
        // send it
        this.newPlasticPricing.servicePointId = this.$route.params.id;
        this.createPlasticPricing(this.newPlasticPricing);
      }
    },

    createPlasticPricing(newPlasticPricing) {
      //send the message via API/server endpoint here
      this.dialogNewPricing = false;
      this.$store.dispatch("submitPlasticPrice", newPlasticPricing);
    },
  },
};
</script>