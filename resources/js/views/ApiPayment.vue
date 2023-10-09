<template>
  <v-app>
    <v-main>
      <v-container class="px-0 py-0 fill-height col-md-12" fluid>
        <v-row class="fill-height">
          <!-- The image half -->
          <v-col
            lg="6"
            cols="sm"
            class="d-none d-md-flex bg-image fill-height"
          ></v-col>
          <!-- The content half -->
          <v-col lg="6" cols="sm">
            <div class="apiPay d-flex align-items-center py-5">
              <!-- Demo content-->
              <v-container>
                <v-row>
                  <v-col lg="10" class="col-xl-7 mx-auto">
                    <h4 class="font-weight-light display-2 mt-12">
                      {{ getRequestToPayRequest.label }}

                      <h5 class="error--text float-right">
                        {{ getRequestToPayRequest.currency }}
                        {{ getRequestToPayRequest.ammount }}
                      </h5>
                    </h4>
                    <p class="text-muted mb-4 text-truncate text-uppercase">
                      {{ getRequestToPayRequest.message }}
                    </p>

                    <v-card>
                      <v-row class="no-gutters">
                        <div class="col-auto">
                          <div class="success fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 success--text">
                          <h5 class="text-truncate text-uppercase">
                            My Balance
                          </h5>
                          <h1>
                            {{ getStebleCurency.code }}
                            {{
                              myUserProfile.wallet_balance !== null
                                ? myUserProfile.wallet_balance
                                : 0.0
                            }}
                            <v-btn
                              @click="walletPinCodeSheet = true"
                              outlined
                              rounded
                              :disabled="
                                (getUserCurrency != null
                                  ? (getRequestToPayRequest.ammount +
                                      getStebleCurency.transactionFee +
                                      (getRequestToPayRequest.ammount / 100) *
                                        getUserCurrency.conversionChargePercentage) *
                                    ((1 / getStebleCurency.buy) *
                                      getUserCurrency.sell)
                                  : 0) > myUserProfile.wallet_balance
                                  ? true
                                  : false
                              "
                              class="success--text float-right"
                            >
                              Pay Now
                            </v-btn>
                          </h1>
                        </div>
                      </v-row>
                    </v-card>

                    <h5 class="pb-4 pt-4">Payment Gateway</h5>
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

                      <VuePhoneNumberInput
                        class="mb-4"
                        v-if="fundingDetails.paymentCategory == 'MOBILE_MONEY'"
                        v-model="fundingDetails.phone"
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
                    </v-form>
                    <v-btn
                      @click="gatewayPinCodeSheet = true"
                      class="float-right primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Pay Now
                    </v-btn>
                    <div
                      class="text-center d-flex justify-content-between mt-4"
                    >
                      <p>
                        <a href="/home" class="font-italic text-muted">Home</a>
                      </p>
                    </div>
                    <div class="footer"></div>
                  </v-col>
                </v-row>
              </v-container>
              <!-- End -->
            </div>
          </v-col>
          <!-- End -->
        </v-row>
      </v-container>

      <v-bottom-sheet v-model="walletPinCodeSheet" inset>
        <v-list>
          <div class="col pa-4 py-2 primary--text">
            <h5 class="text-truncate text-uppercase">To Charge</h5>
            <h1>
              {{ getStebleCurency.code }}
              {{
                getUserCurrency != null
                  ? (getRequestToPayRequest.ammount +
                      getStebleCurency.transactionFee +
                      (getRequestToPayRequest.ammount / 100) *
                        getUserCurrency.conversionChargePercentage) *
                    ((1 / getStebleCurency.buy) * getUserCurrency.sell)
                  : 0
              }}

              <v-btn
                class="red--text subtitle-3 float-right text-uppercase"
                @click="walletPinCodeSheet = false"
              >
                X
              </v-btn>
            </h1>
          </div>

          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-row>
              <v-col>
                <v-card-text>
                  <v-form :ref="'passwordApproveForm'" lazy-validation>
                    <v-text-field
                      :rules="[rules.required]"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      label="Password"
                      v-model="userPassword"
                      autocomplete="current-password"
                      outlined
                      dense
                    />
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>

          <v-card-actions class="pa-2">
            <v-btn
              outlined
              class="ml-auto"
              color="success"
              @click="validatePassword"
              >Approve</v-btn
            >
          </v-card-actions>
        </v-list>
      </v-bottom-sheet>

      <v-bottom-sheet v-model="gatewayPinCodeSheet" inset>
        <v-list>
          <div class="col pa-4 py-2 primary--text">
            <h5 class="text-truncate text-uppercase">To Charge</h5>
            <h1>
              {{ getStebleCurency.code }}
              {{ culculateAmmountToCharge }}

              <v-btn
                class="red--text subtitle-3 float-right text-uppercase"
                @click="gatewayPinCodeSheet = false"
              >
                X
              </v-btn>
            </h1>
          </div>

          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-row>
              <v-col>
                <v-card-text>
                  <v-form
                    ref="gatewayPasswordPaymentForm"
                    v-model="gatewayPasswordValid"
                    lazy-validation
                  >
                    <v-text-field
                      :rules="[rules.required]"
                      :append-icon="
                        showGatewayPassword ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :type="showGatewayPassword ? 'text' : 'password'"
                      @click:append="showGatewayPassword = !showGatewayPassword"
                      label="Password"
                      v-model="fundingDetailsPassword"
                      autocomplete="current-password"
                      outlined
                      dense
                    />
                  </v-form>
                </v-card-text>
                Note: Mobile Money tarifs may apply on the final ammount
              </v-col>
            </v-row>
          </v-card>

          <v-card-actions class="pa-2">
            <v-switch
              v-model="fundingDetails.balanceWithWallet"
              inset
              label="Include Wallet"
            ></v-switch>

            <v-btn
              outlined
              class="ml-auto"
              color="success"
              @click="validateGatewayPayment"
              >Approve</v-btn
            >
          </v-card-actions>
        </v-list>
      </v-bottom-sheet>
    </v-main>
  </v-app>
