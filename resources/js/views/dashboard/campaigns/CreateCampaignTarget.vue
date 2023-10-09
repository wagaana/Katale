<template>
  <div class="container">
    <div>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Campaign Target Details
          <small>Describe your target below.</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card class="mb-12">
            <v-container>
              <v-text-field
                v-model="campaignTarget.label"
                label="Campaign Target Name"
                outlined
                dense
              />

              <v-textarea
                v-model="campaignTarget.description"
                label="Campaign Target Description"
                outlined
                dense
              />
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

        <!--campaign target below-->
        <v-stepper-step :complete="e6 > 2" step="3"
          >Configure Target.</v-stepper-step
        >
        <v-stepper-content step="2">
          <v-card class="mb-12">
            <v-container>
              <CampaignTargetComponent
                ref="campaignTarget"
                :campaignTarget="campaignTarget.target"
              />
            </v-container>
          </v-card>
          <v-btn class="md-1 px-6" @click="e6 = 1">Back</v-btn>
          <v-btn
            color="primary"
            @click="
              validateTargetForm() != false
                ? submitCampaignTarget()
                : displayFormError('Please configure target.')
            "
            >Continue</v-btn
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
import CampaignTargetComponent from "../../../components/CampaignTargetComponent.vue";

export default {
  components: {
    CampaignTargetComponent: CampaignTargetComponent,
  },

  data() {
    return {
      campaignTarget: { target: null },
      e6: 1,
      temp: {},
      action: "",

      activeTableMappings: [
        { id: "name", label: "User Name" },
        { id: "email", label: "Email" },
        { id: "wallet_balance", label: "Wallet Balance" },
        { id: "level", label: "Level" },
      ],
    };
  },

  created() {
    if (this.$route.query.action === "viewTarget") {
      this.action = this.$route.query.action;
      this.$store.dispatch(
        "loadCampaignTargetDetails",
        this.$route.query.targetID
      );
    }
    this.$store.dispatch("loadSystemTemplates");
  },

  computed: {
    validateFieldsCampaignDetailsForm() {
      let formStatus = true;
      if (
        this.campaignTarget.label === undefined ||
        this.campaignTarget.label === ""
      ) {
        formStatus = false;
      }
      if (
        this.campaignTarget.description === undefined ||
        this.campaignTarget.description === ""
      ) {
        formStatus = false;
      }
      return formStatus;
    },
    ...mapState(["isUpdating", "campaignTargetDetails"]),
    ...mapGetters([
      "messageAlert",
      "getUpdatingStatus",
      "getCampaignTargetDetails",
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
          path: "/admin/marketingCampaigns/campaignTargets",
          query: {},
        });
      }
    },

    getCampaignTargetDetails(val) {
      if (val != null) {
        this.campaignTarget = val;
      }
    },
  },

  methods: {
    ...mapActions(["uploadCampaignTestData"]),

    validateTargetForm() {
      let target = this.$refs.campaignTarget.getTarget();
      return target.length > 0 ? true : false;
    },

    displayFormError(message) {
      Vue.notify({
        group: "foo",
        title: "Error",
        text: message,
        type: "error",
      });
    },

    submitCampaignTarget(e) {
      this.campaignTarget.target = this.$refs.campaignTarget.getTarget();
      console.log("submitCampaignTarget", this.campaignTarget);
      this.$store.dispatch("submitCampaignTarget", this.campaignTarget);
    },

    updateCampaignTarget(e) {
      this.campaignTarget.target = this.$refs.campaignTarget.getTarget();
      console.log("updateCampaignTarget", this.campaignTarget);
      this.$store.dispatch("updateCampaignTarget", this.campaignTarget);
    },
  },
};
</script>
