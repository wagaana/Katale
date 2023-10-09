<template>
  <v-card class="mb-4 pa-3">
    <v-row>
      <div class="col-auto">
        <div :class="`${balance.gross > 0 ? 'success' : 'error'} fill-height`">
          &nbsp;
        </div>
      </div>
      <div class="col pa-3 ml-auto">
        <v-row>
          <div class="col-auto">
            <v-row style="padding-bottom: 20px">
              <v-col cols="12" offset-sm="0" sm="2" class="px-3">
                <v-avatar size="40" style="margin-right: 150px">
                  <v-img
                    class="card-img"
                    :src="`${uploads}${balance.image}`"
                  ></v-img>
                </v-avatar>
              </v-col>

              <v-col cols="12" sm="10">
                <h2 class="title cyan--text hover">
                  {{ balance.label }}
                </h2>
              </v-col>
            </v-row>
            <v-list-item-title class="ml-auto">
              {{ balance.created_at | exactDay }}
            </v-list-item-title>
            <h5 class="text-truncate text-uppercase layout">
              {{ balance.transactionKey }}
            </h5>
            <v-list-item-title class="ml-auto">
              Txn Fee: {{ balance.currency }} {{ balance.fee }}
            </v-list-item-title>
            <v-list-item-title class="ml-auto">
              Txn {{ balance.gross > 0 ? "Net" : "Gross" }}:
              {{ balance.currency }}
              {{ balance.gross > 0 ? balance.net : balance.gross }}
            </v-list-item-title>
            <v-list-item-title class="ml-auto">
              {{
                myUserProfile.id + "" !== balance.transactionOwner
                  ? balance.name
                  : ""
              }}
            </v-list-item-title>
          </div>
          <div class="col pa-3 ml-auto">
            <h3
              :class="`layout justify-end ${
                balance.gross > 0 ? 'success--text' : 'error--text'
              }`"
            >
              {{ balance.currency }}
              {{ balance.gross > 0 ? balance.gross : balance.net }}
            </h3>
          </div>
        </v-row>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
  props: ["myUserProfile", "balance"],

  data() {
    return {
      uploads: uploads,
    };
  },

  beforeCreate() {
    this.$store.dispatch("loadPaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
  },

  computed: {
    ...mapState(["paymentMethods", "paymentMethodCurencies"]),
    ...mapGetters(["getPaymentMethods", "getPaymentMethodCurencies"]),
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMM DD YYYY");
    },
  },

  methods: {},
};
</script>
