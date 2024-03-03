<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h1 class="font-weight-light mb-0">Payment Methods</h1>
        <span class="overline"
          >Manage system Payment Methods Settings Here</span
        >
        <v-card class="py-6">
          <v-row class="row px-2">
            <v-col lg="3" cols="12" class="py-6">
              <v-row>
                <v-col class="col-md-12">
                  <v-btn
                    @click="dialogNewPaymentMethod = true"
                    width="100%"
                    class="primary"
                    ><v-icon>mdi-plus</v-icon>New Method</v-btn
                  >
                </v-col>
              </v-row>

              <v-card>
                <v-list dense nav>
                  <v-list-item
                    v-for="item in getAllPaymentMethods"
                    :key="item.code"
                    link
                    :to="item.href"
                    :color="
                      item.code + '' === getActivePaymentMethod + ''
                        ? 'red'
                        : 'black'
                    "
                    @click="setActivePaymentMethod(item.code)"
                  >
                    <v-list-item-icon>
                      <div
                        class="cyan fill-height"
                        v-if="item.code + '' === getActivePaymentMethod + ''"
                      >
                        &nbsp;
                      </div>
                      &nbsp;
                      <v-img
                        width="25"
                        height="25"
                        :src="`${uploads}${item.image}`"
                      />
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{
                        `${item.label} (${item.code})`
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col lg="9" cols="12" class="py-6">
              <div>
                <v-row>
                  <v-col>
                    <v-btn @click="createNewCurrency = true" class="primary"
                      >New Currency</v-btn
                    >
                  </v-col>
                  <v-col lg="1" class="py-1">
                    <v-card-text
                      @click="paymentMethodSettings"
                      style="cursor: pointer"
                      class="layout justify-center py-3 pa-0"
                    >
                      <v-icon
                        large
                        class="blue--text text--lighten-2 text-xs-center"
                        >mdi-cog</v-icon
                      >
                    </v-card-text>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-currency-usd"
                      label="Search"
                      hide-details
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-card class="py-2 pa-0">
                  <v-data-table
                    :headers="headers"
                    :items="getPaymentMethodCurencies"
                    item-key="id"
                  >
                    <template v-slot:item="{ item }">
                      <tr @click="displayCurrency(item)">
                        <td>{{ item.currency }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.exchangeRate }}</td>
                        <td>{{ item.sell }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.entity }}</td>
                        <td>{{ item.created_at }}</td>
                      </tr>
                    </template>
                  </v-data-table>
                </v-card>

                <v-dialog v-model="dialogNewPaymentMethod" width="500">
                  <v-card>
                    <v-card-title class="headline black" primary-title>
                      Create Payment Method
                    </v-card-title>
                    <v-card-text class="pa-5">
                      <v-form
                        ref="paymentMethodForm"
                        v-model="payment_method_valid"
                        lazy-validation
                      >
                        <v-text-field
                          v-model="mPaymentMethod.label"
                          label="Label"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-autocomplete
                          v-model="mPaymentMethod.country"
                          :items="getSuportedCountries"
                          label="Select Country"
                          item-text="name"
                          item-value="code"
                          :rules="[rules.required]"
                          outlined
                          dense
                        >
                        </v-autocomplete>

                        <v-textarea
                          v-model="mPaymentMethod.description"
                          label="Description"
                          :rules="[rules.required]"
                          outlined
                          lines="2"
                          dense
                        />

                        <v-select
                          v-model="mPaymentMethod.category"
                          :items="paymentCategories"
                          label="Payment Method Category"
                          item-text="text"
                          item-value="value"
                          :rules="[rules.required]"
                          outlined
                          dense
                        >
                        </v-select>
                        <p class="pb-1">Can Deposit</p>
                        <v-select
                          v-model="mPaymentMethod.canDeposit"
                          :items="yesAndNo"
                          label="Pick Option"
                          item-text="text"
                          item-value="value"
                          :rules="[rules.required]"
                          outlined
                          dense
                        />
                        <p class="pb-1">Can Send</p>
                        <v-select
                          v-model="mPaymentMethod.canSend"
                          :items="yesAndNo"
                          label="Pick Option"
                          item-text="text"
                          item-value="value"
                          :rules="[rules.required]"
                          outlined
                          dense
                        />

                        <v-text-field
                          v-model="mPaymentMethod.code"
                          label="Code"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <FilesEntry
                          label="Payment Method Icon"
                          @selectedFiles="selectedFiles"
                          class="pa-2"
                        />
                      </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-5">
                      <v-btn
                        class="ml-auto"
                        @click="dialogNewPaymentMethod = false"
                        outlined
                        color="primary"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="primary"
                        :disabled="!payment_method_valid"
                        @click="validatePaymentMethod"
                        >Create</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="createNewCurrency" width="400">
                  <v-card>
                    <v-card-title class="headline black" primary-title>
                      Add New Currency
                    </v-card-title>
                    <v-card-text class="pa-5">
                      <v-form
                        ref="currencyForm"
                        v-model="currency_valid"
                        lazy-validation
                      >
                        <v-autocomplete
                          v-model="newCurrency.currency"
                          :items="getSuportedCurrencies"
                          label="Select Currency"
                          item-text="name"
                          item-value="code"
                          :rules="[rules.required]"
                          outlined
                          dense
                        >
                        </v-autocomplete>

                        <v-text-field
                          v-model="newCurrency.exchangeRate"
                          label="Exchange Rate"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-text-field
                          v-model="newCurrency.buy"
                          label="Buy Ammount"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-text-field
                          v-model="newCurrency.sell"
                          label="Sell Ammount"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-text-field
                          v-model="newCurrency.chargePercentage"
                          label="Charge Percentage"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-text-field
                          v-model="newCurrency.transactionFee"
                          label="Transaction Fee"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-5">
                      <v-btn
                        class="ml-auto"
                        @click="createNewCurrency = false"
                        outlined
                        color="primary"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="primary"
                        :disabled="!currency_valid"
                        @click="validateCurrencyForm"
                        >Create</v-btn
                      >
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
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads, languages_options } from "../../utils/constants";
import FilesEntry from "../../components/FilesEntry.vue";

