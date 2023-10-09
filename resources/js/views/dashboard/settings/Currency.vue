<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0"> </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <v-card elevation="10">
          <v-row class="px-4">
            <v-col class="col-md-10 pr-md-1">
              <h2 class="col-md-10 pr-md-1">
                {{ getCurencyDetails.name }}
              </h2>
            </v-col>
            <v-col class="col-md-2 pr-md-1 fill-width"> </v-col>
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
                      <h4 class="font-weight-bold mb-0">Suport</h4>
                    </v-col>
                    <v-col cols="12" class="py-2">
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-account</v-icon>
                        {{ getCurencyDetails.suport_name }}
                        <a
                          @click="
                            OpenEditModule(
                              'suport_name',
                              'Suport Name',
                              getCurencyDetails.suport_name || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-phone</v-icon>
                        {{ getCurencyDetails.suport_phone }}
                        <a
                          @click="
                            OpenEditModule(
                              'suport_phone',
                              'Suport Phone',
                              getCurencyDetails.suport_phone || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-at</v-icon>
                        {{ getCurencyDetails.suport_email }}
                        <a
                          @click="
                            OpenEditModule(
                              'suport_email',
                              'Suport Email',
                              getCurencyDetails.suport_email || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-web</v-icon>
                        {{ getCurencyDetails.suport_website }}
                        <a
                          @click="
                            OpenEditModule(
                              'suport_website',
                              'Suport Website',
                              getCurencyDetails.suport_website || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p>
                        <a
                          class="font-weight-bold"
                          target="__BLANK"
                          :href="`https://www.google.com/maps/search/?api=1&query=${getCurencyDetails.latitude}%2C${getCurencyDetails.longitude}`"
                        >
                          <v-icon color="primary">mdi-map</v-icon>
                          Get Directions
                        </a>
                        <a @click="OpenEditConfigLocation"
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-light">
                        {{ data.address }}
                      </p>
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
                        <v-icon color="primary">mdi-currency-eur</v-icon
                        >Exchange Rate:
                        {{ getCurencyDetails.exchange_rate }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Buy:
                        {{ getCurencyDetails.buy }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Sell:
                        {{ getCurencyDetails.sell }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Conversion Charge %ge:
                        {{ getCurencyDetails.conversionChargePercentage }}
                        <a
                          @click="
                            OpenEditModule(
                              'conversionChargePercentage',
                              'Charge Percentage %ge',
                              getCurencyDetails.conversionChargePercentage ||
                                0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Txn Fee:
                        {{ getCurencyDetails.transactionFee }}
                        <a
                          @click="
                            OpenEditModule(
                              'transactionFee',
                              'Transaction Fee',
                              getCurencyDetails.transactionFee || 0.0
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
                        {{ getCurencyDetails.code }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Bid Ask %ge Buy:
                        {{ getCurencyDetails.bidAskPercentageBuy }}
                        <a
                          @click="
                            OpenEditModule(
                              'bidAskPercentageBuy',
                              'Bid Ask %ge Buy',
                              getCurencyDetails.bidAskPercentageBuy || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Bid Ask %ge Sell:
                        {{ getCurencyDetails.bidAskPercentageSell }}
                        <a
                          @click="
                            OpenEditModule(
                              'bidAskPercentageSell',
                              'Bid Ask %ge Sell',
                              getCurencyDetails.bidAskPercentageSell || 0.0
                            )
                          "
                          ><v-icon color="primary">mdi-pencil</v-icon></a
                        >
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Country:
                        {{ getCurencyDetails.entity }}
                      </p>
                      <p class="font-weight-bold">
                        <v-icon color="primary">mdi-currency-eur</v-icon>
                        Minor Unit:
                        {{ getCurencyDetails.minorUnit }}
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

        <v-dialog v-model="dialogEditConfigLocation" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>Edit Suport Location</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="getCurencyDetails.suport_latitude"
                label="Latitude"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="getCurencyDetails.suport_longitude"
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";

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
    dialogEditConfigLocation: false,
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
    withdrowTariffEnabled: false,
    depositTariffEnabled: false,
    depositChargesEnabled: false,
  }),

  beforeCreate() {
    this.$store.dispatch("loadCurencyDetails", this.$route.params.code);
  },

  computed: {
    ...mapState(["curencyDetails"]),
    ...mapGetters(["messageAlert", "getCurencyDetails"]),
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
        this.$store.dispatch("loadCurencyDetails", this.$route.params.code);
      }
    },

    getCurencyDetails(val) {
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
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        paymentMethodCode: this.$route.params.code,
      });
      this.dialogEditConfig = false;
    },

    OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },

    updateLocationConfig() {
      this.$store.dispatch("updateCurrencyLocationConfig", {
        suport_latitude: this.getCurencyDetails.suport_latitude,
        suport_longitude: this.getCurencyDetails.suport_longitude,
        curencyCode: this.$route.params.code,
      });
      this.dialogEditConfigLocation = false;
    },

    OpenEditConfigLocation() {
      this.dialogEditConfigLocation = true;
    },

    switchDepositTariffsStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "depositTariffEnabled",
        activeFieldLabel: "Deposit Tariff",
        activeFieldValue: this.depositTariffEnabled,
        paymentMethodCode: this.$route.params.code,
      });
    },

    switchWithdrowTariffsStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "withdrowTariffEnabled",
        activeFieldLabel: "Withdrow Tariff",
        activeFieldValue: this.withdrowTariffEnabled,
        paymentMethodCode: this.$route.params.code,
      });
    },

    switchDepositChargesEnabledStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "depositChargesEnabled",
        activeFieldLabel: "Depost Charges Status",
        activeFieldValue: this.depositChargesEnabled,
        paymentMethodCode: this.$route.params.code,
      });
    },
  },
};
</script>
