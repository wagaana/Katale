<template>
    <v-container
        fill-height
        class="fill-height pa-0"
        height="100%"
        style="max-height: 73vh"
    >
        <v-responsive v-if="activeChat" class="overflow-y-hidden fill-height">
            <v-card flat class="d-flex flex-column fill-height">
                <v-card-title>
                    <v-list-item-avatar>
                        <v-icon
                            v-if="userSelected.profile_picture === undefined"
                            >mdi-account-outline</v-icon
                        >
                        <v-img
                            v-else
                            class="card-img"
                            :src="`${uploads}${userSelected.profile_picture}`"
                        ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content class="text-truncate title">
                        <h6 class="font-weight-light mb-0">
                            {{ userSelected.name }}
                        </h6>
                        <span class="overline">{{
                            `last seen ${userSelected.lastSeen}`
                        }}</span>
                    </v-list-item-content>
                </v-card-title>

                <!-- <v-divider></v-divider> -->

                <v-container
                    ref="scrollToMe"
                    fill-height
                    class="flex-grow-1 overflow-y-auto"
                >
                    <v-card-text>
                        <div v-for="(msg, i) in conversations" v-bind:key="i">
                            <template>
                                <div
                                    :class="{
                                        'd-flex flex-row-reverse':
                                            isMyMessage(msg),
                                    }"
                                >
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-hover v-slot:default="{ hover }">
                                                <v-chip
                                                    v-if="
                                                        msg.contentType ===
                                                        'text'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    {{
                                                        decodeTextMessage(
                                                            msg.message
                                                        )
                                                    }}
                                                    <sub
                                                        class="ml-2"
                                                        style="
                                                            font-size: 0.5rem;
                                                        "
                                                    >
                                                        {{ msg.sentTime }}
                                                    </sub>
                                                    <v-icon v-if="hover" small>
                                                        fa-expand
                                                    </v-icon>
                                                </v-chip>

                                                <v-chip
                                                    v-else-if="
                                                        msg.contentType ===
                                                        'location'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                >
                                                    <a
                                                        :href="`https://www.google.com/maps/search/?api=1&query=${msg.mLatitude}%2C${msg.mLongitude}`"
                                                        target="__APP"
                                                    >
                                                        <v-img
                                                            :src="`${uploads}${msg.mImage}`"
                                                        >
                                                            <div
                                                                class="ml-2"
                                                                style="
                                                                    font-size: 0.5rem;
                                                                "
                                                            >
                                                                {{
                                                                    msg.sentTime
                                                                }}
                                                            </div>
                                                            <v-icon
                                                                v-if="hover"
                                                                small
                                                            >
                                                                fa-expand
                                                            </v-icon>
                                                        </v-img>
                                                    </a>
                                                </v-chip>

                                                <v-chip
                                                    v-else-if="
                                                        msg.contentType ===
                                                        'image'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                        max-width: 70%;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    <v-img
                                                        :src="`${uploads}${msg.message}`"
                                                    >
                                                        <div
                                                            class="ml-2"
                                                            style="
                                                                font-size: 0.5rem;
                                                            "
                                                        >
                                                            {{ msg.sentTime }}
                                                        </div>
                                                        <v-icon
                                                            v-if="hover"
                                                            small
                                                        >
                                                            fa-expand
                                                        </v-icon>
                                                    </v-img>
                                                </v-chip>

                                                <v-chip
                                                    v-else-if="
                                                        msg.contentType ===
                                                        'audio'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    <audio
                                                        :ref="`player-${msg.message}`"
                                                        controls
                                                        :src="
                                                            uploads +
                                                            msg.message
                                                        "
                                                        type="audio/mpeg"
                                                    >
                                                        <div
                                                            class="ml-2"
                                                            style="
                                                                font-size: 0.5rem;
                                                            "
                                                        >
                                                            {{ msg.sentTime }}
                                                        </div>
                                                        <v-icon
                                                            v-if="hover"
                                                            small
                                                        >
                                                            fa-expand
                                                        </v-icon>
                                                    </audio>
                                                </v-chip>

                                                <v-chip
                                                    v-else-if="
                                                        msg.contentType ===
                                                        'contact'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    <div>
                                                        Phone Contact (Download
                                                        Our App To View This
                                                        Contact)
                                                        <div
                                                            class="ml-2"
                                                            style="
                                                                font-size: 0.5rem;
                                                            "
                                                        >
                                                            {{ msg.sentTime }}
                                                        </div>
                                                        <v-icon
                                                            v-if="hover"
                                                            small
                                                        >
                                                            fa-expand
                                                        </v-icon>
                                                    </div>
                                                </v-chip>

                                                <v-chip
                                                    v-else-if="
                                                        msg.contentType ===
                                                        'file'
                                                    "
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    <a
                                                        :href="
                                                            uploads +
                                                            msg.message
                                                        "
                                                        target="__APP"
                                                    >
                                                        <v-img
                                                            :src="`${folder_logo}`"
                                                            width="200"
                                                            height="200"
                                                        >
                                                            <div
                                                                class="ml-2"
                                                                style="
                                                                    font-size: 0.5rem;
                                                                "
                                                            >
                                                                {{
                                                                    msg.sentTime
                                                                }}
                                                            </div>
                                                            <v-icon
                                                                v-if="hover"
                                                                small
                                                            >
                                                                fa-expand
                                                            </v-icon>
                                                        </v-img>
                                                    </a>
                                                </v-chip>

                                                <v-chip
                                                    v-else
                                                    :color="
                                                        isMyMessage(msg)
                                                            ? 'primary'
                                                            : ''
                                                    "
                                                    dark
                                                    style="
                                                        height: auto;
                                                        white-space: normal;
                                                    "
                                                    class="pa-4 mb-2"
                                                    v-on="on"
                                                >
                                                    <v-img
                                                        :src="`${uploads}${msg.message}`"
                                                    >
                                                        <div
                                                            class="ml-2"
                                                            style="
                                                                font-size: 0.5rem;
                                                            "
                                                        >
                                                            {{ msg.sentTime }}
                                                        </div>
                                                        <v-icon
                                                            v-if="hover"
                                                            small
                                                        >
                                                            fa-expand
                                                        </v-icon>
                                                    </v-img>
                                                </v-chip>
                                            </v-hover>
                                        </template>

                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title
                                                    >Delete</v-list-item-title
                                                >
                                                <v-list-item-title
                                                    >Reply</v-list-item-title
                                                >
                                                <v-list-item-title
                                                    >Report</v-list-item-title
                                                >
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </template>
                        </div>
                    </v-card-text>
                </v-container>

                <v-footer>
                    <input
                        type="file"
                        id="imageInput"
                        hidden
                        @change="handleImageChange"
                    />
                    <v-card-text class="flex-shrink-1">
                        <v-text-field
                            v-model="messageContent"
                            label="Type a message"
                            type="text"
                            no-details
                            outlined
                            append-icon="mdi-paperclip"
                            @click:append="pickAttachment"
                            append-outer-icon="mdi-send"
                            @keyup.enter="SendMessage"
                            @click:append-outer="SendMessage"
                            hide-details
                        />
                    </v-card-text>
                </v-footer>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";