export default {
  components: {
    FilesEntry: FilesEntry,
  },
  data: () => ({
    uploads: uploads,
    languages_options: languages_options,
    mPaymentMethod: {},
    newCurrency: {},
    activeCurrency: {},
    composeMessage: {},
    dialogNewPaymentMethod: false,
    createNewCurrency: false,
    viewCurrency: false,
    search: "",
    payment_method_valid: false,
    currency_valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      {
        text: "Currency",
        align: "left",
        sortable: false,
        value: "currency",
      },
      {
        text: "Buy",
        value: "buy",
      },
      {
        text: "Exchange",
        value: "exchangeRate",
      },
      {
        text: "Sell",
        value: "sell",
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
    paymentCategories: [
      {
        text: "Mobile Money",
        value: "MOBILE_MONEY",
      },
      {
        text: "Bank Transfer",
        value: "BANK_TRANSFER",
      },
      {
        text: "PayPal",
        value: "PAYPAL",
      },
      {
        text: "Card",
        value: "CARD",
      },
      {
        text: "Cash",
        value: "CASH",
      },
    ],
    yesAndNo: [
      {
        text: "Yes",
        value: "true",
      },
      {
        text: "No",
        value: "false",
      },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loadAllPaymentMethods");
    this.$store.dispatch("fetchSupportedCurrencies");
    this.$store.dispatch("fetchSupportedCountries");
  },

  computed: {
    ...mapState([
      "suportedCurrencies",
      "allPaymentMethods",
      "paymentMethodCurencies",
      "suportedCountries",
    ]),
    ...mapGetters([
      "getSuportedCurrencies",
      "getAllPaymentMethods",
      "getPaymentMethodCurencies",
      "getActivePaymentMethod",
      "messageAlert",
      "getSuportedCountries",
    ]),
  },

  created() {
    this.$store.dispatch(
      "loadPaymentMethodCurencies",
      this.getActivePaymentMethod
    );
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        this.$store.dispatch("loadAllPaymentMethods");
        this.$store.dispatch(
          "loadPaymentMethodCurencies",
          this.getActivePaymentMethod
        );
        this.$store.dispatch("fetchSupportedCountries");

        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
      }
    },

    getActivePaymentMethod(val) {
      if (val != null) {
        this.$store.dispatch("loadAllPaymentMethods");
        this.$store.dispatch("fetchSupportedCurrencies");
        this.$store.dispatch("loadPaymentMethodCurencies", val);
        this.$store.dispatch("fetchSupportedCountries");
      }
    },
  },

  methods: {
    validateCurrencyForm() {
      if (this.$refs.currencyForm.validate()) {
        // send it
        this.submitNewCurrency(this.newCurrency);
      }
    },

    validatePaymentMethod() {
      if (this.$refs.paymentMethodForm.validate()) {
        // send it
        this.createPaymentMethod(this.mPaymentMethod);
      }
    },

    createPaymentMethod(mPaymentMethod) {
      this.dialogNewPaymentMethod = false;
      mPaymentMethod.localizationId = this.getActivePaymentMethod;
      this.$store.dispatch("createPaymentMethod", mPaymentMethod);
    },

    submitNewCurrency(newCurrency) {
      this.dialogNewPaymentMethod = false;
      this.createNewCurrency = false;
      newCurrency.paymentMethod = this.getActivePaymentMethod;
      this.$store.dispatch("createNewCurrency", newCurrency);
    },

    setActivePaymentMethod(paymentMethod) {
      this.$store.dispatch("setActivePaymentMethod", paymentMethod);
    },

    displayCurrency(currency) {
      this.activeCurrency = currency;
      this.viewCurrency = true;
    },

    deleteCurrency(activeCurrency) {
      this.viewCurrency = false;
      this.$store.dispatch("deleteActiveCurrency", activeCurrency.code);
    },

    paymentMethodSettings() {
      this.$router.push({
        path: "/admin/paymentMethods/" + this.getActivePaymentMethod,
      });
    },

    OpenCuccencyDetails(activeCurrency) {
      this.$router.push({
        path:
          "/admin/paymentMethods/" +
          this.getActivePaymentMethod +
          "/" +
          activeCurrency.code,
      });
    },

    selectedFiles(file) {
      this.mPaymentMethod.image_id = file.id;
    },
  },
};
</script>
