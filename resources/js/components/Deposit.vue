<template>
  <v-container>
    <v-row>
      <v-btn
        @click="findFriendsDialog = true"
        outlined
        rounded
        class="success--text"
      >
        Deposit
      </v-btn>

      <v-dialog v-model="findFriendsDialog" width="500">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>Fund Wallet</h2>
          </v-card-title>

          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-row>
              <v-col>
                <v-card-text>
                  <v-form :ref="'paymentInfoForm'" lazy-validation>
                    <v-select
                      v-model="fundingDetails.payment_method"
                      :rules="[rules.required]"
                      :items="getPaymentMethods"
                      label="Payment Method"
                      item-text="label"
                      item-value="code"
                      @change="fetchCurrencies"
                      outlined
                      dense
                    >
                    </v-select>
                    <!--
                    <v-select
                      v-if="fundingDetails.payment_method != null"
                      v-model="fundingDetails.payment_method_currency"
                      :rules="[rules.required]"
                      :items="getPaymentMethodCurencies"
                      label="Currency"
                      item-text="name"
                      item-value="code"
                      @change="setPaymentCategory"
                      outlined
                      dense
                    >
                    </v-select>
                    -->

                    <v-select
                      v-if="fundingDetails.payment_method == 'BANK_TRANSFER'"
                      v-model="fundingDetails.bankID"
                      :rules="[rules.required]"
                      :items="getActiveBanks"
                      label="Select Bank"
                      item-text="label"
                      item-value="code"
                      @change="fetchCurrencies"
                      outlined
                      dense
                    >
                    </v-select>

                    <v-select
                      v-if="
                        fundingDetails.payment_method != null &&
                        fundingDetails.payment_method !== 'BANK_TRANSFER'
                      "
                      v-model="fundingDetails.payment_method_currency"
                      :rules="[rules.required]"
                      :items="getPaymentMethodCurencies"
                      label="Currency"
                      item-text="name"
                      item-value="code"
                      @change="setPaymentCategory"
                      outlined
                      dense
                    >
                    </v-select>

                    <v-select
                      v-if="
                        fundingDetails.bankID != null &&
                        fundingDetails.payment_method === 'BANK_TRANSFER'
                      "
                      v-model="fundingDetails.payment_method_currency"
                      :rules="[rules.required]"
                      :items="getBankCurencies"
                      label="Currency"
                      item-text="name"
                      item-value="code"
                      @change="setPaymentCategory"
                      outlined
                      dense
                    >
                    </v-select>

                    <v-text-field
                      v-if="fundingDetails.payment_method != null"
                      v-model="fundingDetails.gross"
                      :rules="[rules.required]"
                      label="Ammount"
                      outlined
                      dense
                    />

                    <VuePhoneNumberInput
                      class="mb-4"
                      v-if="fundingDetails.paymentCategory == 'MOBILE_MONEY'"
                      v-model="fundingDetails.conditionValue"
                      :rules="[rules.required]"
                      label="Phone"
                      outlined
                      :dark="theme"
                      v-bind="vuePhoneProps"
                      @update="updatedPhoneData"
                      dense
                    />

                    <v-text-field
                      v-if="fundingDetails.paymentCategory == 'BANK_TRANSFER'"
                      v-model="fundingDetails.conditionValue"
                      :rules="[rules.required]"
                      label="Reference"
                      outlined
                      dense
                    />

                    <v-text-field
                      v-if="fundingDetails.paymentCategory == 'PAYPAL'"
                      v-model="fundingDetails.description"
                      :rules="[rules.required]"
                      label="Reason"
                      outlined
                      dense
                    />

                    <h5>
                      TO DEPOSIT: {{ getStebleCurency.code }}
                      {{ fundingDetails.gross * activeCurrency.exchangeRate }}
                    </h5>
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <!-- <v-btn color="success" outlined>Chat</v-btn> -->
            <v-btn
              class="ml-auto"
              @click="findFriendsDialog = false"
              outlined
              color="red"
              >Close</v-btn
            >
            <v-btn outlined color="primary" @click="fundTheWallet">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
  props: ["data"],
  components: {
    VuePhoneNumberInput: VuePhoneNumberInput,
  },

  data() {
    return {
      uploads: uploads,
      findFriendsDialog: false,
      fundingDetails: {
        conditionValue: null,
      },
      activeCurrency: {},

      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      theme: false,
      preferredCountries: ["UG", "KY"],
    };
  },

  mounted() {
    if (localStorage.getItem("theme") == "light") {
      this.theme = false;
    } else {
      this.theme = true;
    }
    this.checkRequestStatus();
  },

  beforeCreate() {
    this.$store.dispatch("loadPaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
    this.$store.dispatch("loadStebleCurency");
    this.$store.dispatch("loadActiveBanks");
  },

  computed: {
    ...mapState([
      "paymentMethods",
      "paymentMethodCurencies",
      "stebleCurency",
      "bankCurencies",
      "activeBanks",
    ]),
    ...mapGetters([
      "getPaymentMethods",
      "getPaymentMethodCurencies",
      "getStebleCurency",
      "getBankCurencies",
      "getActiveBanks",
    ]),
  },

  methods: {
    updatedPhoneData(data) {
      if (data.formattedNumber !== undefined) {
        const conditionValue = data.formattedNumber.replace("+", "");
        this.fundingDetails.conditionValue = conditionValue;
      }
    },
    fetchCurrencies() {
      if (this.fundingDetails.payment_method == "BANK_TRANSFER") {
        this.$store.dispatch("loadBankCurencies", this.fundingDetails.bankID);
      } else {
        this.$store.dispatch(
          "loadPaymentMethodCurencies",
          this.fundingDetails.payment_method
        );
      }
    },

    setPaymentCategory() {
      const context = this;
      context.getPaymentMethods.forEach((data) => {
        if (context.fundingDetails.payment_method === data.code) {
          context.fundingDetails.paymentCategory = data.category;
        }
      });

      context.getPaymentMethodCurencies.forEach((data) => {
        if (context.fundingDetails.payment_method_currency === data.code) {
          context.activeCurrency = data;
        }
      });
    },

    fundTheWallet() {
      this.fundingDetails.userId = this.$route.query.userId;
      this.$store.dispatch("createTopupRequest", this.fundingDetails);
      this.findFriendsDialog = false;
    },
  },
};
</script>
