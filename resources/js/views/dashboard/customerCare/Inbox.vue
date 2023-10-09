<template>
    <v-container fluid>
        <v-card>
            <v-row class="py-0 px-2 elevation-2">
                <v-col
                    lg="4"
                    grow
                    class="py-1 elevation-2"
                    height="600"
                    style="max-height: 73vh; height: 73vh"
                >
                    <v-tabs
                        v-model="tab"
                        show-arrows
                        grow
                        class="fill-width"
                        height="60px"
                    >
                        <v-tabs-slider color="primary"></v-tabs-slider>
                        <v-tab>
                            <div class="caption py-1">
                                Customer Service Live Chat
                            </div>
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab" grow class="pa-4">
                        <v-container
                            ref="scrollToMe"
                            fill-height
                            class="flex-grow-1 overflow-y-auto fill-height pa-0"
                            height="100%"
                            style="max-height: 63vh"
                        >
                            <v-responsive class="overflow-y-hidden fill-height">
                                <v-tab-item>
                                    <div
                                        v-if="
                                            getCustomerServiceChats.length === 0
                                        "
                                        class="text-center px-2"
                                    >
                                        You have no chats yes
                                    </div>
                                    <v-row
                                        v-for="(
                                            message, i
                                        ) in getCustomerServiceChats"
                                        :key="i"
                                        class="mb-5 pb-2 elevation-1"
                                        align-center
                                    >
                                        <v-col lg="3" cols="12">
                                            <v-avatar size="70" height="70">
                                                <v-img
                                                    alt=""
                                                    :src="`${uploads}${message.profile_picture}`"
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
                                                            message.chatSenderId
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
                                                        {{ message.name }}
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
                                                    {{ message.sentTime }}
                                                </v-col>
                                                <v-col
                                                    cols="12"
                                                    class="py-0"
                                                    @click="
                                                        readMessage(
                                                            message.id,
                                                            message.chatSenderId
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
                                </v-tab-item>
                            </v-responsive>
                        </v-container>
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
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";

export default {
    data() {
        return {
            uploads: uploads,
            overlay: false,
            sidebarMenu: true,
            toggleMini: false,
            themeSwitch: false,
            theme: false,

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
        this.$store.dispatch("getCustomerServiceChats");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
    },

    computed: {
        ...mapState([
            "customerServiceChats",
            "myUserProfile",
            "newMessages",
            "userNotifications",
        ]),
        ...mapGetters([
            "messageAlert",
            "getCustomerServiceChats",
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
                this.$store.dispatch("getCustomerServiceChats");
                this.$store.dispatch("fetchNewMessages");
                this.$store.dispatch("fetchUserNotifications");
            }
        },

        getCustomerServiceChats(val) {
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

        readMessage(chatId, userId) {
            this.$router.push({
                path: "/admin/ccInbox/ccChat",
                query: {
                    chatId: chatId,
                    userId: userId,
                },
            });
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
            return msg.senderId !== this.userSelected.userId ? true : false;
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
    },
};
</script>
