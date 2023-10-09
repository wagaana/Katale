<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h1 class="font-weight-light mb-0">Supported Banks</h1>
        <span class="overline"
          >Manage system Supported Banks Settings Here</span
        >
        <v-card class="py-6">
          <v-row class="row px-2">
            <v-col lg="3" cols="12" class="py-6">
              <v-row>
                <v-col class="col-md-12">
                  <v-btn
                    @click="dialogNewBank = true"
                    width="100%"
                    class="primary"
                    ><v-icon>mdi-plus</v-icon>New Bank</v-btn
                  >
                </v-col>
              </v-row>

              <v-card>
                <v-list dense nav>
                  <v-list-item
                    v-for="item in getAllBanks"
                    :key="item.code"
                    link
                    :to="item.href"
                    :color="
                      item.code + '' === getActiveBank + '' ? 'red' : 'black'
                    "
                    @click="setActiveBank(item.code)"
                  >
                    <v-list-item-icon>
                      <div
                        class="cyan fill-height"
                        v-if="item.code + '' === getActiveBank + ''"
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
                    <v-btn @click="createNewBankCurrency = true" class="primary"
                      >New Currency</v-btn
                    >
                  </v-col>
                  <v-col lg="1" class="py-1">
                    <v-card-text
                      @click="bankSettings"
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
                    :items="getBankCurencies"
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

                <v-dialog v-model="dialogNewBank" width="500">
                  <v-card>
                    <v-card-title class="headline black" primary-title>
                      Add Bank
                    </v-card-title>
                    <v-card-text class="pa-5">
                      <v-form
                        ref="bankForm"
                        v-model="payment_method_valid"
                        lazy-validation
                      >
                        <v-text-field
                          v-model="mBank.label"
                          label="Label"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-autocomplete
                          v-model="mBank.country"
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
                          v-model="mBank.description"
                          label="Description"
                          :rules="[rules.required]"
                          outlined
                          lines="2"
                          dense
                        />

                        <v-text-field
                          v-model="mBank.code"
                          label="Code"
                          :rules="[rules.required]"
                          outlined
                          dense
                        ></v-text-field>

                        <v-file-input
                          v-model="mBank.image"
                          label="Icon"
                          :rules="[rules.required]"
                          outlined
                          dense
                        />
                      </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-5">
                      <v-btn
                        class="ml-auto"
                        @click="dialogNewBank = false"
                        outlined
                        color="primary"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="primary"
                        :disabled="!payment_method_valid"
                        @click="validateBank"
                        >Create</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="createNewBankCurrency" width="400">
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
                        @click="createNewBankCurrency = false"
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
                        @click="deleteActiveBankCurrency(activeCurrency)"
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

export default {
  data: () => ({
    uploads: uploads,
    languages_options: languages_options,
    mBank: {},
    newCurrency: {},
    activeCurrency: {},
    composeMessage: {},
    dialogNewBank: false,
    createNewBankCurrency: false,
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
    this.$store.dispatch("loadAllBanks");
    this.$store.dispatch("fetchSupportedCurrencies");
    this.$store.dispatch("fetchSupportedCountries");
  },

  computed: {
    ...mapState([
      "suportedCurrencies",
      "allBanks",
      "bankCurencies",
      "suportedCountries",
    ]),
    ...mapGetters([
      "getSuportedCurrencies",
      "getAllBanks",
      "getBankCurencies",
      "getActiveBank",
      "messageAlert",
      "getSuportedCountries",
    ]),
  },

  created() {
    this.$store.dispatch("loadBankCurencies", this.getActiveBank);
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        this.$store.dispatch("loadAllBanks");
        this.$store.dispatch("loadBankCurencies", this.getActiveBank);
        this.$store.dispatch("fetchSupportedCountries");

        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
      }
    },

    getActiveBank(val) {
      if (val != null) {
        this.$store.dispatch("loadAllBanks");
        this.$store.dispatch("fetchSupportedCurrencies");
        this.$store.dispatch("loadBankCurencies", val);
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

    validateBank() {
      if (this.$refs.bankForm.validate()) {
        // send it
        this.createBank(this.mBank);
      }
    },

    createBank(mBank) {
      this.dialogNewBank = false;
      mBank.localizationId = this.getActiveBank;
      this.$store.dispatch("createBank", mBank);
    },

    submitNewCurrency(newCurrency) {
      this.dialogNewBank = false;
      this.createNewBankCurrency = false;
      newCurrency.bank = this.getActiveBank;
      this.$store.dispatch("createNewBankCurrency", newCurrency);
    },

    setActiveBank(activeBank) {
      this.$store.dispatch("setActiveBank", activeBank);
    },

    displayCurrency(currency) {
      this.activeCurrency = currency;
      this.viewCurrency = true;
    },

    deleteActiveBankCurrency(activeCurrency) {
      this.viewCurrency = false;
      this.$store.dispatch("deleteActiveBankCurrency", activeCurrency.code);
    },

    bankSettings() {
      this.$router.push({
        path: "/admin/suportedBanks/" + this.getActiveBank,
      });
    },

    OpenCuccencyDetails(activeCurrency) {
      this.$router.push({
        path:
          "/admin/suportedBanks/" +
          this.$route.params.code +
          "/" +
          activeCurrency.code,
      });
    },
  },
};
</script>
