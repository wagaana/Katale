<template>
  <v-app light>
    <v-app-bar app>
      <v-app-bar-nav-icon to="/home">
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Home</v-toolbar-title>

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
                  message.senderId === myUserProfile.userId
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
      <v-container class="px-2 py-12 fill-height col-md-12" lg="12" fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
      <v-footer app class="py-3">
        <v-fab-transition>
          <v-btn
            style="z-index: 10; bottom: 30px"
            color="green"
            fab
            absolute
            dark
            bottom
            left
            @click="LiveChat"
          >
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
        </v-fab-transition>
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
import AddFriend from "../../components/AddFriend.vue";

export default {
  data: () => ({
    overlay: false,
    sidebarMenu: true,
    toggleMini: false,
    themeSwitch: false,
    theme: false,
    uploads: uploads,

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
    fab: true,
  }),

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("getCustomerCareChatGroupId");
  },

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState([
      "myUserProfile",
      "customerCareChatGroupId",
      "newMessages",
      "userNotifications",
    ]),
    ...mapGetters([
      "messageAlert",
      "getCustomerCareChatGroupId",
      "myUserProfile",
      "getNewMessages",
      "getUserNotifications",
      "isAuthenticated",
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

    isAuthenticated(val) {
      if (!val) {
        next("/login");
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

    if (!this.isAuthenticated) {
      next("/login");
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

    readMessage(chatId, userId) {
      if (this.myUserProfile.userId !== userId) {
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

    LiveChat() {
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
