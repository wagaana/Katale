<template>
  <v-app light>
    <v-toolbar class="black">
      <v-toolbar-side-icon class="mx-2">
        <img :src="imageLink.logo" :alt="title" height="50px" />
      </v-toolbar-side-icon>
      <v-toolbar-title class="mx-0 white--text" v-text="title" />
      <p class="white--text">©</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="
            myUserProfile.profile_picture == null ||
            myUserProfile.profile_picture == undefined
          "
          flat
          to="login"
          >Sign In</v-btn
        >
        <v-list-item-avatar v-else>
          <img :src="`${uploads}${myUserProfile.profile_picture}`" />
        </v-list-item-avatar>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              We’ve got you covered.
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Endless possibilities for every user or business
            </div>
            <v-btn class="blue lighten-2 mt-5" dark large to="/home">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">THE WORLD AT YOUR FINGERTIPS</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="layout justify-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-security</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        Safer and protected
                      </div>
                    </v-card-title>
                    <v-card-text>
                      Shop with peace of mind. We don’t share your full
                      financial information with sellers. And Nsiimbi Exchange
                      Buyer Protection covers your eligible purchases if they
                      don’t show up or match their description.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="layout justify-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-earth</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Across devices, worldwide</div>
                    </v-card-title>
                    <v-card-text>
                      With just one account, you can shop at millions of
                      merchants around the world, and send payments for goods or
                      services almost anywhere. Use any of your devices to
                      manage your account on the go with the Nsiimbi Exchange
                      app.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="layout justify-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-flash</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        Mostly free, always upfront
                      </div>
                    </v-card-title>
                    <v-card-text>
                      It’s free to open a Nsiimbi Exchange account and buy
                      something using Nsiimbi Exchange unless it involves a
                      currency conversion.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              Nsiimbi Exchange is for everyone who pays online.
            </div>
            <em
              >Sell online, process payments, build financial products, or use
              business tools designed to grow your business.</em
            >
            <v-btn class="blue lighten-2 mt-5" dark large to="/home">
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  WAGAANA TECH (HOLDINGS) LTD has an extended network of
                  specialists who can be staffed on a client’s project team to
                  address specific needs or solve issues.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Your skills are needed to rethink and reinvent new ways to
                  make money safe and accessible for all. Find the perfect fit
                  with a team and role that suits your skills.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-xs-center">
              <img height="200px" :src="imageLink.logo" />
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import mLogo from "../../assets/logo.png";
import mMain from "../../assets/img/main.webp";
import mSub_main from "../../assets/img/sub_main.jpg";
import mSocial_cover from "../../assets/img/social_cover.jpeg";
import { uploads } from "../utils/constants";

export default {
  name: "App",
  data: function () {
    return {
      uploads: uploads,
      title: " Nsiimbi",
      imageLink: {
        main: mMain,
        sub_main: mSub_main,
        logo: mLogo,
        social_cover: mSocial_cover,
      },
      email: "",
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
  },

  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    ...mapState(["myUserProfile"]),
    ...mapGetters(["myUserProfile"]),
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
  },

  mounted: function () {
    this.calculateHeight();
  },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
