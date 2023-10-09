<template>
    <v-container width="100%">
        <div>
            <v-row>
                <v-col cols="12" class="py-6 pa-5">
                    <v-row>
                        <v-col lg="12" cols="12" class="py-0">
                            <v-row>
                                <v-col xxs="12">
                                    <v-card class="mb-1 pa-1">
                                        <v-row class="pa-1">
                                            <v-col
                                                cols="12"
                                                class="center relative"
                                            >
                                                <v-card class="mx-auto" tile>
                                                    <v-img
                                                        height="300"
                                                        :src="`${uploads}${userSelected.cover_picture}`"
                                                    ></v-img>

                                                    <!------------------ EDIT IMAGE BUTTON ------------------>
                                                    <div>
                                                        <v-tooltip top>
                                                            <template
                                                                v-slot:activator="{
                                                                    on,
                                                                }"
                                                            >
                                                                <v-btn
                                                                    class="mx-0 my-10"
                                                                    fab
                                                                    small
                                                                    color="#32BCC3"
                                                                    absolute
                                                                    right
                                                                    top
                                                                    @click="
                                                                        readMessage
                                                                    "
                                                                    v-on="on"
                                                                    dark
                                                                >
                                                                    <v-icon dark
                                                                        >mdi-chat</v-icon
                                                                    >
                                                                </v-btn>
                                                            </template>
                                                            <span
                                                                >Send
                                                                Message</span
                                                            >
                                                        </v-tooltip>
                                                    </div>
                                                    <!------------------ EDIT IMAGE BUTTON ------------------>

                                                    <v-row
                                                        style="
                                                            margin: 2.5%;
                                                            position: absolute;
                                                            top: 220px;
                                                        "
                                                    >
                                                        <v-list-item
                                                            center
                                                            class="center relative"
                                                        >
                                                            <v-list-item-avatar
                                                                size="150"
                                                                center
                                                                class="center relative"
                                                            >
                                                                <v-img
                                                                    class="card-img"
                                                                    :src="`${uploads}${userSelected.profile_picture}`"
                                                                ></v-img>
                                                            </v-list-item-avatar>

                                                            <v-list-item-content>
                                                                <v-list-item-title
                                                                    class="title"
                                                                    style="
                                                                        margin-top: 20px;
                                                                    "
                                                                    >{{
                                                                        userSelected.name
                                                                    }}</v-list-item-title
                                                                >
                                                                <v-list-item-subtitle
                                                                    >{{
                                                                        userSelected.email
                                                                    }}
                                                                    |
                                                                    {{
                                                                        userSelected.phone
                                                                    }}</v-list-item-subtitle
                                                                >
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-row>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>

                                <v-col
                                    lg="12"
                                    cols="12"
                                    class="py-12"
                                    style="margin-top: 50px"
                                >
                                    <v-row>
                                        <v-col lg="4" cols="12">
                                            <v-card>
                                                <v-card-title
                                                    class="headline"
                                                    primary-title
                                                >
                                                    <v-row class="no-gutters">
                                                        <div class="col-auto">
                                                            <div
                                                                class="cyan fill-height"
                                                            >
                                                                &nbsp;
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="col pa-3 py-4 cyan--text"
                                                        >
                                                            <h5
                                                                class="text-truncate text-uppercase"
                                                            >
                                                                BAL: UGX
                                                                {{
                                                                    userSelected.wallet_balance >
                                                                    0
                                                                        ? userSelected.wallet_balance
                                                                        : "0.0"
                                                                }}
                                                            </h5>
                                                        </div>
                                                        <v-card-actions>
                                                            <FundUserWallet />
                                                        </v-card-actions>
                                                    </v-row>
                                                </v-card-title>
                                            </v-card>
                                        </v-col>

                                        <v-col lg="8" cols="12">
                                            <v-card>
                                                <v-tabs
                                                    v-model="tab"
                                                    show-arrows
                                                    grow
                                                    class="fill-width"
                                                    height="60px"
                                                >
                                                    <v-tabs-slider
                                                        color="primary"
                                                    ></v-tabs-slider>
                                                    <v-tab
                                                        v-for="t in tabs"
                                                        :key="t"
                                                    >
                                                        <div
                                                            class="caption py-1"
                                                        >
                                                            {{ t.name }}
                                                        </div>
                                                    </v-tab>
                                                </v-tabs>
                                                <v-tabs-items
                                                    v-model="tab"
                                                    grow
                                                    class="pa-4"
                                                >
                                                    <v-tab-item>
                                                        <v-data-table
                                                            :headers="
                                                                transactions_headers
                                                            "
                                                            :items="
                                                                getUserTransactions
                                                            "
                                                            item-key="id"
                                                        >
                                                            <template
                                                                v-slot:item="{
                                                                    item,
                                                                }"
                                                            >
                                                                <tr
                                                                    @click="
                                                                        openRequestDetails(
                                                                            item.id
                                                                        )
                                                                    "
                                                                >
                                                                    <td>
                                                                        <img
                                                                            :src="`${uploads}${item.profile_picture}`"
                                                                            width="30px"
                                                                            height="30px"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.name
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.provider
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.status
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.externalId
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.currency
                                                                        }}
                                                                        {{
                                                                            item.gross
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.currency
                                                                        }}
                                                                        {{
                                                                            item.fee
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.currency
                                                                        }}
                                                                        {{
                                                                            item.net
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.created_at
                                                                        }}
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            <!-- <template slot="body.append">
                                      <tr class="primary--text">
                                          <th class="title">Totals</th>
                                          <th class="title">{{ sumField('sales') }}</th>
                                          <th class="title">{{ sumField('customers') }}</th>
                                          <th class="title">{{ sumField('items') }}</th>
                                      </tr>
                                  </template> -->
                                                        </v-data-table>
                                                    </v-tab-item>

                                                    <v-tab-item>
                                                        <v-data-table
                                                            :headers="
                                                                friends_headers
                                                            "
                                                            :items="
                                                                getCustomerFriends
                                                            "
                                                            item-key="id"
                                                        >
                                                            <template
                                                                v-slot:item="{
                                                                    item,
                                                                }"
                                                            >
                                                                <tr
                                                                    @click="
                                                                        OpenUserInfo(
                                                                            item
                                                                        )
                                                                    "
                                                                >
                                                                    <td>
                                                                        {{
                                                                            item.userId
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            :src="
                                                                                item.profile_picture
                                                                            "
                                                                            width="30px"
                                                                            height="30px"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.name
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.email
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.email_verified
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            item.created_at
                                                                        }}
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                        </v-data-table>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-dialog v-model="dialogActiveAccount" width="420">
                <v-card>
                    <v-card-title class="headline" primary-title>
                        <h2>{{ activeProfile.name }}</h2>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card class="pa-5">
                        <v-card-title>
                            <v-img
                                :src="`${uploads}${activeProfile.profile_picture}`"
                                width="350px"
                            />
                        </v-card-title>

                        <v-card-text>
                            <p>{{ activeProfile.email }}</p>

                            <span class="success--text subtitle-1">
                                Created: {{ activeProfile.created_at }}
                            </span>
                        </v-card-text>
                    </v-card>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-5">
                        <v-btn color="success" outlined>Email</v-btn>
                        <v-btn
                            class="ml-auto"
                            @click="dialogActiveAccount = false"
                            outlined
                            color="red"
                            >Close</v-btn
                        >
                        <v-btn
                            outlined
                            color="primary"
                            @click="viewProfile(activeProfile)"
                            >View Profile</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import FundUserWallet from "../../components/FundUserWallet.vue";
