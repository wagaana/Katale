<template>
  <v-app>
    <v-main>
      <v-row class="no-gutter">
        <!-- The image half -->
        <v-col lg="6" cols="sm" class="d-none d-md-flex bg-image"> </v-col>
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
                  <div class="form-group mb-3">
                    <v-text-field
                      id="inputPassword"
                      type="password"
                      label="Password"
                      v-model="userPassword"
                      autocomplete="current-password"
                      outlined
                      dense
                    />
                  </div>
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      id="customCheck1"
                      type="checkbox"
                      checked
                      class="custom-control-input"
                    />
                    <label for="customCheck1" class="custom-control-label"
                      >Remember password</label
                    >
                  </div>
                  <v-btn
                    @click="loginUser"
                    class="primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                  >
                    Sign in
                  </v-btn>

                  <div class="text-center d-flex justify-content-between mt-4">
                    <p>
                      <a
                        :href="`/register${
                          $route.query.payment_tocken !== undefined
                            ? '?payment_tocken=' + $route.query.payment_tocken
                            : ''
                        }`"
                        class="font-italic text-muted"
                        >Register</a
                      >
                    </p>

                    <p>
                      <a
                        :href="`/forgotPassword${
                          $route.query.payment_tocken !== undefined
                            ? '?payment_tocken=' + $route.query.payment_tocken
                            : ''
                        }`"
                        class="font-italic text-muted mx-12"
                        >Forgot your password?</a
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
      userPassword: "",
      app_download: app_download,
    };
  },

  beforeCreate() {
    this.$store.dispatch("signOut");
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

        if (this.$route.query.payment_tocken === undefined) {
          this.$router.push("/home");
        } else {
          this.$router.push({
            path: "/payments/" + this.$route.query.payment_tocken,
            query: {},
          });
        }
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
  },

  created() {},

  methods: {
    loginUser() {
      this.$store.dispatch("login", {
        email: this.userEmail,
        password: this.userPassword,
      });
    },
  },
};
</script>
