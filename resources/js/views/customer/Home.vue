<template>
  <v-container>
    <v-row class="no-gutters">
      <v-col class="col">
        <h1 class="mb-0">Hello {{ myUserProfile.name }},</h1>
        <div class="overline mb-4">We are at your service today!.</div>
      </v-col>

      <v-list-item-avatar class="ml-auto" size="70">
        <img :src="`${uploads}${myUserProfile.profile_picture}`" />
      </v-list-item-avatar>
    </v-row>

    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="success fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 success--text">
              <h5 class="text-truncate text-uppercase">
                My Balance

                <span class="float-right">
                  <v-btn class="primary--text subtitle-3" @click="refresh">
                    <i class="mdi mdi-36px mdi-refresh" to="/"></i>
                  </v-btn>
                </span>
                <!--<VirturalMasterCard class="float-right" />-->
              </h5>
              <h1>
                {{ getStebleCurency.code }}
                {{
                  myUserProfile.wallet_balance !== null
                    ? myUserProfile.wallet_balance
                    : 0.0
                }}
              </h1>
            </div>
            <v-card-actions>
              <v-row>
                <v-col lg="4" class="col-12">
                  <Send />
                </v-col>

                <v-col lg="4" class="col-12">
                  <CashOut />
                </v-col>

                <v-col lg="4" class="col-12">
                  <Deposit />
                </v-col>
              </v-row>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>

      <v-col lg="8" cols="sm" class="pb-2">
        <v-row>
          <v-col lg="4" cols="sm" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="cyan fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 cyan--text">
                  <h5 class="text-truncate text-uppercase">
                    1
                    {{
                      getSupportedCurrenciesExchangeRates[0] !== undefined
                        ? getSupportedCurrenciesExchangeRates[0].code
                        : ""
                    }}:
                    <v-avatar class="float-right" size="32px" tile>
                      <img
                        :src="`${
                          getSupportedCurrenciesExchangeRates[0] !== undefined
                            ? getCurencyIcon(
                                getSupportedCurrenciesExchangeRates[0].code
                              )
                            : ''
                        }`"
                        :alt="
                          getSupportedCurrenciesExchangeRates[0] !== undefined
                            ? getSupportedCurrenciesExchangeRates[0].code
                            : ''
                        "
                      />
                    </v-avatar>
                  </h5>
                  <h4>
                    {{ getStebleCurency.code }}
                    {{
                      getSupportedCurrenciesExchangeRates[0] !== undefined
                        ? getSupportedCurrenciesExchangeRates[0]
                            .converted_exchange_rate
                        : "0.00"
                    }}
                  </h4>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="4" cols="sm" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="primary fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 primary--text">
                  <h5 class="text-truncate text-uppercase">
                    1
                    {{
                      getSupportedCurrenciesExchangeRates[1] !== undefined
                        ? getSupportedCurrenciesExchangeRates[1].code
                        : ""
                    }}:
                    <v-avatar class="float-right" size="32px" tile>
                      <img
                        :src="`${
                          getSupportedCurrenciesExchangeRates[1] !== undefined
                            ? getCurencyIcon(
                                getSupportedCurrenciesExchangeRates[1].code
                              )
                            : ''
                        }`"
                        :alt="
                          getSupportedCurrenciesExchangeRates[1] !== undefined
                            ? getSupportedCurrenciesExchangeRates[1].code
                            : ''
                        "
                      />
                    </v-avatar>
                  </h5>
                  <h4>
                    {{ getStebleCurency.code }}
                    {{
                      getSupportedCurrenciesExchangeRates[1] !== undefined
                        ? getSupportedCurrenciesExchangeRates[1]
                            .converted_exchange_rate
                        : "0.00"
                    }}
                  </h4>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="4" cols="sm" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">
                    1
                    {{
                      getSupportedCurrenciesExchangeRates[2] !== undefined
                        ? getSupportedCurrenciesExchangeRates[2].code
                        : ""
                    }}:
                    <v-avatar class="float-right" size="32px" tile>
                      <img
                        :src="`${
                          getSupportedCurrenciesExchangeRates[2] !== undefined
                            ? getCurencyIcon(
                                getSupportedCurrenciesExchangeRates[2].code
                              )
                            : ''
                        }`"
                        :alt="
                          getSupportedCurrenciesExchangeRates[2] !== undefined
                            ? getSupportedCurrenciesExchangeRates[2].code
                            : ''
                        "
                      />
                    </v-avatar>
                  </h5>
                  <h3>
                    {{ getStebleCurency.code }}
                    {{
                      getSupportedCurrenciesExchangeRates[2] !== undefined
                        ? getSupportedCurrenciesExchangeRates[2]
                            .converted_exchange_rate
                        : "0.00"
                    }}
                  </h3>
                </div>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="12" cols="sm" class="pb-2">
            <div class="col pa-3 py-4 cyan--text">
              <h3 class="text-truncate">Recent Activity</h3>
            </div>

            <div v-if="getMyBalances.length < 1">
              <TransactionsListLoader />
              <TransactionsListLoader />
            </div>

            <ActivityListItem
              v-else
              v-for="balance in getMyBalances"
              :key="balance.id"
              :balance="balance"
              :myUserProfile="myUserProfile"
            />

            <v-layout column align-center justify-center class="white--text">
              <v-list-item-title
                class="primary--text mt-4 mb-4"
                :style="{
                  cursor: 'pointer',
                }"
              >
                Load more
              </v-list-item-title>
            </v-layout>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads, currencies } from "../../utils/constants";
import mSocial_cover from "../../../assets/img/social_cover.jpeg";
import Deposit from "../../components/Deposit.vue";
import CashOut from "../../components/CashOut.vue";
import VirturalMasterCard from "../../components/cards/VirturalMasterCard.vue";
import Send from "../../components/Send.vue";
import ActivityListItem from "../../components/ActivityListItem.vue";
import VueApexCharts from "vue-apexcharts";
import TransactionsListLoader from "../../components/loaders/TransactionsListLoader.vue";

export default {
  components: {
    Deposit: Deposit,
    CashOut: CashOut,
    Send: Send,
    apexchart: VueApexCharts,
    VirturalMasterCard: VirturalMasterCard,
    ActivityListItem: ActivityListItem,
    TransactionsListLoader: TransactionsListLoader,
  },

  data: () => ({
    uploads: uploads,
    social_cover: mSocial_cover,
    currencies: currencies,
    curr: 1,
    orderStatuses: [],
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    getDashboardSumary: {},
  }),

  computed: {
    ...mapState([
      "userDashboardSumary",
      "stebleCurency",
      "myUserProfile",
      "myBalances",
      "cryptoIntradayStockHistoryData",
      "suportedCurrencies",
      "supportedCurrenciesExchangeRates",
    ]),
    ...mapGetters([
      "getUserDashboardSumary",
      "myUserProfile",
      "messageAlert",
      "getMyBalances",
      "getStebleCurency",
      "getCryptoIntradayStockHistoryData",
      "getSuportedCurrencies",
      "getSupportedCurrenciesExchangeRates",
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
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getMyBalances");
        this.$store.dispatch("loadStebleCurency");
        this.$store.dispatch("fetchSupportedCurrencies");
        this.$store.dispatch("fetchSupportedCurrenciesExchangeRates");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("getMyBalances");
    this.$store.dispatch("loadStebleCurency");
    this.$store.dispatch("get_my_crypto_address_info");
    this.$store.dispatch("fetchSupportedCurrencies");
    this.$store.dispatch("fetchSupportedCurrenciesExchangeRates");
  },

  created() {},

  methods: {
    refresh() {
      this.$store.dispatch("getMyProfile");
      this.$store.dispatch("getMyBalances");
      this.$store.dispatch("loadStebleCurency");
      this.$store.dispatch("get_my_crypto_address_info");
      this.$store.dispatch("fetchSupportedCurrencies");
      this.$store.dispatch("fetchSupportedCurrenciesExchangeRates");
    },

    getCurencyIcon(currency) {
      var flag = "";
      for (const eastAcricanCountry of this.currencies) {
        if (eastAcricanCountry.AlphabeticCode == currency) {
          flag = eastAcricanCountry.flagUrl;
          break;
        }
      }
      return flag;
    },
  },
};
</script>
