<template>
  <div class="container">
    <div>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Campaign Details
          <small>Describe your campaign below.</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card class="mb-12">
            <v-container>
              <v-text-field
                v-model="campaign.label"
                label="Campaign Name"
                outlined
                dense
              />

              <v-textarea
                v-model="campaign.description"
                label="Campaign Description"
                outlined
                dense
              />
              <v-select
                v-model="campaign.targetId"
                :items="getCampaignTargets"
                label="Select Target"
                item-text="label"
                item-value="id"
                outlined
                dense
              >
              </v-select>

              <v-select
                v-model="campaign.offerId"
                :items="getCampaignOffers"
                label="Select Campaign Offer"
                item-text="label"
                item-value="id"
                outlined
                dense
              >
              </v-select>
            </v-container>
          </v-card>
          <v-btn class="md-1 px-6">Cancel</v-btn>
          <v-btn
            color="primary"
            @click="
              validateFieldsCampaignDetailsForm != false
                ? (e6 = 2)
                : displayFormError('Please fill all required Fields.')
            "
            >Continue</v-btn
          >
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2"
          >Configure Campaign Scheduling.</v-stepper-step
        >
        <v-stepper-content step="2">
          <v-card color="pl-4 pr-4 pt-4 grey darken-4" class="mb-12">
            <v-select
              v-model="campaign.campaignInterval"
              :items="getScheduleOptions"
              label="Select Campaign Interval"
              item-text="label"
              item-value="id"
              outlined
              dense
            >
            </v-select>

            <v-row lg="12" cols="sm">
              <div class="col-md-6">
                <v-text-field
                  v-model="campaign.startDate"
                  type="date"
                  id="startDate"
                  label="Campaign Start Date"
                  outlined
                  dense
                />
              </div>

              <div class="col-md-6">
                <v-text-field
                  v-model="campaign.endDate"
                  type="date"
                  id="endDate"
                  label="Campaign End Date"
                  outlined
                  dense
                />
              </div>
            </v-row>
          </v-card>

          <v-btn class="md-1 px-6" @click="e6 = 1">Back</v-btn>
          <v-btn
            color="primary"
            @click="
              validateSchedulingForm != false
                ? (e6 = 3)
                : displayFormError('Please choose an option.')
            "
            >Continue</v-btn
          >
        </v-stepper-content>

        <v-stepper-step step="3">Consent</v-stepper-step>
        <v-stepper-content step="3">
          <v-card class="mb-12" height="160px">
            <!-- Below is a concent text for the user to submit the campaign -->
            <v-card-text>
              <p>
                By submitting this campaign, we asume that you have gone through
                what you have writen, and you are aware that any mistakes made
                on creation of the campaign can negatively impact the company.
              </p>

              <v-checkbox
                label="I know and understand what am doing."
                v-model="campaign.consent"
              />
            </v-card-text>
          </v-card>
          <v-btn class="md-1 px-6" @click="e6 = 2">Back</v-btn>
          <v-btn
            v-if="action === 'viewCampaign'"
            color="primary"
            @click="
              validateConsentForm != false
                ? updateCampaign()
                : displayFormError('Please Aggree to the terms and continue')
            "
            >Update</v-btn
          >
          <v-btn
            v-else
            color="primary"
            @click="
              validateConsentForm != false
                ? submitCampaign()
                : displayFormError('Please Aggree to the terms and continue')
            "
            >Submit</v-btn
          >
        </v-stepper-content>
      </v-stepper>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";

export default {
  data() {
    return {
      campaign: {
        selectedScheduleOptions: [],
        template: {},
      },
      e6: 1,
      temp: {},
      action: "",

      getScheduleOptions: [
        {
          id: "DAILY",
          value: "DAILY",
          label: "Daily Campaign",
        },
        {
          id: "WEEKLY",
          value: "WEEKLY",
          label: "Weekly Campaign",
        },
        {
          id: "MONTHLY",
          value: "MONTHLY",
          label: "Montly Campaign",
        },
      ],
    };
  },

  created() {
    if (this.$route.query.action === "viewCampaign") {
      this.action = this.$route.query.action;
      this.$store.dispatch("loadCampaignDetails", this.$route.query.campaignID);
    }
    this.$store.dispatch("loadSystemTemplates");
    this.$store.dispatch("loadCampaignTargets");
    this.$store.dispatch("loadSystemCampaignOffers");
  },

  computed: {
    validateFieldsCampaignDetailsForm() {
      let formStatus = true;
      if (this.campaign.label === undefined || this.campaign.label === "") {
        formStatus = false;
      }
      if (
        this.campaign.description === undefined ||
        this.campaign.description === ""
      ) {
        formStatus = false;
      }
      return formStatus;
    },

    validateSchedulingForm() {
      let formStatus = true;

      if (
        this.campaign.offerId === undefined ||
        this.campaign.offerId === null
      ) {
        formStatus = false;
      }

      if (
        this.campaign.startDate === undefined ||
        this.campaign.startDate === null
      ) {
        formStatus = false;
      }

      if (
        this.campaign.endDate === undefined ||
        this.campaign.endDate === null
      ) {
        formStatus = false;
      }
      return formStatus;
    },

    validateConsentForm() {
      let formStatus = true;
      if (
        this.campaign.consent === undefined ||
        this.campaign.consent === "" ||
        this.campaign.consent === null
      ) {
        formStatus = false;
      }
      return formStatus;
    },

    ...mapState([
      "campaignDetails",
      "isUpdating",
      "fileURI",
      "allTemplates",
      "campaignsOffersOptions",
      "campaignTargets",
      "campaignOffers",
    ]),
    ...mapGetters([
      "getCampaignDetails",
      "messageAlert",
      "getUpdatingStatus",
      "getAllTemplates",
      "getCampaignTargets",
      "getCampaignOffers",
    ]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          type: val.type,
          text: val.body,
        });

        this.$router.push({
          path: "/admin/marketingCampaigns/campaigns",
          query: {
            campaignID: "123",
          },
        });
      }
    },

    getCampaignDetails(val) {
      console.log("getCampaignDetails", val);
      this.campaign = val;
    },
  },

  methods: {
    displayFormError(message) {
      Vue.notify({
        group: "foo",
        title: "Error",
        text: message,
        type: "error",
      });
    },

    submitCampaign(e) {
      console.log("submitCampaign", this.campaign);
      this.$store.dispatch("submitCampaign", this.campaign);
    },

    updateCampaign(e) {
      this.$store.dispatch("updateCampaign", this.campaign);
    },
  },
};
</script>
