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
                <v-col lg="10" class="col-xl-7 mx-auto">
                  <h3 class="font-weight-light display-3">Nsiimbi</h3>
                  <p class="text-muted mb-4">THE WORLD AT YOUR FINGERTIPS</p>
                  <div class="form-group mb-3">
                    <v-text-field
                      id="inputEmail"
                      label="Email address"
                      autofocus=""
                      v-model="userEmail"
                      autocomplete="email"
                      outlined
                      dense
                    />
                  </div>
                  <v-btn
                    @click="resetPassword"
                    class="primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                  >
                    Reset Password
                  </v-btn>
                  <div class="text-center d-flex justify-content-between mt-4">
                    <p>
                      <a
                        :href="`/login${
                          $route.query.payment_tocken !== undefined
                            ? '?payment_tocken=' + $route.query.payment_tocken
                            : ''
                        }`"
                        class="font-italic text-muted"
                        >Login</a
                      >
                    </p>
                  </div>

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
      userEmail: "",
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

  created() {},

  methods: {
    resetPassword() {
      this.$store.dispatch("forgotPassword", {
        email: this.userEmail,
      });
    },
  },
};
</script>
