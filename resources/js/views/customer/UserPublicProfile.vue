<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon to="/home">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Profile</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon color="primary" v-if="countNewMessages < 1"
              >mdi-chat</v-icon
            >
            <v-badge overlap v-else>
              <template v-slot:badge>
                <span class="caption">{{ countNewMessages }}</span>
              </template>
              <v-icon color="primary">mdi-chat</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-list dense>
            <v-subheader>
              <router-link to="inbox"><h6>Open Messages</h6></router-link>
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
                  message.contentType === "text" ? message.message : "File Data"
                }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item v-if="countNewMessages < 1">
              <v-list-item-title class="primary--text"
                >You have no new messages yet...</v-list-item-title
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
                <span class="caption">{{ countNewNotifications }}</span>
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
              @click.stop="getNotificationDetails(notification.id)"
            >
              <v-list-item-icon>
                <v-avatar size="35">
                  <v-img alt="" :src="`${uploads}${notification.iconUrl}`" />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-title class="primary--text"
                >{{ notification.message }} <br />
                {{ notification.creationTime }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item v-if="countNewNotifications < 1">
              <v-list-item-title class="primary--text"
                >You have no notifications yet...</v-list-item-title
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
                <v-icon color="primary">{{ notification.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="primary--text">{{
                notification.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container width="100%">
        <v-row>
          <v-col cols="12" class="py-6 pa-5">
            <v-row>
              <v-col lg="12" cols="12" class="py-0">
                <v-row>
                  <v-col xxs="12">
                    <v-card class="mb-1 pa-1">
                      <v-row class="pa-1">
                        <v-col cols="12" class="center relative">
                          <v-card class="mx-auto" tile>
                            <v-img
                              height="300"
                              :src="`${uploads}${userSelected.cover_picture}`"
                            ></v-img>

                            <!------------------ EDIT IMAGE BUTTON ------------------>
                            <div v-if="getFriendData === null">
                              <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    class="mx-0 my-10"
                                    fab
                                    small
                                    color="#32BCC3"
                                    absolute
                                    right
                                    top
                                    @click="SaveContact"
                                    v-on="on"
                                    dark
                                  >
                                    <v-icon dark>mdi-account-plus</v-icon>
                                  </v-btn>
                                </template>
                                <span>Save Contact</span>
                              </v-tooltip>
                            </div>

                            <div
                              v-else-if="
                                getFriendData.blocked === 'false' &&
                                getFriendData !== null
                              "
                            >
                              <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    class="mx-0 my-10"
                                    fab
                                    small
                                    color="#32BCC3"
                                    absolute
                                    right
                                    top
                                    @click="OpenChat"
                                    v-on="on"
                                    dark
                                  >
                                    <v-icon dark>mdi-message</v-icon>
                                  </v-btn>
                                </template>
                                <span>Send Message</span>
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
                              <v-list-item center class="center relative">
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
                                    style="margin-top: 20px"
                                    >{{ userSelected.name }}</v-list-item-title
                                  >
                                  <v-list-item-subtitle
                                    >Joined:
                                    {{ userSelected.created_at }}
                                    |
                                    {{
                                      userSelected.address_label !== null
                                        ? `Lives: ${userSelected.address_label}`
                                        : "Lives: Kampala, Uganda"
                                    }}</v-list-item-subtitle
                                  >
                                  <v-list-item-subtitle>{{
                                    userSelected.about !== null
                                      ? userSelected.about
                                      : "I look at it from a completely deferent lense."
                                  }}</v-list-item-subtitle>
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
                          <v-card-title class="headline" primary-title>
                            <v-row class="no-gutters">
                              <div class="col-auto">
                                <div class="cyan fill-height">&nbsp;</div>
                              </div>
                              <div class="col pa-3 py-4 cyan--text">
                                <h5 class="text-truncate text-uppercase">
                                  Security
                                </h5>
                              </div>
                            </v-row>

                            <v-col
                              cols="12"
                              sm="12"
                              order-sm="2"
                              v-if="getFriendData === null"
                            >
                              <v-card class="px-2 py-2" @click="BlockUser">
                                <v-row>
                                  <v-col cols="3" class="center">
                                    <v-icon dark color="red"
                                      >mdi-account-check</v-icon
                                    >
                                  </v-col>

                                  <v-col cols="9" class="center">
                                    <h5 class="text-truncate red--text">
                                      Block User
                                    </h5>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>

                            <v-col
                              cols="12"
                              sm="12"
                              order-sm="2"
                              v-else-if="
                                getFriendData.blocked === 'false' &&
                                getFriendData !== null
                              "
                            >
                              <v-card class="px-2 py-2" @click="BlockUser">
                                <v-row>
                                  <v-col cols="3" class="center">
                                    <v-icon dark color="red"
                                      >mdi-account-check</v-icon
                                    >
                                  </v-col>

                                  <v-col cols="9" class="center">
                                    <h5 class="text-truncate red--text">
                                      Block User
                                    </h5>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>

                            <v-col
                              cols="12"
                              sm="12"
                              order-sm="2"
                              v-else-if="
                                getFriendData.blocked === 'true' &&
                                getFriendData.blockerId == myUserProfile.userId
                              "
                            >
                              <v-card class="px-2 py-2" @click="UnblockUser">
                                <v-row>
                                  <v-col cols="3" class="center">
                                    <v-icon dark color="red"
                                      >mdi-account-lock</v-icon
                                    >
                                  </v-col>

                                  <v-col cols="9" class="center">
                                    <h5 class="text-truncate red--text">
                                      Unblock User
                                    </h5>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>

                            <v-col cols="12" sm="12" order-sm="2" v-else>
                              <v-card class="px-2 py-2">
                                <v-row>
                                  <v-col cols="3" class="center">
                                    <v-icon dark color="red"
                                      >mdi-block-helper</v-icon
                                    >
                                  </v-col>

                                  <v-col cols="9" class="center">
                                    <h5 class="text-truncate red--text">
                                      You are blocked
                                    </h5>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>

                            <v-col cols="12" sm="12" order-sm="2">
                              <v-card class="px-2 py-2" @click="ReportUser">
                                <v-row>
                                  <v-col cols="3" class="center">
                                    <v-icon dark color="red"
                                      >mdi-thumb-down</v-icon
                                    >
                                  </v-col>

                                  <v-col cols="9" class="center">
                                    <h5 class="text-truncate red--text">
                                      Report User
                                    </h5>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>
                          </v-card-title>
                        </v-card>
                      </v-col>

                      <v-col lg="8" cols="12">
                        <v-card>
                          <v-row class="no-gutters">
                            <div class="col-auto">
                              <div class="cyan fill-height">&nbsp;</div>
                            </div>
                            <div class="col pa-3 py-4 cyan--text">
                              <h5 class="text-truncate text-uppercase">
                                Files And Media
                              </h5>
                            </div>
                          </v-row>

                          <!-- image content -->

                          <v-col
                            cols="12"
                            sm="12"
                            class="py-0"
                            order="-1"
                            order-sm="2"
                          >
                            <FilesAndMedia
                              :data="getFriendChatConversationMedia"
                            />
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

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
import { uploads } from "../../utils/constants";
import FilesAndMedia from "../../components/FilesAndMedia.vue";

export default {
  components: {
    FilesAndMedia: FilesAndMedia,
  },
  data() {
    return {
      uploads: uploads,
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

      data: {
        gallery: [
          {
            id: 1,
            title: "My Account",
            avator: "mdi-shield-account",
            href: "/profileSettings",
          },
          {
            id: 3,
            title: "Change Password",
            avator: "mdi-cog",
            href: "/passwordSettings",
          },
          {
            id: 4,
            title: "Logout",
            avator: "mdi-key-outline",
            href: "/login",
          },
        ],
      },
      chatId: null,
    };
  },

  beforeCreate() {
    this.$store.dispatch("getChatID", this.$route.query.userIndex);
    this.$store.dispatch("checkFriendshipStatus", this.$route.query.userIndex);
    this.$store.dispatch("getSelectedUserProfile", this.$route.query.userIndex);
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("getCustomerCareChatGroupId");
  },

  created() {},

  computed: {
    ...mapState([
      "chatID",
      "customerCareChatGroupId",
      "friendData",
      "myUserProfile",
      "friendChatConversationMedia",
      "selectedUser",
      "newMessages",
      "userNotifications",
    ]),
    ...mapGetters([
      "getChatID",
      "getCustomerCareChatGroupId",
      "getFriendData",
      "myUserProfile",
      "getFriendChatConversationMedia",
      "messageAlert",
      "userSelected",
      "getNewMessages",
      "getUserNotifications",
    ]),

    countNewNotifications() {
      return this.getUserNotifications.length > 0
        ? this.getUserNotifications.length
        : 0;
    },

    countNewMessages() {
      return this.getNewMessages.length > 0 ? this.getNewMessages.length : 0;
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
        this.$store.dispatch(
          "getSelectedUserProfile",
          this.$route.query.userIndex
        );
        this.$store.dispatch("getChatID", this.$route.query.userIndex);
        this.$store.dispatch(
          "checkFriendshipStatus",
          this.$route.query.userIndex
        );
        this.$store.dispatch("fetchFriendChatConversationMedia", this.chatId);
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getCustomerCareChatGroupId");
      }
    },

    userSelected(val) {
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

    getChatID(id) {
      if (/^-?\d+$/.test(id)) {
        this.chatId = id;
        this.$store.dispatch("fetchFriendChatConversationMedia", id);
      }
    },

    getFriendChatConversationMedia(val) {
      if (val != null) {
        this.scrollToElement();
      }
    },

    getFriendData(val) {
      console.log("getFriendData", this.isObjectEmpty(val));
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
    SaveContact() {
      this.$store.dispatch("createNewFriend", this.$route.query.userIndex);
    },

    OpenChat() {
      if (this.myUserProfile.id !== this.userSelected.id) {
        this.$router.push({
          path: "/chat",
          query: {
            chatId: this.getFriendData.chatId,
            userId: this.userSelected.id,
          },
        });
      } else {
        this.$router.push({
          path: "/profileSettings",
          query: {},
        });
      }
    },

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

    readMessage(chatId, userId, chatType) {
      if (this.userSelected.id + "" !== userId || chatType !== "SINGLE_CAST") {
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

    getNotificationDetails(notificationId) {
      console.log(notificationId);
    },

    openUserRequestDetails(requestId) {
      this.$router.push({
        path: "/userRequestDetails",
        query: {
          requestId: requestId,
        },
      });
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

    isObjectEmpty(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false;
        }
      }

      return JSON.stringify(obj) === JSON.stringify({});
    },

    BlockUser() {
      this.$store.dispatch("blockUser", this.$route.query.userIndex);
    },

    UnblockUser() {
      this.$store.dispatch("unblockUser", this.$route.query.userIndex);
    },

    ReportUser() {
      this.$router.push({
        path: "/chat",
        query: {
          chatId: this.getCustomerCareChatGroupId,
          userId: this.myUserProfile.userId,
        },
      });
    },
  },
};
</script>
