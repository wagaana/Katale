<template>
  <div class="container">
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="cyan fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 cyan--text">
              <h5 class="text-truncate text-uppercase">User Accounts</h5>
              <h1>{{ getDashboardSumary.usersCount }}</h1>
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
              <h5 class="text-truncate text-uppercase">Month Aquisistion</h5>
              <h1>{{ getDashboardSumary.usersAquisistion }}</h1>
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
              <h5 class="text-truncate text-uppercase">Transactions</h5>
              <h1>{{ getDashboardSumary.transactions }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card class="dark">
          <v-card-title class="font-weight-light text-truncate cyan--text">
            Month Performance
          </v-card-title>
          <v-card-text>
            <v-carousel
              cycle
              height="180"
              interval="2000"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item>
                <div class="row no-gutters">
                  <div class="col">
                    <div>
                      <h2 class="cyan--text">Transactions</h2>
                      <p class="mt-1">
                        Since
                        {{
                          getDashboardSumary.initialTransactionsDate
                            | exactDayShort
                        }}
                      </p>
                      <h3 class="mb-0">
                        UGX {{ getDashboardSumary.totalTxnAmmount }}
                        <i
                          class="mdi mdi-36px mdi-credit-card-outline float-right"
                        ></i>
                      </h3>
                      <p>
                        Total Txns: {{ getDashboardSumary.monthlyTransactions }}
                      </p>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="row no-gutters">
                  <div class="col">
                    <div>
                      <h2 class="cyan--text">Revenue</h2>
                      <p class="mt-1">
                        Since
                        {{
                          getDashboardSumary.initialTransactionsDate
                            | exactDayShort
                        }}
                      </p>
                      <h3 class="mb-0">
                        UGX {{ getDashboardSumary.totalTxnRevenue }}
                        <i class="mdi mdi-36px mdi-paypal float-right"></i>
                      </h3>
                      <p>
                        Total Txns: {{ getDashboardSumary.monthlyTransactions }}
                      </p>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card min-height="252">
          <v-card-title class="font-weight-light text-truncate primary--text">
            Marketing
          </v-card-title>
          <v-card-text>
            <p class="primary--text subtitle-1">
              {{ getDashboardSumary.campaigns }} campaigns are running
            </p>
            <div class="my-5">
              <v-progress-linear
                indeterminate
                height="8"
                color="primary"
              ></v-progress-linear>
              <h6>
                SINCE
                {{ getDashboardSumary.initialCampaignDate | exactDay }}
              </h6>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              to="/admin/marketingCampaigns"
              color="primary"
            >
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card min-height="252">
          <v-card-title class="font-weight-light text-truncate success--text">
            My Account
          </v-card-title>
          <v-card-text>
            <span class="success--text subtitle-1">
              @{{ myUserProfile.user_name }}
            </span>
            <div class="mb-3">
              <h3>{{ myUserProfile.name }}</h3>
              <span class="overline"
                >Join date: {{ myUserProfile.created_at | exactDay }}</span
              >
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined rounded to="/profileSettings" color="success">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto text-center">
          <v-card-title class="primary--text"> Revenue </v-card-title>
          <v-sparkline
            :value="getDashboardSparklineData"
            padding="18"
            label-size="4"
            color="cyan"
            :gradient="['#007bff', 'cyan']"
            :line-width="2"
            :stroke-linecap="'round'"
            smooth
          >
            <template v-slot:label="item"> UGX {{ item.value }} </template>
          </v-sparkline>
          <v-card-actions class="py-4 justify-center">
            <v-btn color="primary" to="/admin/requests">Transactions</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { languages_options, uploads } from "../../utils/constants";

export default {
  template: "#home",
  data: () => ({}),

  beforeCreate() {
    this.$store.dispatch("loadDashboardSumary");
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchDashboardSparklineData");
  },

  computed: {
    ...mapState(["myUserProfile", "dashboardSumary", "dashboardSparklineData"]),
    ...mapGetters([
      "myUserProfile",
      "getDashboardSumary",
      "getDashboardSparklineData",
      "messageAlert",
    ]),
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
    exactDayShort(date) {
      return dayjs(date).format("MMMM DD YYYY");
    },
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
      }
    },
  },

  methods: {},
};
</script>
