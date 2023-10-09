<template>
    <div class="container">
        <div>
            <v-row>
                <v-col class="col-md-11 pr-md-1 sm-6">
                    <h1 class="font-weight-light mb-2">Crypto Assets</h1>
                    <span class="overline">Manage Crypto Assets here</span>
                </v-col>

                <v-col class="col-md-1 pr-md-1">
                    <v-btn
                        @click="dialogCompose = true"
                        width="100%"
                        class="primary"
                        >New</v-btn
                    >
                </v-col>
            </v-row>

            <v-card class="py-2 pa-0">
                <v-data-table
                    :headers="headers"
                    :items="getCryptoAssets"
                    item-key="id"
                >
                    <template v-slot:item="{ item }">
                        <tr @click="loadPromo(item)">
                            <td>
                                <img
                                    :src="`${uploads}${item.image}`"
                                    width="30px"
                                    height="30px"
                                />
                            </td>
                            <td>{{ item.label }}</td>
                            <td>{{ item.currencyCode }}</td>
                            <td>
                                {{ getStebleCurency.code
                                }}{{ item.exchangeRate }}
                            </td>
                            <td>
                                {{ getStebleCurency.code }}{{ item.buy }}
                            </td>
                            <td>
                                {{ getStebleCurency.code }}{{ item.sell }}
                            </td>
                            <td>{{ item.created_at }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>

            <v-dialog v-model="dialogCompose" width="500">
                <v-card>
                    <v-card-title class="headline black" primary-title>
                        Add Crypto Asset
                    </v-card-title>
                    <v-card-text class="pa-5">
                        <v-form ref="sendForm" v-model="valid" lazy-validation>
                            <v-select
                                v-model="newCryptoAsset.code"
                                :items="cryptoAssetsData"
                                label="Crypto Assets"
                                item-text="title"
                                item-value="code"
                                :rules="[rules.required]"
                                outlined
                                dense
                                @change="setCurrencyCode"
                            >
                            </v-select>

                            <v-text-field
                                v-model="newCryptoAsset.currencyCode"
                                label="Code"
                                :rules="[rules.required]"
                                outlined
                                dense
                                disabled
                            ></v-text-field>

                            <v-text-field
                                v-model="newCryptoAsset.exchangeRate"
                                label="ExchangeRate"
                                :rules="[rules.required]"
                                outlined
                                dense
                            ></v-text-field>

                            <v-text-field
                                v-model="newCryptoAsset.buy"
                                label="buy"
                                :rules="[rules.required]"
                                outlined
                                dense
                            ></v-text-field>

                            <v-text-field
                                v-model="newCryptoAsset.sell"
                                label="sell"
                                :rules="[rules.required]"
                                outlined
                                dense
                            ></v-text-field>

                            <v-text-field
                                v-model="newCryptoAsset.chargePercentage"
                                label="Charge Percentage"
                                :rules="[rules.required]"
                                outlined
                                dense
                            ></v-text-field>

                            <v-text-field
                                v-model="newCryptoAsset.transactionFee"
                                label="Transaction Fee"
                                :rules="[rules.required]"
                                outlined
                                dense
                            ></v-text-field>

                            <v-textarea
                                v-model="newCryptoAsset.description"
                                label="description"
                                :rules="[rules.required]"
                                outlined
                                lines="2"
                                dense
                            />

                            <v-file-input
                                v-model="newCryptoAsset.image"
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
                            @click="dialogCompose = false"
                            outlined
                            color="primary"
                            >Cancel</v-btn
                        >
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="validate"
                            >Create</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="viewPromo" width="400">
                <v-card>
                    <v-card-title class="headline" primary-title>
                        {{ activeCryptoAsset.label }}
                    </v-card-title>
                    <v-card-title>
                        <v-img
                            :src="`${uploads}${activeCryptoAsset.image}`"
                            width="350px"
                        />
                    </v-card-title>

                    <v-card-text class="pa-5">
                        <p>
                            {{ activeCryptoAsset.description }}
                        </p>
                        <p>
                            Exchange Rate:
                            {{ getStebleCurency.code
                            }}{{ activeCryptoAsset.exchangeRate }}
                            <br />
                            Charge Percentage:
                            {{ activeCryptoAsset.chargePercentage }}%
                            <br />
                            transactionFee:
                            {{ activeCryptoAsset.transactionFee }}
                            <br />
                            Direction Percentage:
                            {{ activeCryptoAsset.directionPercentage }}%
                            <br />
                            Buy: {{ getStebleCurency.code }}
                            {{ activeCryptoAsset.buy }}
                            <br />
                            Sell: {{ getStebleCurency.code }}
                            {{ activeCryptoAsset.sell }}
                            <br />
                            DATE: {{ activeCryptoAsset.created_at }}
                        </p>
                    </v-card-text>
                    <v-card-actions class="pa-5">
                        <v-btn
                            color="red"
                            @click="deletePromo(activeCryptoAsset)"
                            outlined
                            >Delete</v-btn
                        >
                        <v-btn
                            class="ml-auto"
                            @click="composeEmail(activeCryptoAsset)"
                            outlined
                            color="primary"
                            >EDIT</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads, cryptoAssetsData } from "../../utils/constants";

export default {
    data: () => ({
        uploads: uploads,
        cryptoAssetsData: cryptoAssetsData,
        newCryptoAsset: {
            code: null,
            currencyCode: null,
        },
        activeCryptoAsset: {},
        composeMessage: {},
        dialogCompose: false,
        viewPromo: false,
        valid: false,
        rules: {
            required: (value) => !!value || "This field is required",
            email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
        },
        headers: [
            { text: "Logo", value: "image" },
            { text: "Label", value: "label" },
            {
                text: "Code",
                align: "left",
                sortable: false,
                value: "currencyCode",
            },
            { text: "Exchange Rate", value: "exchangeRate" },
            { text: "Buy", value: "buy" },
            { text: "Sell", value: "sell" },
            { text: "Date Added", value: "created_at" },
        ],
    }),

    beforeCreate() {
        this.$store.dispatch("fetchCryptoAssets");
        this.$store.dispatch("loadStebleCurency");
    },

    computed: {
        ...mapState(["cryptoAssets", "stebleCurency"]),
        ...mapGetters(["getCryptoAssets", "getStebleCurency", "messageAlert"]),
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
                this.$store.dispatch("fetchCryptoAssets");
                this.$store.dispatch("loadStebleCurency");
            }
        },
    },

    methods: {
        loadPromo(promo) {
            this.activeCryptoAsset = promo;
            this.viewPromo = true;
        },

        setCurrencyCode() {
            const context = this;
            const code = this.newCryptoAsset.code;
            let currencyCode = null;
            let currencyLabel = null;
            for (const index in context.cryptoAssetsData) {
                const crypto = context.cryptoAssetsData[index];
                if (crypto.code === code) {
                    currencyCode = crypto.currencyCode;
                    currencyLabel = crypto.title;
                }
            }
            context.newCryptoAsset.currencyCode = currencyCode;
            context.newCryptoAsset.label = currencyLabel;
        },

        deletePromo() {
            alert("Deleting");
        },

        validate() {
            if (this.$refs.sendForm.validate()) {
                // send it
                this.addnewCryptoAsset(this.newCryptoAsset);
            }
        },

        addnewCryptoAsset(newCryptoAsset) {
            //send the message via API/server endpoint here
            this.dialogCompose = false;
            this.$store.dispatch("addnewCryptoAsset", newCryptoAsset);
        },
    },
};
</script>
