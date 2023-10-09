<template>
    <v-app class="fill-height">
        <v-app-bar app>
            <v-app-bar-nav-icon to="/home">
                <v-icon>mdi-arrow-left-thick</v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                        <v-icon color="primary" v-if="countNewMessages < 1"
                            >mdi-chat</v-icon
                        >
                        <v-badge overlap v-else>
                            <template v-slot:badge>
                                <span class="caption">{{
                                    countNewMessages
                                }}</span>
                            </template>
                            <v-icon color="primary">mdi-chat</v-icon>
                        </v-badge>
                    </v-btn>
                </template>
                <v-card>
                    <v-list dense>
                        <v-subheader>
                            <router-link to="inbox"
                                ><h6>Open Messages</h6></router-link
                            >
                        </v-subheader>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="message in getNewMessages"
                            :key="message.id"
                            link
                            @click.stop="
                                readMessage(
                                    message.id,
                                    message.senderId === myUserProfile.id + ''
                                        ? message.recieverId
                                        : message.senderId
                                )
                            "
                        >
                            <v-list-item-icon>
                                <v-avatar size="35">
                                    <v-img
                                        alt=""
                                        :src="`${uploads}${
                                            message.chatType === 'SINGLE_CAST'
                                                ? message.profilePicture
                                                : message.logoUrl
                                        }`"
                                    />
                                </v-avatar>
                            </v-list-item-icon>
                            <v-list-item-title class="primary--text"
                                >{{
                                    message.chatType === "SINGLE_CAST"
                                        ? message.userName
                                        : message.label
                                }}
                                <br />
                                {{
                                    message.contentType === "text"
                                        ? message.message
                                        : "File Data"
                                }}</v-list-item-title
                            >
                        </v-list-item>

                        <v-list-item v-if="countNewMessages < 1">
                            <v-list-item-title class="primary--text"
                                >You have no new messages
                                yet...</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                        <v-icon color="primary" v-if="countNewNotifications < 1"
                            >mdi-bell</v-icon
                        >
                        <v-badge overlap v-else>
                            <template v-slot:badge>
                                <span class="caption">{{
                                    countNewNotifications
                                }}</span>
                            </template>
                            <v-icon color="primary">mdi-bell</v-icon>
                        </v-badge>
                    </v-btn>
                </template>
                <v-card>
                    <v-list dense>
                        <v-subheader><h6>Notifications</h6></v-subheader>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="notification in getUserNotifications"
                            :key="notification.id"
                            link
                            @click.stop="
                                getNotificationDetails(notification.id)
                            "
                        >
                            <v-list-item-icon>
                                <v-avatar size="35">
                                    <v-img
                                        alt=""
                                        :src="`${uploads}${notification.iconUrl}`"
                                    />
                                </v-avatar>
                            </v-list-item-icon>
                            <v-list-item-title class="primary--text"
                                >{{ notification.message }} <br />
                                {{
                                    notification.creationTime
                                }}</v-list-item-title
                            >
                        </v-list-item>

                        <v-list-item v-if="countNewNotifications < 1">
                            <v-list-item-title class="primary--text"
                                >You have no notifications
                                yet...</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                        <v-icon color="primary">mdi-shield-account</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-list dense>
                        <v-container>
                            <v-switch
                                v-model="themeSwitch"
                                @change="switchTheme"
                                inset
                                label="Dark Mode"
                            ></v-switch>
                        </v-container>
                        <v-divider></v-divider>

                        <v-list-item
                            v-for="notification in settings"
                            :key="`notification-key-${notification.id}`"
                            link
                            :to="notification.href"
                        >
                            <v-list-item-icon>
                                <v-icon color="primary">{{
                                    notification.icon
                                }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="primary--text">{{
                                notification.title
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-divider></v-divider>

        <v-main>
            <v-container fluid>
                <v-card>
                    <v-row class="py-0 px-2 elevation-2">
                        <v-col lg="4" grow class="py-1 elevation-2">
                            <v-tabs
                                v-model="tab"
                                show-arrows
                                grow
                                class="fill-width"
                                height="60px"
                            >
                                <v-tabs-slider color="primary"></v-tabs-slider>
                                <v-tab v-for="t in tabs" :key="t">
                                    <div class="caption py-1">
                                        {{ t.name }}
                                        <v-icon v-text="t.icon"></v-icon>
                                    </div>
                                </v-tab>
                            </v-tabs>
                            <v-tabs-items v-model="tab" grow class="pa-4">
                                <v-tab-item>
                                    <v-container
                                        ref="scrollToMe"
                                        fill-height
                                        class="flex-grow-1 overflow-y-auto fill-height pa-0"
                                        height="100%"
                                        style="max-height: 63vh"
                                    >
                                        <v-responsive>
                                            <div
                                                v-if="getChats.length === 0"
                                                class="text-center px-2"
                                            >
                                                You have no chats yes
                                            </div>
                                            <v-row
                                                v-for="(message, i) in getChats"
                                                :key="i"
                                                class="mb-5 pb-2 elevation-1"
                                                align-center
                                            >
                                                <v-col lg="3" cols="12">
                                                    <v-avatar
                                                        size="70"
                                                        height="70"
                                                    >
                                                        <v-img
                                                            alt=""
                                                            :src="`${uploads}${
                                                                message.chatType !==
                                                                'SINGLE_CAST'
                                                                    ? myUserProfile.id +
                                                                          '' ===
                                                                      message.chatSenderId
                                                                        ? message.logoUrl
                                                                        : message.profile_picture
                                                                    : message.profile_picture
                                                            }`"
                                                        />
                                                    </v-avatar>
                                                </v-col>

                                                <v-col lg="9" cols="12">
                                                    <v-row class="mt-1 pb-2">
                                                        <v-col
                                                            sm="8"
                                                            cols="8"
                                                            class="py-0"
                                                            @click.stop="
                                                                readMessage(
                                                                    message.id,
                                                                    message.userId,
                                                                    message.chatType
                                                                )
                                                            "
                                                            :style="{
                                                                cursor: 'pointer',
                                                            }"
                                                        >
                                                            <h4
                                                                :class="
                                                                    !message.read
                                                                        ? 'font-italic'
                                                                        : ''
                                                                "
                                                            >
                                                                {{
                                                                    message.chatType !==
                                                                    "SINGLE_CAST"
                                                                        ? myUserProfile.id +
                                                                              "" ===
                                                                          message.chatSenderId
                                                                            ? message.label
                                                                            : "CC: " +
                                                                              message.name
                                                                        : message.name
                                                                }}

                                                                <v-icon
                                                                    v-show="
                                                                        message.read
                                                                    "
                                                                    small
                                                                    title="Read"
                                                                    >mdi-check</v-icon
                                                                >
                                                            </h4>
                                                        </v-col>
                                                        <v-col
                                                            sm="4"
                                                            cols="4"
                                                            class="text-right caption py-0"
                                                        >
                                                            {{
                                                                message.sentTime
                                                            }}
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            class="py-0"
                                                            @click="
                                                                readMessage(
                                                                    message.id,
                                                                    message.userId,
                                                                    message.chatType
                                                                )
                                                            "
                                                        >
                                                            <div>
                                                                {{
                                                                    decodeTextMessage(
                                                                        message.contentType ===
                                                                            "text"
                                                                            ? message.message
                                                                            : getMessageTitle(
                                                                                  message.contentType
                                                                              )
                                                                    )
                                                                }}
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-responsive>
                                    </v-container>
                                </v-tab-item>

                                <v-tab-item>
                                    <v-container
                                        ref="scrollToMe"
                                        fill-height
                                        class="flex-grow-1 overflow-y-auto fill-height pa-0"
                                        height="100%"
                                        style="max-height: 63vh"
                                    >
                                        <v-responsive
                                            class="overflow-y-hidden fill-height"
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
                                                    class="col pa-3 py-5 cyan--text"
                                                >
                                                    <h5
                                                        class="text-truncate text-uppercase"
                                                    >
                                                        My Contacts
                                                    </h5>
                                                </div>
                                                <v-card-actions>
                                                    <AddFriend />
                                                </v-card-actions>
                                            </v-row>
                                            <div
                                                v-if="getFriends.length === 0"
                                                class="text-center px-2"
                                            >
                                                You have no contacts here
                                            </div>
                                            <v-row
                                                v-for="(
                                                    userProfile, i
                                                ) in getFriends"
                                                :key="i"
                                                class="mb-5 pb-2 elevation-1"
                                                align-center
                                            >
                                                <v-col lg="3" cols="12">
                                                    <v-avatar
                                                        size="70"
                                                        height="70"
                                                    >
                                                        <v-img
                                                            alt=""
                                                            :src="`${uploads}${userProfile.profile_picture}`"
                                                        />
                                                    </v-avatar>
                                                </v-col>

                                                <v-col lg="9" cols="12">
                                                    <v-row class="mt-1 pb-2">
                                                        <v-col
                                                            sm="12"
                                                            cols="12"
                                                            class="py-0"
                                                            @click="
                                                                readMessage(
                                                                    userProfile.chatId,
                                                                    userProfile.userId ===
                                                                        myUserProfile.id +
                                                                            ''
                                                                        ? userProfile.accountId
                                                                        : userProfile.userId,
                                                                    'SINGLE_CAST'
                                                                )
                                                            "
                                                            :style="{
                                                                cursor: 'pointer',
                                                            }"
                                                        >
                                                            <h4>
                                                                {{
                                                                    userProfile.name
                                                                }}
                                                                <v-icon
                                                                    v-show="
                                                                        userProfile.read
                                                                    "
                                                                    small
                                                                    title="Read"
                                                                    >mdi-check</v-icon
                                                                >
                                                            </h4>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            class="py-0"
                                                        >
                                                            <div>
                                                                @{{
                                                                    userProfile.user_name
                                                                }}
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-responsive>
                                    </v-container>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-col>

                        <v-col lg="8" grow class="py-1 elevation-2">
                            <transition name="fade" fluid>
                                <router-view></router-view>
                            </transition>
                        </v-col>
                    </v-row>
                </v-card>

                <div class="overline mb-1 pt-6" style="text-align: center">
                    Manage & track all your shipments.
                </div>
            </v-container>
            <v-footer app class="py-3">
                <span class="ml-auto overline"
                    >NSIIMBI.COM &copy;{{ new Date().getFullYear() }}</span
                >
            </v-footer>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";
import AddFriend from "../../../components/AddFriend.vue";

export default {
    components: {
        AddFriend: AddFriend,
    },

    data() {
        return {
            uploads: uploads,
            tab: 0,
            tabs: [
                {
                    name: "Messages",
                    icon: "mdi-email",
                },
                {
                    name: "Contacts",
                    icon: "mdi-contacts",
                },
            ],
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

            messageTitles: [
                {
                    id: "image",
                    name: "🖼 Image",
                },
                {
                    id: "video",
                    name: "🎬 Video",
                },
                {
                    id: "contact",
                    name: "👤 Contact",
                },
                {
                    id: "location",
                    name: "🗺 Location",
                },
                {
                    id: "file",
                    name: "💾 Document",
                },
                {
                    id: "audio",
                    name: "🔊 Voice Note",
                },
            ],
        };
    },

    beforeCreate() {
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getChats");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("fetchFriends");
    },

    computed: {
        ...mapState([
            "friends",
            "chats",
            "myUserProfile",
            "newMessages",
            "userNotifications",
        ]),
        ...mapGetters([
            "messageAlert",
            "getFriends",
            "getChats",
            "myUserProfile",
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

    watch: {
        messageAlert(val) {
            if (val != null) {
                Vue.notify({
                    group: "foo",
                    title: val.title,
                    text: val.body,
                    type: val.type,
                });
                this.$store.dispatch("getMyProfile");
                this.$store.dispatch("getChats");
                this.$store.dispatch("fetchNewMessages");
                this.$store.dispatch("fetchUserNotifications");
                this.$store.dispatch("fetchFriends");
            }
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

        chats(val) {
            if (val != null) {
                this.scrollToElement();
            }
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

    methods: {
        switchTheme(e) {
            if (e) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            console.log("THEME:::", e);

            setTimeout(() => {
                window.location.reload();
            }, 500);
        },
        markDeleted(message) {
            message.deleted = true;
        },
        restoreToInbox(message) {
            message.deleted = false;
        },
        countItems(list) {
            switch (list) {
                case "Messages":
                    return 0;
                // break;
                case "Contacts":
                    return 0;
                // break;
                default:
                    return 0;
            }
        },

        readMessage(chatId, userId, chatType) {
            if (
                this.myUserProfile.id + "" !== userId + "" ||
                chatType !== "SINGLE_CAST"
            ) {
                this.$router.push({
                    path: "/chat",
                    query: {
                        chatId: chatId,
                        userId: userId,
                    },
                });
            } else {
                this.$router.push({
                    path: "/profileSettings",
                    query: {},
                });
            }
        },

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
            formData.append("image", image);
            formData.append("contentType", "image");
            formData.append("message", this.messageContent);
            formData.append("chatId", this.chatId);
            formData.append("recieverId", this.recieverId);
            this.messageContent = "";
            this.$store.dispatch("sendMessage", formData);
        },

        pickAttachment() {
            const imageInput = document.getElementById("imageInput");
            imageInput.click();
        },

        isMyMessage(msg) {
            return msg.senderId !== this.userSelected.id ? true : false;
        },

        decodeTextMessage(x) {
            x = x.replace(/\+/g, "%20");
            x = x.replace(/\<br>/g, "\n");
            return decodeURIComponent(x);
        },

        getMessageTitle(x) {
            const context = this;
            let title = x;
            context.messageTitles.forEach((data) => {
                if (x === data.id) {
                    title = data.name;
                }
            });
            return title;
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

        openUserPublicProfile(userId) {
            this.$router.push({
                path: "/userPublicProfile",
                query: {
                    userIndex: userId,
                },
            });
        },
    },
};
</script>
