<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="toggleMini = !toggleMini"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>

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
              <v-icon color="primary">fa-chat</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-list dense>
            <v-subheader>
              <router-link to="/inbox"><h6>Open Messages</h6></router-link>
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
                    : message.senderId,
                  message.chatType
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
                :label="themeSwitch ? 'Dark Mode' : 'Light Mode'"
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
    <v-navigation-drawer
      v-model="sidebarMenu"
      permanent
      app
      :mini-variant.sync="mini"
      :color="theme ? 'grey darken-4' : ''"
    >
      <v-list-item
        v-if="myUserProfile"
        class="px-2 pb-0"
        @click="toggleMini = !toggleMini"
      >
        <v-list-item-avatar>
          <img :src="`${uploads}${myUserProfile.profile_picture}`" />
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          {{ myUserProfile.name }}
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list-item v-else class="px-2 pb-0" @click="toggleMini = !toggleMini">
        <v-list-item-avatar>
          <img :src="icon" />
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          EXCHANGE
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.href"
          style="text-decoration: none"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="primary--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="px-4 py-12 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
      <v-footer app class="py-3" elevation="2">
        <span class="ml-auto overline">nsiimbi.com &copy;2021</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import { mainMenuItems, uploads } from "../utils/constants";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import mLogo from "../../assets/logo.png";

export default {
  data: () => ({
    sidebarMenu: true,
    toggleMini: false,
    themeSwitch: false,
    theme: false,
    icon: mLogo,
    items: mainMenuItems,
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
  }),

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
  },

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState(["myUserProfile", "newMessages", "userNotifications"]),
    ...mapGetters([
      "messageAlert",
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
    isAuthenticated(val) {
      if (!val) {
        next("/login");
      }
    },
  },

  mounted() {
    // let theme = ;
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

    readMessage(chatId, userId, chatType) {
      if (this.myUserProfile.userId !== userId || chatType !== "SINGLE_CAST") {
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
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