import { uploads, mainMenuItems } from "../../utils/constants";

export default {
    components: {
        FundUserWallet: FundUserWallet,
    },

    data() {
        return {
            uploads: uploads,
            theme: false,
            menuItems: mainMenuItems,
            dialogActiveAccount: false,
            activeProfile: {},
            transactions_headers: [
                {
                    text: "Image",
                    align: "left",
                    sortable: false,
                    value: "profile_picture",
                },
                { text: "Name", value: "name" },
                { text: "Provider", value: "provider" },
                { text: "Status", value: "status" },
                { text: "External Id", value: "externalId" },
                { text: "gross", value: "gross" },
                { text: "Fee", value: "fee" },
                { text: "Net", value: "net" },
                { text: "Time", value: "created_at" },
            ],

            friends_headers: [
                {
                    text: "ID",
                    align: "left",
                    sortable: false,
                    value: "id",
                },
                { text: "Avator", value: "profile_picture" },
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Email Varified", value: "email_verified" },
                { text: "Join Date", value: "created_at" },
            ],

            tab: 0,
            tabs: [
                {
                    name: "Transactions",
                },
                {
                    name: "Friends",
                },
            ],
        };
    },

    beforeCreate() {
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("fetchCustomerFriends", this.$route.params.userId);
        this.$store.dispatch(
            "getSelectedUserProfile",
            this.$route.params.userId
        );
        this.$store.dispatch("loadUserTransactions", this.$route.params.userId);
        this.$store.dispatch(
            "getUserCustomerCareChatGroupId",
            this.$route.params.userId
        );
    },

    computed: {
        ...mapState([
            "userTransactions",
            "myUserProfile",
            "customerFriends",
            "selectedUser",
            "userCustomerCareChatGroupId",
        ]),
        ...mapGetters([
            "messageAlert",
            "getUserTransactions",
            "myUserProfile",
            "getCustomerFriends",
            "userSelected",
            "getUserCustomerCareChatGroupId",
        ]),
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
                this.$store.dispatch(
                    "getSelectedUserProfile",
                    this.$route.params.userId
                );
                this.$store.dispatch("fetchNewMessages");
                this.$store.dispatch("fetchUserNotifications");
                this.$store.dispatch(
                    "fetchCustomerFriends",
                    this.$route.params.userId
                );
                this.$store.dispatch("fetchUserCompleteDeliveryRequest");
                this.$store.dispatch("fetchUserDeliveryRequest");
            }
        },

        $route(to, from) {
            this.$store.dispatch("getMyProfile");
            this.$store.dispatch(
                "fetchCustomerFriends",
                this.$route.params.userId
            );
            this.$store.dispatch(
                "getSelectedUserProfile",
                this.$route.params.userId
            );
            this.$store.dispatch(
                "loadUserTransactions",
                this.$route.params.userId
            );
        },
    },

    methods: {
        viewProfile(activeProfile) {
            this.$router.push({
                path: "/admin/customers/"+activeProfile.accountId,
                query: { userId: activeProfile.accountId },
            });
            this.dialogActiveAccount = false;
        },

        createCampaign() {
            this.$router.push({
                path: "/createCampaign",
                query: { action: "newCampaign" },
            });
        },

        OpenUserInfo(item) {
            this.activeProfile = item;
            this.dialogActiveAccount = true;
        },

        readMessage() {
            this.$router.push({
                path: "/admin/ccInbox/ccChat",
                query: {
                    chatId: this.getUserCustomerCareChatGroupId,
                    userId: this.$route.params.userId,
                },
            });
        },
    },
};
</script>
