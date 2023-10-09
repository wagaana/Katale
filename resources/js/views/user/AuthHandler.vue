<template>
  <v-app>
    <v-main>
      <v-row class="no-gutter">
        <!-- The image half -->
        <v-col lg="6" cols="sm" class="d-none d-md-flex bg-image"></v-col>
        <!-- The content half -->
        <v-col lg="6" cols="sm">
          <div class="login d-flex align-items-center py-5">
            <!-- Demo content-->
            <v-container>
              <v-row>
                <v-col
                  v-if="mode === 'resetPassword'"
                  lg="10"
                  class="col-xl-7 mx-auto"
                >
                  <h3 class="font-weight-light display-3">Nsiimbi</h3>
                  <p class="text-muted mb-4">THE WORLD AT YOUR FINGERTIPS</p>
                  <div class="form-group mb-3">
                    <v-text-field
                      id="inputEmail"
                      label="New Password"
                      autofocus=""
                      v-model="password"
                      autocomplete="password"
                      type="password"
                      outlined
                      dense
                    />
                  </div>
                  <v-btn
                    @click="resetPassword"
                    class="primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                  >
                    Set new Password
                  </v-btn>

                  <div class="form-group mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nsiimbi.pay"
                      target="__APP"
                    >
                      <img
                        width="100%"
                        alt="download"
                        src="../../../assets/img/app_download.png"
                      />
                    </a>
                  </div>
                  <div class="footer"></div>
                </v-col>

                <v-col v-if="mode === 'verifyEmail'" lg="10" class="col-xl-7">
                  <h3 class="font-weight-light display-3">Nsiimbi</h3>
                  <p class="text-muted mb-4">THE WORLD AT YOUR FINGERTIPS</p>
                  <div class="form-group mb-3">
                    <!--Seccess recoverEmail-->
                  </div>
                  <div class="footer"></div>
                </v-col>

                <v-col v-if="mode === 'verifyEmail'" cols="12">
                  <v-alert prominent type="success">
                    <v-row align="center">
                      <v-col class="grow">
                        Your email has been confirmed, you can now use the app
                        to it's full potential
                      </v-col>
                      <v-col class="shrink">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.nsiimbi.pay"
                          target="__APP"
                        >
                          <v-btn>Open App</v-btn>
                        </a>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-col>

                <v-col v-if="mode === 'verifyEmail'" cols="12">
                  <div class="form-group mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nsiimbi.pay"
                      target="__APP"
                    >
                      <img
                        width="100%"
                        alt="download"
                        src="../../../assets/img/app_download.png"
                      />
                    </a>
                  </div>
                </v-col>

                <v-col
                  v-if="mode === '' || mode === undefined"
                  lg="10"
                  class="col-xl-7 mx-auto"
                >
                  <div class="form-group mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nsiimbi.pay"
                      target="__APP"
                    >
                      <img width="100%" alt="download" :src="app_download" />
                    </a>
                  </div>
                  <div class="footer"></div>
                </v-col>
              </v-row>
            </v-container>
            <!-- End -->
          </div>
        </v-col>
        <!-- End -->
      </v-row>
    </v-main>
  </v-app>
</template>
<style>
.login,
.image {
  min-height: 100vh;
}
.bg-image {
  background-image: url("../../../assets/img/login-split.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
<script>
import * as d3 from "d3";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import axios from "axios";
import app_download from "../../../assets/img/app_download.png";

export default {
  data: function () {
    return {
      password: "",
      mode: "",
      token: "",
      continueUrl: "",
      lang: "",
      apiKey: "",
      app_download: app_download,
    };
  },

  computed: {
    ...mapState(["loginError", "currentUser"]),
    ...mapGetters(["loginError", "currentUser", "messageAlert"]),
  },

  watch: {
    currentUser(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: "Welcome Back",
        });
        this.$router.push("/home");
      }
    },

    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: val.title,
          text: val.body,
        });
        this.$router.push("/login");
      }
    },

    loginError(val) {
      if (val !== null) {
        Vue.notify({
          group: "foo",
          title: "Login Error",
          text: val,
        });
      }
    },
  },

  created() {
    this.mode = this.$route.query.mode !== null ? this.$route.query.mode : "";

    this.token =
      this.$route.query.token !== null ? this.$route.query.token : "";

    this.continueUrl =
      this.$route.query.continueUrl !== null ? this.$route.query.token : "";

    this.lang =
      this.$route.query.lang !== null ? this.$route.query.token : "en";

    this.apiKey =
      this.$route.query.apiKey !== null ? this.$route.query.token : "";
  },

  methods: {
    resetPassword() {
      this.$store.dispatch("handleResetPassword", {
        token: this.token,
        continueUrl: this.continueUrl,
        lang: this.lang,
        password: this.password,
      });
    },

    recoverEmail() {
      this.$store.dispatch("handleRecoverEmail", {
        token: this.token,
        continueUrl: this.continueUrl,
        lang: this.lang,
        password: this.password,
      });
    },

    verifyEmail() {
      this.$store.dispatch("verifyEmail", {
        token: this.token,
        continueUrl: this.continueUrl,
        lang: this.lang,
        password: this.password,
      });
    },
  },
};
</script>
