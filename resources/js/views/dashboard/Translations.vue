<template>
    <div class="container">
        <v-row>
            <v-col cols="12" class="py-0">
                <h1 class="font-weight-light mb-0">Translations</h1>
                <span class="overline"
                    >Manage system Translation Settings Here</span
                >
                <v-card class="py-6">
                    <v-row class="row px-2">
                        <v-col lg="3" cols="12" class="py-6">
                            <v-row>
                                <v-col class="col-md-12">
                                    <v-btn
                                        @click="dialogNewLocalization = true"
                                        width="100%"
                                        class="primary"
                                        ><v-icon>mdi-plus</v-icon>New
                                        Localization</v-btn
                                    >
                                </v-col>
                            </v-row>

                            <v-card>
                                <v-list dense nav>
                                    <v-list-item
                                        v-for="item in getLocalization"
                                        :key="item.title"
                                        link
                                        :to="item.href"
                                        :color="
                                            item.id + '' ===
                                            getActiveLanguage + ''
                                                ? 'red'
                                                : 'black'
                                        "
                                        @click="setActiveLanguage(item.id)"
                                    >
                                        <v-list-item-icon>
                                            <div
                                                class="cyan fill-height"
                                                v-if="
                                                    item.id + '' ===
                                                    getActiveLanguage + ''
                                                "
                                            >
                                                &nbsp;
                                            </div>
                                            &nbsp;
                                            <v-icon>mdi-translate</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>{{
                                                `${item.label} (${item.language})`
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
                                        <v-btn
                                            @click="createNewTranslation = true"
                                            class="primary"
                                            >New Translation</v-btn
                                        >
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            v-model="search"
                                            append-icon="mdi-translate"
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
                                        :items="getTranslations"
                                        item-key="id"
                                    >
                                        <template v-slot:item="{ item }">
                                            <tr @click="loadTranslation(item)">
                                                <td>
                                                    {{ item.translationkey }}
                                                </td>
                                                <td>{{ item.value }}</td>
                                                <td>{{ item.label }}</td>
                                                <td>{{ item.creationTime }}</td>
                                            </tr>
                                        </template>
                                    </v-data-table>
                                </v-card>

                                <v-dialog
                                    v-model="dialogNewLocalization"
                                    width="500"
                                >
                                    <v-card>
                                        <v-card-title
                                            class="headline black"
                                            primary-title
                                        >
                                            Create Localization
                                        </v-card-title>
                                        <v-card-text class="pa-5">
                                            <v-form
                                                ref="localizationForm"
                                                v-model="localization_valid"
                                                lazy-validation
                                            >
                                                <v-text-field
                                                    v-model="
                                                        mLocalization.label
                                                    "
                                                    label="Localization Name"
                                                    :rules="[rules.required]"
                                                    outlined
                                                    dense
                                                ></v-text-field>

                                                <v-autocomplete
                                                    v-model="
                                                        mLocalization.language
                                                    "
                                                    :items="languages_options"
                                                    label="Select Language"
                                                    item-text="label"
                                                    item-value="id"
                                                    :rules="[rules.required]"
                                                    outlined
                                                    dense
                                                >
                                                </v-autocomplete>
                                            </v-form>
                                        </v-card-text>
                                        <v-card-actions class="pa-5">
                                            <v-btn
                                                class="ml-auto"
                                                @click="
                                                    dialogNewLocalization = false
                                                "
                                                outlined
                                                color="primary"
                                                >Cancel</v-btn
                                            >
                                            <v-btn
                                                color="primary"
                                                :disabled="!localization_valid"
                                                @click="validateLocalization"
                                                >Create</v-btn
                                            >
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-dialog
                                    v-model="createNewTranslation"
                                    width="400"
                                >
                                    <v-card>
                                        <v-card-title
                                            class="headline black"
                                            primary-title
                                        >
                                            Add New Translation Line
                                        </v-card-title>
                                        <v-card-text class="pa-5">
                                            <v-form
                                                ref="translationForm"
                                                v-model="translation_valid"
                                                lazy-validation
                                            >
                                                <v-text-field
                                                    v-model="
                                                        translation.translationkey
                                                    "
                                                    label="Translation Key"
                                                    :rules="[rules.required]"
                                                    outlined
                                                    dense
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="translation.value"
                                                    label="Translation Value"
                                                    :rules="[rules.required]"
                                                    outlined
                                                    dense
                                                ></v-text-field>
                                            </v-form>
                                        </v-card-text>
                                        <v-card-actions class="pa-5">
                                            <v-btn
                                                class="ml-auto"
                                                @click="
                                                    createNewTranslation = false
                                                "
                                                outlined
                                                color="primary"
                                                >Cancel</v-btn
                                            >
                                            <v-btn
                                                color="primary"
                                                :disabled="!translation_valid"
                                                @click="validateTranslationForm"
                                                >Create</v-btn
                                            >
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-dialog v-model="viewTranslation" width="400">
                                    <v-card>
                                        <v-card-title
                                            class="headline"
                                            primary-title
                                        >
                                            {{
                                                activeTranslation.translationkey
                                            }}
                                        </v-card-title>
                                        <!-- <v-card-title>
                        {{ JSON.parse(escapeHtml(activeTranslation.flag)) }}
                      </v-card-title> -->
                                        <v-card-text class="pa-5">
                                            <p>
                                                VALUE:
                                                {{ activeTranslation.value }}
                                                <br />
                                                DATE:
                                                {{
                                                    activeTranslation.creationTime
                                                }}
                                                <br />
                                                LANGUAGE:
                                                {{ activeTranslation.label }}
                                            </p>
                                        </v-card-text>
                                        <v-card-actions class="pa-5">
                                            <v-btn
                                                color="red"
                                                @click="
                                                    deleteTranslation(
                                                        activeTranslation
                                                    )
                                                "
                                                outlined
                                                >Delete</v-btn
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
        languages_options: languages_options,
        uploads: uploads,
        mLocalization: {},
        translation: {},
        activeTranslation: {},
        composeMessage: {},
        dialogNewLocalization: false,
        createNewTranslation: false,
        viewTranslation: false,
        search: "",
        localization_valid: false,
        translation_valid: false,
        rules: {
            required: (value) => !!value || "This field is required",
            email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
        },
        headers: [
            {
                text: "Key",
                align: "left",
                sortable: false,
                value: "translationkey",
            },
            {
                text: "Value",
                value: "value",
            },
            {
                text: "Language",
                value: "label",
            },
            {
                text: "Time Added",
                value: "creationTime",
            },
        ],

        categories: [
            {
                id: "ANIMAL",
                label: "Animal",
            },
            {
                id: "CROP",
                label: "Crop",
            },
        ],
    }),

    beforeCreate() {
        this.$store.dispatch("loadLocalizations");
    },

    computed: {
        ...mapState(["localization", "translations"]),
        ...mapGetters([
            "getLocalization",
            "getTranslations",
            "getActiveLanguage",
            "messageAlert",
        ]),
    },

    created() {
        this.$store.dispatch(
            "loadTranslations",
            this.getActiveLanguage !== undefined ? this.getActiveLanguage : "1"
        );
    },

    watch: {
        messageAlert(val) {
            if (val != null) {
                this.$store.dispatch("loadLocalizations");
                this.$store.dispatch(
                    "loadTranslations",
                    this.getActiveLanguage !== undefined
                        ? this.getActiveLanguage
                        : "1"
                );

                Vue.notify({
                    group: "foo",
                    title: val.title,
                    text: val.body,
                    type: val.type,
                });
            }
        },

        getActiveLanguage(val) {
            if (val != null) {
                this.$store.dispatch("loadLocalizations");
                this.$store.dispatch("loadTranslations", val);
            }
        },
    },

    methods: {
        loadTranslation(translation) {
            this.activeTranslation = translation;
            this.viewTranslation = true;
        },

        deleteTranslation(translation) {
            this.viewTranslation = false;
            this.$store.dispatch("deleteTranslation", translation.id);
        },

        validateTranslationForm() {
            if (this.$refs.translationForm.validate()) {
                // send it
                this.createTranslation(this.translation);
            }
        },

        validateLocalization() {
            if (this.$refs.localizationForm.validate()) {
                // send it
                this.createLocalization(this.mLocalization);
            }
        },

        createTranslation(translation) {
            this.createNewTranslation = false;
            translation.localizationId = this.getActiveLanguage;
            this.$store.dispatch("createTranslation", translation);
        },

        createLocalization(mLocalization) {
            this.dialogNewLocalization = false;
            console.log("createLocalization", mLocalization);
            this.$store.dispatch("createLocalization", mLocalization);
        },

        setActiveLanguage(language) {
            this.createNewTranslation = false;
            this.$store.dispatch("setActiveLanguage", language);
        },
    },
};
</script>
