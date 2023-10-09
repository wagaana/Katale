<template>
  <v-container>
    <v-row class="no-gutters">
      <v-col class="col">
        <h1 class="mb-0">Hello {{ myUserProfile.name }},</h1>
        <div class="overline mb-4">We are at your service today!.</div>
      </v-col>

      <v-list-item-avatar class="ml-auto" size="70">
        <img
          :src="imageLink.logo"
          :alt="title"
          height="50px"
          v-if="
            myUserProfile.profile_picture == null ||
            myUserProfile.profile_picture == undefined
          "
        />
        <img v-else :src="`${uploads}${myUserProfile.profile_picture}`" />
      </v-list-item-avatar>
    </v-row>

    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card class="mb-4 pa-5">
          <v-list class="" dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.href"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col lg="8" cols="sm" class="pb-2">
        <!-- <v-container> -->
        <router-view> </router-view>
        <!-- </v-container> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import mLogo from "../../../../assets/logo.png";
import mMain from "../../../../assets/img/main.webp";
import mSub_main from "../../../../assets/img/sub_main.jpg";
import mSocial_cover from "../../../../assets/img/social_cover.jpeg";
import { uploads } from "../../../utils/constants";

export default {
  template: "#documentation",

  data: () => ({
    title: "Nsiimbi",
    imageLink: {
      main: mMain,
      sub_main: mSub_main,
      logo: mLogo,
      social_cover: mSocial_cover,
    },
    selectedLanguage: {},
    selectedResponse: {},
    uploads: uploads,
    items: [
      {
        title: "Request To Pay",
        icon: "mdi-cloud",
        href: "/api_reference/requestToPay",
      },
      {
        title: "Request Status",
        icon: "mdi-wechat",
        href: "/api_reference/request_status",
      },
    ],
  }),

  computed: {
    ...mapState(["myUserProfile"]),
    ...mapGetters(["myUserProfile"]),
  },

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
  },
};
</script>