</template>
<style>
.v-application {
  width: 100%;
  position: fixed;
}
.v-main {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.v-main__wrap {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: absolute;
}
.bg-image {
  background-image: url("../../assets/img/login-split.jpg");
  background-size: cover;
  background-position: center center;
  height: auto;
}
</style>

<script>
import * as d3 from "d3";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";
import { encryptWithPublicKey } from "../utils/EncryptionHelper";
import VuePhoneNumberInput from "vue-phone-number-input";
import AuthRequired from "../utils/AuthRequired";

export default {
  components: {
    VuePhoneNumberInput: VuePhoneNumberInput,
  },

  data: function () {
    return {
      uploads: uploads,
      encryptWithPublicKey: encryptWithPublicKey,
      findFriendsDialog: false,
      theme: false,
      gatewayPasswordValid: false,
      walletPinCodeSheet: false,
      gatewayPinCodeSheet: false,
      showPassword: false,
      showGatewayPassword: false,
      fundingDetailsPassword: null,
      fundingDetails: {
        conditionValue: null,
        balanceWithWallet: false,
        password: null,
      },
      activeCurrency: {},
      balanceWithWallet: false,

      vuePhoneProps: {
        clearable: true,
        fetchCountry: true,
        preferredCountries: ["UG", "KY"],
        noExample: false,
        translations: {
          countrySelectorLabel: "Country code",
          countrySelectorError: "Error",
          phoneNumberLabel: "Enter your MOMO Number",
          example: "Example:",
        },
      },

      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      phoneNumber: "",
      userPassword: null,
      userGatewayPassword: null,
    };
  },

  mounted() {
    // let theme = ;
    if (localStorage.getItem("theme") == "light") {
      this.theme = false;
    } else {
      this.theme = true;
    }
    this.checkRequestStatus();
  },

  beforeCreate() {
    const currentAuthData =
      localStorage.getItem("authData") != null
        ? JSON.parse(localStorage.getItem("authData"))
        : null;
    if (currentAuthData != null) {
      this.$store.dispatch("getMyProfile");
      this.$store.dispatch("loadPaymentMethods");
      this.$store.dispatch("fetchSupportedCountries");
      this.$store.dispatch("loadStebleCurency");
      // verify with api
      var config = {
        method: "get",
        url: getUserProfile,
        headers: {
          Authorization: "Bearer " + currentAuthData.access_token,
        },
        data: {},
      };

      axios(config)
        .then((response) => {
          const authData = response.data;
          if (authData.level > 0) {
            this.$store.dispatch(
              "fetchRequestToPayRequest",
              this.$route.params.token
            );
          } else {
            localStorage.removeItem("authData");
            this.$router.push({
              path: "/login",
              query: { payment_tocken: this.$route.params.token },
            });
          }
        })
        .catch((err) => {
          localStorage.removeItem("authData");
          this.$router.push({
            path: "/login",
            query: { payment_tocken: this.$route.params.token },
          });
        });
    } else {
      localStorage.removeItem("authData");
      this.$router.push({
        path: "/login",
        query: { payment_tocken: this.$route.params.token },
      });
    }
  },

  computed: {
    ...mapState([
      "myUserProfile",
      "paymentMethods",
      "paymentMethodCurencies",
      "requestToPayRequest",
      "stebleCurency",
      "requestToPayRequestComplete",
      "userCurrency",
    ]),
    ...mapGetters([
      "myUserProfile",
      "getPaymentMethods",
      "getPaymentMethodCurencies",
      "getRequestToPayRequest",
      "messageAlert",
      "isAuthenticated",
      "getStebleCurency",
      "getRequestToPayRequestComplete",
      "getUserCurrency",
    ]),

    culculateAmmountToCharge() {
      const context = this;
      var paymentMehod = context.fundingDetails.payment_method;
      var payment_method_currency =
        context.fundingDetails.payment_method_currency;

      if (paymentMehod == undefined || payment_method_currency == undefined)
        return 0;

      var gross =
        context.getUserCurrency != null
          ? (context.getRequestToPayRequest.ammount +
              context.getStebleCurency.transactionFee +
              (context.getRequestToPayRequest.ammount / 100) *
                context.getUserCurrency.conversionChargePercentage) *
            ((1 / context.getStebleCurency.buy) * context.getUserCurrency.sell)
          : 0;

      if (context.balanceWithWallet) {
        const accountBalance =
          context.myUserProfile.wallet_balance !== null
            ? context.myUserProfile.wallet_balance
            : 0.0;

        if (gross > accountBalance) {
          gross -= accountBalance;
        }
      }

      var netAmmount = gross;
      //check if bank transfer is selected
      if (paymentMehod != "BANK_TRANSFER") {
        //filter currencies to find it
        const data = context.getPaymentMethodCurencies.find(
          (obj) => obj.code === payment_method_currency
        );

        var fee = 0;
        if (data.depositChargesEnabled == "true") {
          fee = data.transactionFee + (gross / 100) * data.chargePercentage;
        }
        netAmmount = fee + gross;
      } else {
        //use bank currency
      }

      return netAmmount;
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

    getRequestToPayRequest(val) {
      if (val != null) {
        this.$store.dispatch("fetchLoadUserCurrency", val.userId);
      }
    },

    getRequestToPayRequestComplete(val) {
      if (val != null) {
        if (val === true) {
          Vue.notify({
            group: "foo",
            title: "Somplete",
            text: "This request was completed",
            type: "success",
          });
          if (this.getRequestToPayRequest.redirectUrl !== null) {
            window.location.href = this.getRequestToPayRequest.redirectUrl;
          } else {
            this.$router.push("/home");
          }
        }
      }
    },
  },

  created() {},

  methods: {
    updatedPhoneData(data) {
      if (data.formattedNumber !== undefined) {
        const conditionValue = data.formattedNumber.replace("+", "");
        this.fundingDetails.conditionValue = conditionValue;
      }
    },
    fetchCurrencies() {
      this.$store.dispatch(
        "loadPaymentMethodCurencies",
        this.fundingDetails.payment_method
      );
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

    validatePassword() {
      if (this.$refs.passwordApproveForm.validate()) {
        this.payWithMyWallet();
      }
    },

    payWithMyWallet() {
      const encryptedData = this.encryptWithPublicKey(this.userPassword);

      this.$store.dispatch("payWithMyWallet", {
        password: encryptedData,
        request_token: this.$route.params.token,
      });
      this.walletPinCodeSheet = false;
      this.checkRequestStatus();
    },

    validateGatewayPayment() {
      if (this.$refs.gatewayPasswordPaymentForm.validate()) {
        this.payWithGateway();
      }
    },

    payWithGateway() {
      const encryptedData = this.encryptWithPublicKey(
        this.fundingDetailsPassword
      );

      this.fundingDetails.password = encryptedData;

      this.fundingDetails["request_token"] = this.$route.params.token;
      this.$store.dispatch("payWithPaymentGateway", this.fundingDetails);
      this.gatewayPinCodeSheet = false;
      this.checkRequestStatus();
    },

    checkRequestStatus: function () {
      const context = this;
      setInterval(function () {
        context.$store.dispatch(
          "fetchRequestToPayRequest",
          context.$route.params.token
        );
      }, 5000);
    },
  },
};
</script>
