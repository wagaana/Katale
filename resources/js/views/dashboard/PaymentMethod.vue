<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h2 class="font-weight-light mb-0">
          {{ getPaymentMethod.label }}
        </h2>
        <span class="overline"> {{ getPaymentMethod.description }}</span>
      </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <v-card elevation="10">
          <v-row class="px-4">
            <v-col class="col-md-10 pr-md-1">
              <p class="font-weight-light">
                <v-icon color="primary"
                  >mdi-checkbox-marked-circle-outline</v-icon
                >
                <span class="overline">{{ getPaymentMethod.status }}</span>
              </p>
            </v-col>
            <v-col class="col-md-2 pr-md-1 fill-width">
              <v-btn
                @click="ChagePaymentMethodStatus"
                color="primary"
                class="font-weight-light"
              >
                {{
                  getPaymentMethod.status === "active"
                    ? "Deactivate"
                    : "Activate"
                }}
              </v-btn>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="px-4">
            <v-col cols="12" sm="4" order-sm="2">
              <v-card min-width="150" elevation="12">
                <v-img
                  v-if="getPaymentMethod.image"
                  :src="`${uploads}${getPaymentMethod.image}`"
                />
              </v-card>
            </v-col>

            <v-col cols="12" sm="8" order-sm="2">
              <v-card
                min-height="300"
                min-width="150"
                elevation="1"
                class="py-2"
              >
                <v-row>
                  <v-col cols="12" sm="6" order="-1" order-sm="2">
                    <v-row>
                      <v-col cols="12" class="py-2">
                        <h4 class="font-weight-bold mb-0">Statistics</h4>
                      </v-col>
                      <v-col cols="12" class="py-2">
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-bike</v-icon>
                          Total Orders:
                          {{
                            getPaymentMethodStatistics.totalOrders !== undefined
                              ? getPaymentMethodStatistics.totalOrders
                              : "0.0"
                          }}
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-signal</v-icon>
                          Successful Transactions:
                          {{
                            getPaymentMethodStatistics.successfulTransactions !==
                            undefined
                              ? getPaymentMethodStatistics.successfulTransactions
                              : "0.0"
                          }}
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-signal-off</v-icon>
                          Failed Transactions:
                          {{
                            getPaymentMethodStatistics.failedTransactions !==
                            undefined
                              ? getPaymentMethodStatistics.failedTransactions
                              : "0.0"
                          }}
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-chart-bar</v-icon>
                          Usage:
                          {{
                            (getPaymentMethodStatistics.totalTransactions /
                              getPaymentMethodStatistics.successfulTransactions) *
                            100
                          }}%
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-currency-eur</v-icon
                          >Minimum Limit (UGX):
                          {{ getPaymentMethod.minLimit }}
                          <a
                            @click="
                              OpenEditModule(
                                'minLimit',
                                'Minimum Limit',
                                getPaymentMethod.minLimit || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-currency-eur</v-icon
                          >Maximum Limit (UGX):
                          {{ getPaymentMethod.maxLimit }}
                          <a
                            @click="
                              OpenEditModule(
                                'maxLimit',
                                'Maximum Limit',
                                getPaymentMethod.maxLimit || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>

                        <v-switch
                          v-model="canDeposit"
                          @change="switchPaymentMethodCanDepositStatus"
                          inset
                          label="Can Deposit"
                          outlined
                          dense
                        >
                        </v-switch>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" sm="6" order="-1" order-sm="2">
                    <v-row>
                      <v-col cols="12" class="py-2">
                        <h4 class="font-weight-bold mb-0">Suport</h4>
                      </v-col>
                      <v-col cols="12" class="py-2">
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-account</v-icon>
                          {{ getPaymentMethod.suport_name }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_name',
                                'Suport Name',
                                getPaymentMethod.suport_name || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-phone</v-icon>
                          {{ getPaymentMethod.suport_phone }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_phone',
                                'Suport Phone',
                                getPaymentMethod.suport_phone || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-at</v-icon>
                          {{ getPaymentMethod.suport_email }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_email',
                                'Suport Email',
                                getPaymentMethod.suport_email || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-web</v-icon>
                          {{ getPaymentMethod.suport_website }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_website',
                                'Suport Website',
                                getPaymentMethod.suport_website || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p>
                          <a
                            class="font-weight-bold"
                            target="__BLANK"
                            :href="`https://www.google.com/maps/search/?api=1&query=${getPaymentMethod.latitude}%2C${getPaymentMethod.longitude}`"
                          >
                            <v-icon color="primary">mdi-map</v-icon>
                            Get Directions
                          </a>
                          <a @click="OpenEditConfigLocation"
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-calendar</v-icon>
                          {{ getPaymentMethod.created_at }}
                        </p>
                        <p class="font-weight-light">
                          {{ data.address }}
                        </p>

                        <v-switch
                          v-model="canSend"
                          @change="switchPaymentMethodCanSendStatus"
                          inset
                          label="Can Send"
                          outlined
                          dense
                        >
                        </v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogEditConfig" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>{{ `Edit ${activeFieldLabel}` }}</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="activeFieldValue"
                :label="`${activeFieldLabel} Value`"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-2">
              <v-btn
                class="ml-auto"
                @click="dialogEditConfig = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="updateConfig">Update</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="viewCurrency" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              {{ activeCurrency.name }}
            </v-card-title>

            <v-card-text class="pa-5">
              <p>
                {{ activeCurrency.code }}
              </p>
              <p>
                Exchange Rate:
                {{ activeCurrency.exchangeRate }}
                <br />
                Country:
                {{ activeCurrency.entity }}
                <br />
                Created:
                {{ activeCurrency.created_at }}
              </p>
            </v-card-text>
            <v-card-actions class="pa-5">
              <v-btn
                color="red"
                @click="deleteCurrency(activeCurrency)"
                outlined
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

        <v-dialog v-model="dialogEditConfigLocation" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>Edit Suport Location</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="getPaymentMethod.latitude"
                label="Latitude"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="getPaymentMethod.longitude"
                label="Longitude"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-2">
              <v-btn
                class="ml-auto"
                @click="dialogEditConfigLocation = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="updateLocationConfig"
                >Update</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-divider></v-divider>

        <v-card class="py-2 pa-0">
          <v-data-table
            :headers="headers"
            :items="getPaymentMethodCurencies"
            item-key="id"
          >
            <template v-slot:item="{ item }">
              <tr @click="displayCurrency(item)">
                <td>{{ item.currency }}</td>
                <td>{{ item.exchangeRate }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.entity }}</td>
                <td>{{ item.created_at }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../utils/constants";

export default {
  data: () => ({
    data: {},
    uploads: uploads,
    dialogEditConfig: false,
    dialogEditConfigLocation: false,
    activeFieldLabel: "",
    activeField: "",
    activeFieldValue: "",
    getDeliveryRequestDetails: {},
    activeCurrency: {},
    viewCurrency: false,
    headers: [
      {
        text: "Currency",
        align: "left",
        sortable: false,
        value: "currency",
      },
      {
        text: "Exchange Rate",
        value: "exchangeRate",
      },
      {
        text: "Currency",
        value: "name",
      },
      {
        text: "Country",
        value: "entity",
      },
      {
        text: "Time Added",
        value: "created_at",
      },
    ],
    canDeposit: false,
    canSend: false,
  }),

  beforeCreate() {
    this.$store.dispatch("fetchPaymentMethod", this.$route.params.code);
    this.$store.dispatch(
      "fetchPaymentMethodStatistics",
      this.$route.params.code
    );
    this.$store.dispatch("loadPaymentMethodCurencies", this.$route.params.code);
  },

  computed: {
    ...mapState([
      "paymentMethodCurencies",
      "paymentMethod",
      "paymentMethodStatistics",
    ]),
    ...mapGetters([
      "getPaymentMethodCurencies",
      "messageAlert",
      "getPaymentMethod",
      "getPaymentMethodStatistics",
    ]),
  },

  created() {},

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("fetchPaymentMethod", this.$route.params.code);
        this.$store.dispatch(
          "fetchPaymentMethodStatistics",
          this.$route.params.code
        );
        this.$store.dispatch(
          "loadPaymentMethodCurencies",
          this.$route.params.code
        );
      }
    },

    getPaymentMethod(val) {
      if (val != null) {
        this.canDeposit = val.canDeposit == "true" ? true : false;
        this.canSend = val.canSend == "true" ? true : false;
      }
    },
  },

  methods: {
    updateConfig() {
      this.$store.dispatch("updatePaymentMethodConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        paymentMethodCode: this.$route.params.code,
      });
      this.dialogEditConfig = false;
    },

    updateLocationConfig() {
      this.$store.dispatch("updatePaymentMethodLocationConfig", {
        latitude: this.getPaymentMethod.latitude,
        longitude: this.getPaymentMethod.longitude,
        paymentMethodCode: this.$route.params.code,
      });
      this.dialogEditConfigLocation = false;
    },

    OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },

    OpenEditConfigLocation() {
      this.dialogEditConfigLocation = true;
    },

    displayCurrency(currency) {
      this.activeCurrency = currency;
      this.viewCurrency = true;
    },

    ChagePaymentMethodStatus() {
      this.$store.dispatch("updatePaymentMethodConfig", {
        activeFieldId: "status",
        activeFieldLabel: "Status",
        activeFieldValue:
          this.getPaymentMethod.status === "active" ? "not active" : "active",
        paymentMethodCode: this.$route.params.code,
      });
    },

    switchPaymentMethodCanDepositStatus() {
      this.$store.dispatch("updatePaymentMethodConfig", {
        activeFieldId: "canDeposit",
        activeFieldLabel: "Deposit Status",
        activeFieldValue: this.canDeposit,
        paymentMethodCode: this.$route.params.code,
      });
    },

    switchPaymentMethodCanSendStatus() {
      this.$store.dispatch("updatePaymentMethodConfig", {
        activeFieldId: "canSend",
        activeFieldLabel: "Send Status",
        activeFieldValue: this.canSend,
        paymentMethodCode: this.$route.params.code,
      });
    },

    switchDepositTariffsStatus() {
      this.$store.dispatch("updatePaymentMethodCurrencyConfig", {
        activeFieldId: "depositTariffEnabled",
        activeFieldLabel: "Deposit Tariff",
        activeFieldValue: this.depositTariffEnabled,
        paymentMethodCode: this.$route.params.currencyCode,
      });
    },

    OpenCuccencyDetails(activeCurrency) {
      this.$router.push({
        path:
          "/admin/paymentMethods/" +
          this.$route.params.code +
          "/" +
          activeCurrency.code,
      });
    },
  },
};
</script>
