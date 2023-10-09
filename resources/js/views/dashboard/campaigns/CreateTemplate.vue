<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-md-10 pr-md-1 sm-6">
          <h1
            v-if="action !== 'vewTemplate'"
            class="font-weight-light white--text"
          >
            Create Template
          </h1>
          <h1 v-else class="font-weight-light white--text">Update Template</h1>
        </div>
        <div class="col-md-2 pr-md-1 fill-width">
          <v-btn
            v-if="action !== 'vewTemplate'"
            @click="SubmitTemplate"
            class="primary font-weight-light"
            >Submit Template</v-btn
          >
          <v-btn
            v-else
            @click="UpdateTemplate"
            class="primary font-weight-light"
            >Update Template</v-btn
          >
        </div>

        <div class="col-md-12 pr-md-1 fill-width">
          <v-card class="mb-3">
            <v-container>
              <div class="mb-3 row">
                <div class="col-md-6">
                  <v-col md="12" sm="12">
                    <v-form ref="templateForm" v-model="valid" lazy-validation>
                      <v-expansion-panels :value="0">
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            Template Description
                            <template v-slot:actions>
                              <v-icon color="primary"
                                >mdi-arrow-up-circle</v-icon
                              >
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-container>
                              <v-text-field
                                v-model="newTemplate.label"
                                label="Template Name"
                                outlined
                                dense
                                :rules="[rules.required]"
                              />

                              <v-textarea
                                v-model="newTemplate.description"
                                label="Template Description"
                                outlined
                                dense
                                :rules="[rules.required]"
                              />
                            </v-container>
                          </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            Template Html Content
                            <template v-slot:actions>
                              <v-icon color="primary"
                                >mdi-arrow-up-circle</v-icon
                              >
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-textarea
                              v-model="newTemplate.html"
                              label="Template Html"
                              outlined
                              dense
                              :rules="[rules.required]"
                            />
                          </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            Template Parameters
                            <template v-slot:actions>
                              <v-icon color="primary"
                                >mdi-arrow-up-circle</v-icon
                              >
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <!--Table query parameters below-->
                            <div>
                              <label>Query parameters</label>
                              <v-row>
                                <v-col lg="6">
                                  <v-text-field
                                    v-model="parameter.label"
                                    label="Label"
                                    outlined
                                    dense
                                  />
                                </v-col>
                                <v-col lg="6">
                                  <v-text-field
                                    v-model="parameter.placeHolder"
                                    label="Place Holder"
                                    outlined
                                    dense
                                  />
                                </v-col>
                              </v-row>
                              <div class="row">
                                <div class="col-md-4">
                                  <v-select
                                    v-model="parameter.inputType"
                                    :items="inputTypes"
                                    item-text="label"
                                    item-value="id"
                                    label="Type"
                                    dense
                                    outlined
                                  />
                                </div>
                                <div class="col-md-4">
                                  <v-select
                                    v-model="parameter.value"
                                    :items="
                                      getTemplateVariables(newTemplate.html)
                                    "
                                    label="Variable"
                                    dense
                                    outlined
                                  />
                                </div>
                                <div class="col-md-4">
                                  <v-btn
                                    color="primary"
                                    block
                                    depressed
                                    @click="
                                      (parameter.value !== undefined) &
                                      (parameter.label !== undefined) &
                                      (parameter.placeHolder !== undefined)
                                        ? newTemplate.parameters.push(parameter)
                                        : displayError();
                                      parameter = {};
                                    "
                                    >Set</v-btn
                                  >
                                </div>
                              </div>
                              <div class="py-4">
                                <v-data-table
                                  :headers="tableHeaders"
                                  :items="newTemplate.parameters"
                                  v-if="newTemplate.parameters.length > 0"
                                >
                                  <template v-slot:item="{ item }">
                                    <tr @click="loadParameter(item)">
                                      <td>
                                        {{ item.inputType }}
                                      </td>
                                      <td>
                                        {{ item.label }}
                                      </td>
                                      <td>
                                        {{ item.value }}
                                      </td>
                                    </tr>
                                  </template>
                                </v-data-table>
                              </div>

                              <div
                                class="
                                  row
                                  px-4
                                  pb-2
                                  d-flex
                                  justify-content-end
                                  align-items-end
                                "
                                v-if="newTemplate.parameters.length > 0"
                              ></div>
                            </div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-form>
                  </v-col>
                </div>

                <div class="col-md-6 col">
                  <div class="col-md-12">
                    <v-card class="col-md-12">
                      <div v-html="newTemplate.html"></div>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-container>
          </v-card>
        </div>
      </div>

      <v-dialog v-model="dialogParameter" width="340">
        <v-card>
          <v-card-title class="headline" primary-title>
            {{ activeParameter.label }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card class="pa-5">
            <v-card-text>
              <p>Type: {{ activeParameter.inputType }}</p>
              <p>Value: {{ activeParameter.value }}</p>
              <p>{{ activeParameter.placeHolder }}</p>
            </v-card-text>
          </v-card>
          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="deleteParameter(activeParameter)"
              outlined
              color="red"
              >Delete</v-btn
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
import { uploads } from "../../../utils/constants";

export default {
  data: () => ({
    newTemplate: {
      parameters: [],
    },
    action: null,
    activeParameter: {},
    parameter: {},
    dialogParameter: false,
    inputTypes: [
      { id: "text", label: "Text", value: "text" },
      { id: "string", label: "String", value: "string" },
      { id: "file", label: "Image File", value: "file" },
    ],

    inputVariables: [],

    tableHeaders: [
      { text: "Type", value: "inputType" },
      { text: "Label", value: "label" },
      { text: "Value", value: "value" },
    ],

    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
  }),

  created() {
    if (this.$route.query.action === "vewTemplate") {
      this.action = this.$route.query.action;
      this.$store.dispatch("loadTemplateDetails", this.$route.query.id);
    }
  },

  computed: {
    ...mapState(["allTemplates", "templateDetails"]),
    ...mapGetters(["getAllTemplates", "getTemplateDetails", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          type: val.type,
          title: val.title,
          text: val.body,
        });

        if (val.body === "OK") {
          this.$router.push({
            path: "/admin/marketingCampaigns/campaignTemplates",
            query: {},
          });
        }
      }
    },

    getTemplateDetails(val) {
      if (val != null) {
        try {
          this.newTemplate = val;
          this.getTemplateVariables(this.getTemplateDetails.html);
        } catch (e) {}
      }
    },
  },

  methods: {
    SubmitTemplate() {
      if (this.$refs.templateForm.validate()) {
        // send it
        if (this.newTemplate.parameters.length > 0) {
          this.$store.dispatch("submitTemplate", this.newTemplate);
        } else {
          Vue.notify({
            group: "foo",
            type: "error",
            title: "Error",
            text: "Set all template variables to continue...",
          });
        }
      } else {
        Vue.notify({
          group: "foo",
          type: "error",
          title: "Error",
          text: "Set all template variables to continue...",
        });
      }
    },
    UpdateTemplate() {
      if (this.$refs.templateForm.validate()) {
        // send it
        if (this.newTemplate.parameters.length > 0) {
          this.$store.dispatch("updateTemplate", this.newTemplate);
        } else {
          Vue.notify({
            group: "foo",
            type: "error",
            title: "Error",
            text: "Set all template variables to continue...",
          });
        }
      } else {
        Vue.notify({
          group: "foo",
          type: "error",
          title: "Error",
          text: "Set all template variables to continue...",
        });
      }
    },

    loadParameter(parameter) {
      this.activeParameter = parameter;
      this.dialogParameter = true;
    },

    deleteParameter(parameter) {
      this.newTemplate.parameters = this.newTemplate.parameters.filter(
        function (el) {
          return el.label != parameter.label;
        }
      );
      this.dialogParameter = false;
    },

    displayError() {
      Vue.notify({
        group: "foo",
        type: "error",
        title: "Error",
        text: "All fields are required",
      });
    },

    getTemplateVariables(htmlVariables) {
      let freeVariables = [];
      try {
        // eslint-disable-next-line no-useless-escape
        htmlVariables = htmlVariables.match(/\%[^}\s]+\%/g || []);
        for (const mIndex in htmlVariables) {
          let addToList = true;
          for (const index in this.newTemplate.parameters) {
            if (
              this.newTemplate.parameters[index].value === htmlVariables[mIndex]
            ) {
              addToList = false;
              break;
            }
          }
          if (addToList) {
            freeVariables.push(htmlVariables[mIndex]);
          }
        }
      } catch (e) {}
      return freeVariables;
    },
  },
};
</script>