import folder_logo from "../../../../assets/img/folder.png";

export default {
    data: () => ({
        activeChat: 1,
        uploads: uploads,
        folder_logo: folder_logo,
        messageContent: null,

        chatId: null,
        recieverId: null,

        messageForm: {
            content: "",
            me: true,
            created_at: "11:11am",
        },
        overlay: false,
        sidebarMenu: true,
        toggleMini: false,
        themeSwitch: false,
        theme: false,

        settings: [
            {
                id: 1,
                title: "My Account",
                icon: "mdi-shield-account",
                href: "/profileSettings",
            },
            {
                id: 3,
                title: "Change Password",
                icon: "mdi-cog",
                href: "/passwordSettings",
            },
            {
                id: 4,
                title: "Logout",
                icon: "mdi-key-outline",
                href: "/login",
            },
        ],
    }),

    computed: {
        mini() {
            return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
        },
        ...mapState([
            "selectedUser",
            "conversations",
            "myUserProfile",
            "newMessages",
            "userNotifications",
        ]),
        ...mapGetters([
            "messageAlert",
            "userSelected",
            "myUserProfile",
            "conversations",
            "getNewMessages",
            "getUserNotifications",
        ]),
        countNewNotifications() {
            return this.getUserNotifications.length > 0
                ? this.getUserNotifications.length
                : 0;
        },

        countNewMessages() {
            return this.getNewMessages.length > 0
                ? this.getNewMessages.length
                : 0;
        },
    },

    mounted() {
        if (localStorage.getItem("theme") == "light") {
            this.themeSwitch = false;
            this.theme = false;
        } else {
            this.themeSwitch = true;
            this.theme = true;
        }
    },

    watch: {
        messageAlert(val) {
            if (val != null) {
                this.chatId = this.$route.query.chatId;
                this.recieverId = this.$route.query.userId;
                this.$store.dispatch("getSelectedUserProfile", this.recieverId);
                this.$store.dispatch("getMyProfile");
                this.$store.dispatch("fetchChatConversation", {
                    chatId: this.chatId,
                    recieverId: this.recieverId,
                });
                this.$store.dispatch("fetchNewMessages");
                this.$store.dispatch("fetchUserNotifications");
                this.$store.dispatch("getMyProfile");
            }
        },

        $route(to, from) {
            this.chatId = this.$route.query.chatId;
            this.recieverId = this.$route.query.userId;
            this.$store.dispatch("fetchNewMessages");
            this.$store.dispatch("getSelectedUserProfile", this.recieverId);
            this.$store.dispatch("fetchChatConversation", {
                chatId: this.chatId,
                recieverId: this.recieverId,
            });
            this.$store.dispatch("fetchNewMessages");
            this.$store.dispatch("fetchUserNotifications");
            this.$store.dispatch("getMyProfile");
        },

        myUserProfile(val) {
            if (val != null) {
                if (val.level > 1) {
                    this.settings[3] = {
                        id: 5,
                        title: "Admin",
                        icon: "mdi-cog",
                        href: "/admin",
                    };
                }
            }
        },

        conversations(val) {
            if (val != null) {
                this.scrollToElement();
            }
        },
    },

    created() {
        this.chatId = this.$route.query.chatId;
        this.recieverId = this.$route.query.userId;
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("getSelectedUserProfile", this.recieverId);
        this.$store.dispatch("fetchChatConversation", {
            chatId: this.chatId,
            recieverId: this.recieverId,
        });
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getCustomerServiceChats");
    },

    methods: {
        SendMessage() {
            const formData = new FormData();
            formData.append("contentType", "text");
            formData.append("message", this.messageContent);
            formData.append("chatId", this.chatId);
            formData.append("recieverId", this.recieverId);
            this.messageContent = "";
            this.$store.dispatch("sendMessage", formData);
        },

        handleImageChange(event) {
            const image = event.target.files[0];
            const formData = new FormData();
            formData.append("filename", image);
            formData.append("contentType", "image");
            formData.append("message", this.messageContent);
            formData.append("chatId", this.chatId);
            formData.append("recieverId", this.recieverId);
            this.messageContent = "";
            this.$store.dispatch("sendFile", formData);
        },

        pickAttachment() {
            const imageInput = document.getElementById("imageInput");
            imageInput.click();
        },

        isMyMessage(msg) {
            return msg.senderId === this.myUserProfile.id + "" ? true : false;
        },

        decodeTextMessage(x) {
            x = x.replace(/\+/g, "%20");
            x = x.replace(/\<br>/g, "\n");
            return decodeURIComponent(x);
        },

        scrollToElement() {
            const el = this.$refs.scrollToMe;

            if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({
                    behavior: "smooth",
                });
            }
        },
    },
};
</script>
