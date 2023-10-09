<template>
    <div class="container">
        <div>
            <div class="row">
                <div class="col-md-10 pr-md-1 sm-6">
                    <h1 class="font-weight-light">Campaign Offers</h1>
                </div>
                <div class="col-md-2 pr-md-1 fill-width">
                    <v-btn
                        @click="createOffer"
                        class="primary font-weight-light"
                        >New Offer</v-btn
                    >
                </div>
            </div>
            <v-card>
                <v-data-table
                    :headers="headers"
                    :items="getCampaignOffers"
                    item-key="id"
                >
                    <template v-slot:item="{ item }">
                        <tr @click="loadOffer(item)">
                            <td>{{ item.label }}</td>
                            <td>{{ item.description }}</td>
                            <td>
                                {{
                                    item.subject !== null
                                        ? item.subject
                                        : "Updates"
                                }}
                            </td>
                            <td>{{ item.created_at }}</td>
                            <td>{{ item.deleted }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>

            <v-dialog v-model="dialogTemplate" width="400">
                <v-card>
                    <v-card-title class="headline" primary-title>
                        <h2>{{ activeOffer.label }}</h2>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card class="pa-5">
                        <v-card-text>
                            <p>Subject: {{ activeOffer.subject }}</p>
                            <p>{{ activeOffer.description }}</p>

                            <span class="success--text subtitle-1">
                                Created: {{ activeOffer.created_at }}
                            </span>
                        </v-card-text>
                    </v-card>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-5">
                        <v-btn
                            color="red"
                            @click="deleteOffer(activeOffer)"
                            outlined
                            >Delete</v-btn
                        >
                        <v-btn
                            class="ml-auto"
                            @click="dialogTemplate = false"
                            outlined
                            color="primary"
                            >Close</v-btn
                        >
                        <v-btn
                            color="primary"
                            @click="viewOffer(activeOffer.id)"
                            >Configure</v-btn
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
import { uploads } from "../../../utils/constants";

export default {
    data() {
        return {
            rules: {
                required: (value) => !!value || "This field is required",
                email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
            },
            dialogTemplate: false,
            activeOffer: {},
            headers: [
                {
                    text: "Label",
                    align: "left",
                    sortable: false,
                    value: "text",
                },
                {
                    text: "Description",
                    value: "description",
                },
                {
                    text: "Subject",
                    value: "subject",
                },
                {
                    text: "Creation Time",
                    value: "created_at",
                },
                {
                    text: "Deleted",
                    value: "deleted",
                },
            ],
        };
    },

    created() {
        this.$store.dispatch("loadSystemCampaignOffers");
    },

    computed: {
        ...mapState(["campaignOffers"]),
        ...mapGetters(["getCampaignOffers", "messageAlert"]),
    },

    watch: {
        messageAlert(val) {
            if (val != null) {
                Vue.notify({
                    group: "foo",
                    type: val.type,
                    text: val.body,
                });
            }
        },
    },

    methods: {
        createOffer() {
            this.$router.push({
                path: "/admin/marketingCampaigns/createCampaignOffer",
                query: {
                    action: "createOffer",
                },
            });
        },

        viewOffer(id) {
            this.$router.push({
                path: "/admin/marketingCampaigns/createCampaignOffer",
                query: {
                    action: "vewOffer",
                    id: id,
                },
            });
        },

        loadOffer(offer) {
            this.activeOffer = offer;
            this.dialogTemplate = true;
        },

        deleteOffer(offer) {
            this.$store.dispatch("deleteOffer", offer.id);
            this.dialogTemplate = false;
        },
    },
};
</script>
