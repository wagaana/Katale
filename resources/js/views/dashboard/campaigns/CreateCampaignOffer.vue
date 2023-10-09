<template>
  <div class="container">
    <div>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Campaign Offer Details
          <small>Describe your campaign offer below.</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card class="mb-12">
            <v-container>
              <v-text-field
                v-model="campaignOffer.label"
                label="Campaign Offer Name"
                outlined
                dense
              />

              <v-textarea
                v-model="campaignOffer.description"
                label="Campaign Offer Description"
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

        <v-stepper-step :complete="e6 > 2" step="2"
          >Configure Campaign Offer.</v-stepper-step
        >
        <v-stepper-content step="2">
          <v-card class="mb-3">
            <!-- <v-card-text> -->
            <v-container>
              <!-- campaign offer here-->
              <div class="mb-3 row">
                <div class="col-md-6 col">
                  <div class="col-md-12">
                    <v-text-field
                      v-model="campaignOffer.subject"
                      placeholder="Email Subject"
                      outlined
                      dense
                    />

                    <div>
                      <span
                        v-for="(parameter, i) in emailTemplate.parameters"
                        :key="i"
                      >
                        <v-file-input
                          v-if="parameter.inputType === 'file'"
                          :label="parameter.label"
                          @change="onImageFileChange($event, parameter)"
                          outlined
                          dense
                        ></v-file-input>

                        <v-text-field
                          v-if="parameter.inputType === 'string'"
                          v-model="parameter.placeHolder"
                          :label="parameter.label"
                          outlined
                          dense
                        />

                        <div
                          style="position: relative"
                          v-if="parameter.inputType === 'text'"
                        >
                          <v-textarea
                            v-model="parameter.placeHolder"
                            outlined
                            dense
                            :label="parameter.label"
                          />
                          <v-btn
                            variant="outline-primary"
                            style="
                              position: absolute;
                              right: 5px;
                              top: 5px;
                              padding: 5px 10px;
                              font-weight: bold;
                            "
                            @click="
                              activeField = parameter.value;
                              showModal('modalUserParams');
                            "
                            >{}</v-btn
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col">
                  <div class="col-md-12">
                    <v-select
                      label="Offer Template"
                      :items="getCampaignTemplates"
                      item-text="label"
                      item-value="templateID"
                      v-model="campaignOffer.templateID"
                      outlined
                      dense
                    >
                    </v-select>
                    <v-card class="col-md-12" v-html="getEmailTemplateHtml">
                    </v-card>
                  </div>
                </div>
              </div>
            </v-container>
          </v-card>
          <v-btn class="md-1 px-6" @click="e6 = 1">Back</v-btn>
          <v-btn
            v-if="action !== 'vewOffer'"
            color="primary"
            @click="
              validateOfferForm != false
                ? submitCampaignOffer()
                : displayFormError('Please provide the offer.')
            "
            >Submit</v-btn
          >
          <v-btn
            v-else
            color="primary"
            @click="
              validateOfferForm != false
                ? updateCampaignOffer()
                : displayFormError('Please provide the offer.')
            "
            >Update</v-btn
          >
        </v-stepper-content>
      </v-stepper>

      <v-dialog v-model="dialogRead" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            <v-toolbar-title>Select Field to Add</v-toolbar-title>
          </v-card-title>

          <v-card class="pa-5">
            <v-row
              v-for="(field, index) in activeTableMappings"
              :key="`field: ${index}`"
              class="mb-3"
            >
              <v-btn
                @click="appendSelectedParam(field)"
                variant="outline-primary"
                style="width: 100%"
                >{{ field.label }}</v-btn
              >
            </v-row>
          </v-card>
        </v-card>
      </v-dialog>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
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
      overlay: false,
      uploads: uploads,
      fullscreenLoading: false,
      campaignOffer: {},
      e6: 1,
      emailTemplate: {
        parameters: [],
      },
      temp: {},
      dialogRead: false,
      activeField: null,
      action: "",

      activeTableMappings: [
        {
          id: "userId",
          label: "User Id",
        },
        {
          id: "email",
          label: "Email Address",
        },
        {
          id: "phone",
          label: "Phone Number",
        },
        {
          id: "userName",
          label: "User Name",
        },
        {
          id: "emailVerified",
          label: "Email Varified",
        },
        {
          id: "level",
          label: "User level",
        },
        {
          id: "dob",
          label: "Date Of Birth",
        },
        {
          id: "gender",
          label: "User Gender",
        },
        {
          id: "joinDate",
          label: "Join Date",
        },
      ],
    };
  },

  created() {
    if (this.$route.query.action === "vewOffer") {
      this.action = this.$route.query.action;
      this.$store.dispatch(
        "loadSystemCampaignOfferDetails",
        this.$route.query.id
      );
    }
    this.$store.dispatch("loadCampaignTemplates");
  },

  computed: {
    getEmailTemplateHtml() {
      const context = this;
      try {
        console.log(context.campaignOffer.templateID);
        for (const offerIndex in context.getCampaignTemplates) {
          if (
            context.getCampaignTemplates[offerIndex].templateID ===
            context.campaignOffer.templateID
          ) {
            context.emailTemplate = context.getCampaignTemplates[offerIndex];
            break;
          }
        }
      } catch (e) {
        console.log("Error getting template");
      }
      let templateHtml = context.emailTemplate.html;
      for (const index in context.emailTemplate.parameters) {
        let keyToReplace = context.emailTemplate.parameters[index].value;
        let placeHolder = context.emailTemplate.parameters[index].placeHolder;
        const inputType = context.emailTemplate.parameters[index].inputType;
        if (inputType === "file") {
          placeHolder = `${context.uploads}${placeHolder}`;
        }
        templateHtml = templateHtml.replace(keyToReplace, placeHolder);
      }
      return templateHtml;
    },

    validateFieldsCampaignDetailsForm() {
      let formStatus = true;
      if (
        this.campaignOffer.label === undefined ||
        this.campaignOffer.label === ""
      ) {
        formStatus = false;
      }
      if (
        this.campaignOffer.description === undefined ||
        this.campaignOffer.description === ""
      ) {
        formStatus = false;
      }
      return formStatus;
    },

    validateOfferForm() {
      let formStatus = true;
      return formStatus;
    },
    ...mapState([
      "systemCampaignOfferDetails",
      "isUpdating",
      "campaignTemplates",
      "campaignsOffersOptions",
      "uploadedCampaignOfferFile",
    ]),
    ...mapGetters([
      "getSystemCampaignOfferDetails",
      "messageAlert",
      "getUpdatingStatus",
      "getCampaignTemplates",
      "getUploadedCampaignOfferFile",
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
      }
    },
    getSystemCampaignOfferDetails(val) {
      console.log("getSystemCampaignOfferDetails", val);
      this.emailTemplate.parameters = val.parameters;
      this.emailTemplate.html = val.html;
      this.campaignOffer = val;
    },

    getUploadedCampaignOfferFile(val) {
      val &&
        setTimeout(() => {
          let index = this.emailTemplate.parameters.findIndex(
            (el) => el.id == parseInt(val.reference)
          );
          this.emailTemplate.parameters[index].placeHolder = val.fileName;
          this.overlay = false;
        }, 3000);
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
    onImageFileChange(e, parameter) {
      console.log(e);
      if (e !== null) {
        this.overlay = true;
        const formData = new FormData();
        formData.append("image", e);
        formData.append("reference", parameter.id);
        this.$store.dispatch("uploadCampaignOfferFile", formData);
      }
    },
    showModal(refname) {
      this.dialogRead = true;
    },

    appendSelectedParam(field) {
      if (this.activeField == null) {
        this.campaignOffer.template.message =
          this.campaignOffer.template.message + " {" + field.id + "}";
      } else {
        let index = this.emailTemplate.parameters.findIndex(
          (el) => el.value == this.activeField
        );
        let placeHolder = this.emailTemplate.parameters[index].placeHolder;

        if (placeHolder == undefined || placeHolder == null) {
          placeHolder = " {" + field.id + "}";
        } else {
          placeHolder = placeHolder + " {" + field.id + "}";
        }
        this.emailTemplate.parameters[index].placeHolder = placeHolder;
        this.emailTemplate.parameters[index].placeHolder = placeHolder;
      }
      this.dialogRead = false;
    },

    submitCampaignOffer() {
      const context = this;
      this.campaignOffer.html = context.emailTemplate.html;
      this.campaignOffer.parameters = context.emailTemplate.parameters;
      console.log("submitCampaignOffer", this.campaignOffer);
      this.$store.dispatch("submitCampaignOffer", this.campaignOffer);
    },

    updateCampaignOffer() {
      const context = this;
      this.campaignOffer.html = context.emailTemplate.html;
      this.campaignOffer.parameters = context.emailTemplate.parameters;
      console.log("updateCampaignOffer", this.campaignOffer);
      this.$store.dispatch("updateCampaignOffer", this.campaignOffer);
    },
  },
};
</script>
