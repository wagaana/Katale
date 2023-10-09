<template>
  <v-container>
    <v-row>
      <v-btn @click="findFriendsDialog = true" outlined rounded>
        Cash Out
      </v-btn>

      <v-dialog v-model="findFriendsDialog" width="500">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>Cash Out Your Money</h2>
          </v-card-title>

          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-row>
              <v-col>
                <v-card-text>
                  <v-form :ref="'paymentInfoForm'" lazy-validation>
                    <v-select
                      v-model="transactionDetails.payment_method"
                      :rules="[rules.required]"
                      :items="getSendActivePaymentMethods"
                      label="Payment Method"
                      item-text="label"
                      item-value="code"
                      @change="fetchCurrencies"
                      outlined
                      dense
                    >
                    </v-select>

                    <v-select
                      v-if="
                        transactionDetails.payment_method == 'BANK_TRANSFER'
                      "
                      v-model="transactionDetails.bankID"
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
                        transactionDetails.payment_method != null &&
                        transactionDetails.payment_method !== 'BANK_TRANSFER'
                      "
                      v-model="transactionDetails.payment_method_currency"
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
                        transactionDetails.bankID != null &&
                        transactionDetails.payment_method === 'BANK_TRANSFER'
                      "
                      v-model="transactionDetails.payment_method_currency"
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
                      v-if="transactionDetails.payment_method != null"
                      v-model="transactionDetails.gross"
                      :rules="[rules.required]"
                      label="Ammount"
                      outlined
                      dense
                    />

                    <VuePhoneNumberInput
                      class="mb-4"
                      v-if="
                        transactionDetails.paymentCategory == 'MOBILE_MONEY'
                      "
                      v-model="transactionDetails.conditionValue"
                      :rules="[rules.required]"
                      label="Phone"
                      outlined
                      :dark="theme"
                      v-bind="vuePhoneProps"
                      @update="updatedPhoneData"
                      dense
                    />

                    <v-text-field
                      v-if="
                        transactionDetails.paymentCategory == 'BANK_TRANSFER'
                      "
                      v-model="transactionDetails.conditionValue"
                      :rules="[rules.required]"
                      label="Account Number"
                      outlined
                      dense
                    />

                    <v-text-field
                      v-if="transactionDetails.paymentCategory == 'PAYPAL'"
                      v-model="transactionDetails.description"
                      :rules="[rules.required]"
                      label="Reason"
                      outlined
                      dense
                    />

                    <v-text-field
                      id="inputPin"
                      type="password"
                      label="PIN Code"
                      v-model="transactionDetails.pin"
                      maxlength="4"
                      minlength="4"
                      :rules="[rules.required]"
                      autocomplete="off"
                      outlined
                      dense
                    />

                    <h5>
                      TO DEPOSIT: {{ getStebleCurency.code }}
                      {{ transactionDetails.gross * activeCurrency.sell }}
                    </h5>
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn color="success" outlined>Friends</v-btn>
            <v-btn
              class="ml-auto"
              @click="findFriendsDialog = false"
              outlined
              color="red"
              >Close</v-btn
            >
            <v-btn outlined color="primary" @click="cashOut">Send</v-btn>
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
      transactionDetails: {
        conditionValue: null,
        payment_method: null,
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
    this.$store.dispatch("loadSendActivePaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
    this.$store.dispatch("fetchFriends");
    this.$store.dispatch("loadActiveBanks");
    this.$store.dispatch("loadStebleCurency");
  },

  computed: {
    ...mapState([
      "friends",
      "sendActivePaymentMethods",
      "paymentMethodCurencies",
      "activeBanks",
      "bankCurencies",
      "stebleCurency",
    ]),
    ...mapGetters([
      "getFriends",
      "getSendActivePaymentMethods",
      "getPaymentMethodCurencies",
      "getActiveBanks",
      "getBankCurencies",
      "getStebleCurency",
    ]),
  },

  methods: {
    updatedPhoneData(data) {
      if (data.formattedNumber !== undefined) {
        const conditionValue = data.formattedNumber.replace("+", "");
        this.transactionDetails.conditionValue = conditionValue;
      }
    },
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
