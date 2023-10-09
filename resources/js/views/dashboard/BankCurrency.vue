<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0"> </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <v-card elevation="10">
          <v-row class="px-4">
            <v-col class="col-md-10 pr-md-1">
              <h2 class="col-md-10 pr-md-1">
                {{ getBankCurencyDetails.code }}
              </h2>
            </v-col>
            <v-col class="col-md-2 pr-md-1 fill-width">
              <v-btn
                @click="dialogAddTariff = true"
                color="primary"
                class="font-weight-light"
              >
                Add Tariff
              </v-btn>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="px-4">
            <v-col
              cols="12 py-2"
              sm="12"
              order-sm="2"
              min-height="100"
              min-width="150"
            >
              <v-row>
                <v-col cols="12" sm="4" order="-1" order-sm="2">
                  <v-row>
                    <v-col cols="12" class="py-2">
                      <h4 class="font-weight-bold mb-0">Config</h4>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <v-switch
                        v-model="depositChargesEnabled"
                        @change="switchDepositChargesEnabledStatus"
                        inset
                        label="Deposit Charges"
                        outlined
                        dense
                      >
                      </v-switch>

                      <v-switch
                        v-model="withdrowTariffEnabled"
                        @change="switchWithdrowTariffsStatus"
                        inset
                        label="Withdrow Tariffs"
                        outlined
                        dense
                      >
                      </v-switch>

                      <v-switch
                        v-model="depositTariffEnabled"
                        @change="switchDepositTariffsStatus"
                        inset
                        label="Deposit Tariffs"
                        outlined
                        dense
                      >
                      </v-switch>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" sm="4" order="-1" order-sm="2">
                  <v-row>
                    <v-col cols="12" class="py-2">
                      <h4 class="font-weight-bold mb-0">Exchange</h4>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Buy:
                        {{ getBankCurencyDetails.buy }}
                        <a
                          @click="
                            OpenEditModule(
                              'buy',
                              'Buy Price',
                              getBankCurencyDetails.buy || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Sell:
                        {{ getBankCurencyDetails.sell }}
                        <a
                          @click="
                            OpenEditModule(
                              'sell',
                              'Sell Price',
                              getBankCurencyDetails.sell || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Charge Percentage:
                        {{ getBankCurencyDetails.chargePercentage }}
                        <a
                          @click="
                            OpenEditModule(
                              'chargePercentage',
                              'Charge Percentage',
                              getBankCurencyDetails.chargePercentage || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Txn Fee:
                        {{ getBankCurencyDetails.transactionFee }}
                        <a
                          @click="
                            OpenEditModule(
                              'transactionFee',
                              'Transaction Fee',
                              getBankCurencyDetails.transactionFee || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon
                        >Exchange Rate:
                        {{ getBankCurencyDetails.exchangeRate }}
                        <a
                          @click="
                            OpenEditModule(
                              'exchangeRate',
                              'Exchange Rate',
                              getBankCurencyDetails.exchangeRate || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" sm="4" order="-1" order-sm="2">
                  <v-row>
                    <v-col cols="12" class="py-2">
                      <h4 class="font-weight-bold mb-0">Charge</h4>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Currency:
                        {{ getBankCurencyDetails.currency }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Max Withdrow Limite:
                        {{ getBankCurencyDetails.maxWithdrowLimit }}
                        <a
                          @click="
                            OpenEditModule(
                              'maxWithdrowLimit',
                              'Max Withdrow Limit',
                              getBankCurencyDetails.maxWithdrowLimit || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Min Withdrow Limite:
                        {{ getBankCurencyDetails.minWithdrowLimit }}
                        <a
                          @click="
                            OpenEditModule(
                              'minWithdrowLimit',
                              'Min Withdrow Limit',
                              getBankCurencyDetails.minWithdrowLimit || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Max Deposit Limite:
                        {{ getBankCurencyDetails.maxDepositLimit }}
                        <a
                          @click="
                            OpenEditModule(
                              'maxDepositLimit',
                              'Max Deposit Limit',
                              getBankCurencyDetails.maxDepositLimit || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Min Deposit Limite:
                        {{ getBankCurencyDetails.minDepositLimit }}
                        <a
                          @click="
                            OpenEditModule(
                              'minDepositLimit',
                              'Min Deposit Limit',
                              getBankCurencyDetails.minDepositLimit || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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

        <v-dialog v-model="viewCurrencyTariff" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              {{
                `${activeCurrencyTariff.minAmmount} - ${activeCurrencyTariff.maxAmmount} (${getBankCurencyDetails.currency})`
              }}
            </v-card-title>

            <v-card-text class="pa-5">
              <p>
                {{ activeCurrencyTariff.code }}
              </p>
              <p>
                Sending Fee:
                {{ activeCurrencyTariff.sending }}
                <br />
                Withdraw Fee:
                {{ activeCurrencyTariff.withdraw }}
                <br />
                Payments Fee:
                {{ activeCurrencyTariff.payments }}
                <br />
                Min Tax:
                {{ activeCurrencyTariff.minTax }}
                <br />
                Max Tax:
                {{ activeCurrencyTariff.maxTax }}
                <br />
                Created:
                {{ activeCurrencyTariff.created_at }}
              </p>
            </v-card-text>
            <v-card-actions class="pa-5">
              <v-btn
                color="red"
                @click="deleteCurrencyTariff(activeCurrencyTariff)"
                outlined
                >Delete</v-btn
              >
              <v-btn
                class="ml-auto"
                @click="openEditTariffDialog"
                outlined
                color="primary"
                >Edit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogAddTariff" width="600">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>Add New Tariff</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="newTariff.minAmmount"
                    label="Min Ammount"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="newTariff.maxAmmount"
                    label="Max Ammount"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="newTariff.sending"
                    label="Sending Fee"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="newTariff.withdraw"
                    label="Withdraw Fee"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="newTariff.payments"
                    label="Payments Fee"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="newTariff.minTax"
                    label="Min Tax"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="newTariff.maxTax"
                    label="Max Tax"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                class="ml-auto"
                @click="dialogAddTariff = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="AddNewTariff">Add Tariff</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogEditTariff" width="600">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>Edit Tariff</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="activeCurrencyTariff.minAmmount"
                    label="Min Ammount"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="activeCurrencyTariff.maxAmmount"
                    label="Max Ammount"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="activeCurrencyTariff.sending"
                    label="Sending Fee"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="activeCurrencyTariff.withdraw"
                    label="Withdraw Fee"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="activeCurrencyTariff.payments"
                    label="Payments Fee"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="activeCurrencyTariff.minTax"
                    label="Min Tax"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="activeCurrencyTariff.maxTax"
                    label="Max Tax"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                class="ml-auto"
                @click="dialogEditTariff = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="UpdateActiveCurrencyTariff"
                >Update</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-divider></v-divider>

        <h4 class="font-weight-bold mb-0">Tariffs</h4>

        <v-card class="py-2 pa-2">
          <v-data-table
            :headers="headers"
            :items="getBankCurrencyTariffs"
            item-key="id"
          >
            <template v-slot:item="{ item }">
              <tr @click="displayCurrencyTariff(item)">
                <td>{{ `${item.minAmmount} - ${item.maxAmmount}` }}</td>
                <td>{{ item.sending }}</td>
                <td>{{ item.withdraw }}</td>
                <td>{{ item.payments }}</td>
                <td>{{ item.minTax }}</td>
                <td>{{ item.maxTax }}</td>
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
    dialogAddTariff: false,
    dialogEditTariff: false,
    activeFieldLabel: "",
    activeField: "",
    activeFieldValue: "",
    getDeliveryRequestDetails: {},
    activeCurrencyTariff: {},
    newTariff: {
      code: "",
      currency: "",
      minAmmount: 0,
      maxAmmount: 0,
      sending: 0,
      withdraw: 0,
      payments: 0,
      minTax: 0,
      maxTax: 0,
    },
    viewCurrencyTariff: false,
    headers: [
      {
        text: "Ammount Range",
        align: "left",
        sortable: false,
        value: "minAmmount",
      },
      {
        text: "Sending Fee",
        value: "sending",
      },
      {
        text: "Withdraw Fee",
        value: "withdraw",
      },
      {
        text: "Payments Fee",
        value: "payments",
      },
      {
        text: "Min Tax",
        value: "minTax",
      },
      {
        text: "Max Tax",
        value: "maxTax",
      },
    ],
    withdrowTariffEnabled: false,
    depositTariffEnabled: false,
    depositChargesEnabled: false,
  }),

  beforeCreate() {
    this.$store.dispatch(
      "loadBankCurencyDetails",
      this.$route.params.currencyCode
    );
    this.$store.dispatch(
      "fetchPaymentMethodStatistics",
      this.$route.params.code
    );
    this.$store.dispatch(
      "fetchBankCurrencyTariffs",
      this.$route.params.currencyCode
    );
  },

  computed: {
    ...mapState([
      "bankCurrencyTariffs",
      "bankCurencyDetails",
      "paymentMethodStatistics",
    ]),
    ...mapGetters([
      "getBankCurrencyTariffs",
      "messageAlert",
      "getBankCurencyDetails",
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
        this.$store.dispatch(
          "loadBankCurencyDetails",
          this.$route.params.currencyCode
        );
        this.$store.dispatch(
          "fetchPaymentMethodStatistics",
          this.$route.params.code
        );
        this.$store.dispatch(
          "fetchBankCurrencyTariffs",
          this.$route.params.currencyCode
        );
      }
    },

    getBankCurencyDetails(val) {
      if (val != null) {
        this.withdrowTariffEnabled =
          val.withdrowTariffEnabled == "true" ? true : false;
        this.depositTariffEnabled =
          val.depositTariffEnabled == "true" ? true : false;
        this.depositChargesEnabled =
          val.depositChargesEnabled == "true" ? true : false;
      }
    },
  },

  methods: {
    updateConfig() {
      this.$store.dispatch("updateBankCurrencyConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        paymentMethodCode: this.$route.params.currencyCode,
      });
      this.dialogEditConfig = false;
    },

    AddNewTariff() {
      this.newTariff.code = this.$route.params.currencyCode;
      this.newTariff.currency = this.$route.params.code;

      this.$store.dispatch("addNewBankCurrencyTariff", this.newTariff);
      this.dialogAddTariff = false;
    },

    UpdateActiveCurrencyTariff() {
      this.$store.dispatch(
        "updateBankCurrencyTariff",
        this.activeCurrencyTariff
      );
      this.dialogEditTariff = false;
    },

    OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },

    OpenEditConfigLocation() {
      this.dialogAddTariff = true;
    },

    displayCurrencyTariff(currency) {
      this.activeCurrencyTariff = currency;
      this.viewCurrencyTariff = true;
    },

    deleteCurrencyTariff(activeCurrencyTariff) {
      this.viewCurrencyTariff = false;

      this.$store.dispatch(
        "deleteBankCurrencyTariffs",
        activeCurrencyTariff.id
      );
    },

    openEditTariffDialog() {
      this.viewCurrencyTariff = false;
      this.dialogEditTariff = true;
    },

    switchDepositTariffsStatus() {
      this.$store.dispatch("updateBankCurrencyConfig", {
        activeFieldId: "depositTariffEnabled",
        activeFieldLabel: "Deposit Tariff",
        activeFieldValue: this.depositTariffEnabled,
        paymentMethodCode: this.$route.params.currencyCode,
      });
    },

    switchWithdrowTariffsStatus() {
      this.$store.dispatch("updateBankCurrencyConfig", {
        activeFieldId: "withdrowTariffEnabled",
        activeFieldLabel: "Withdrow Tariff",
        activeFieldValue: this.withdrowTariffEnabled,
        paymentMethodCode: this.$route.params.currencyCode,
      });
    },

    switchDepositChargesEnabledStatus() {
      this.$store.dispatch("updateBankCurrencyConfig", {
        activeFieldId: "depositChargesEnabled",
        activeFieldLabel: "Depost Charges Status",
        activeFieldValue: this.depositChargesEnabled,
        paymentMethodCode: this.$route.params.currencyCode,
      });
    },
  },
};
</script>
