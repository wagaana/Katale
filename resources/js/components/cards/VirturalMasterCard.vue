<template>
  <span>
    <v-btn class="primary--text subtitle-3" @click="findFriendsDialog = true">
      <i class="mdi mdi-36px mdi-refresh" to="/"></i>
    </v-btn>

    <v-dialog v-model="findFriendsDialog" width="500">
      <v-card>
        <v-row class="no-gutters">
          <div class="pa-3 py-4 cyan--text" id="mCard">
            <div class="pa-0 py-4 cyan--text">
              <span>
                <v-avatar class="" size="60px" tile>
                  <img src="/images/logo.png" alt="WAGAANA ALEX" />
                </v-avatar>
                <h4 class="text-truncate text-uppercase float-right">
                  **** **** **** **** 3245
                </h4>

                <div class="pa-0 py-4 cyan--text">
                  <h4 class="success--text float-right">****</h4>
                </div>
              </span>
            </div>

            <div class="pa-0 py-4 cyan--text">
              <h5 class="success--text float-right">07/23</h5>
            </div>

            <div class="pa-0 py-4 cyan--text">
              <h6>ONLINE</h6>
            </div>

            <div class="pa-0 py-4">
              <h3 class="text-truncate text-uppercase">
                WAGAANA ALEX
                <span class="float-right"
                  ><v-switch class="success--text" inset
                /></span>
              </h3>
            </div>
          </div>
        </v-row>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads, mastercard } from "../../utils/constants";

export default {
  props: ["data"],

  data() {
    return {
      uploads: uploads,
      findFriendsDialog: false,
      transactionDetails: {
        conditionValue: null,
        payment_method: null,
      },
      activeCurrency: {},

      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  beforeCreate() {
    this.$store.dispatch("loadSendActivePaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
    this.$store.dispatch("fetchFriends");
    this.$store.dispatch("loadActiveBanks");
  },

  computed: {
    ...mapState([
      "friends",
      "sendActivePaymentMethods",
      "paymentMethodCurencies",
      "activeBanks",
      "bankCurencies",
    ]),
    ...mapGetters([
      "getFriends",
      "getSendActivePaymentMethods",
      "getPaymentMethodCurencies",
      "getActiveBanks",
      "getBankCurencies",
    ]),
  },

  methods: {
    fetchCurrencies() {
      if (this.transactionDetails.payment_method == "BANK_TRANSFER") {
        this.$store.dispatch(
          "loadBankCurencies",
          this.transactionDetails.bankID
        );
      } else {
        this.$store.dispatch(
          "loadPaymentMethodCurencies",
          this.transactionDetails.payment_method
        );
      }
    },

    setPaymentCategory() {
      const context = this;
      context.getSendActivePaymentMethods.forEach((data) => {
        if (context.transactionDetails.payment_method === data.code) {
          context.transactionDetails.paymentCategory = data.category;
        }
      });

      context.getPaymentMethodCurencies.forEach((data) => {
        if (context.transactionDetails.payment_method_currency === data.code) {
          context.activeCurrency = data;
        }
      });
    },

    cashOut() {
      this.transactionDetails.userId = this.$route.query.userId;
      this.$store.dispatch("cashOut", this.transactionDetails);
      this.findFriendsDialog = false;
    },
  },
};
</script>



<style scoped>
#mCard {
  background-image: url("/images/mastercard.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 150px;
}
</style>