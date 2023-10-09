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
                <v-col lg="10" class="col-xl-7 mx-auto mt-5">
                  <h3 class="font-weight-light display-3">Nsiimbi</h3>
                  <p class="text-muted mb-4">THE WORLD AT YOUR FINGERTIPS</p>

                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <div class="form-group mb-3">
                      <v-text-field
                        label="Full Name"
                        autofocus=""
                        v-model="userName"
                        autocomplete="off"
                        :rules="[rules.required]"
                        outlined
                        dense
                      />
                    </div>
                    <div class="form-group mb-3">
                      <v-text-field
                        id="inputEmail"
                        label="Email address"
                        v-model="userEmail"
                        :rules="[rules.required, rules.email]"
                        autocomplete="off"
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
                        :rules="[rules.required, rules.password]"
                        autocomplete="off"
                        minlength="8"
                        outlined
                        dense
                      />
                    </div>
                    <div class="form-group mb-3">
                      <v-autocomplete
                        v-model="country"
                        :items="countries"
                        label="Select Country"
                        item-text="name"
                        item-value="code"
                        :rules="[rules.required]"
                        autocomplete="off"
                        outlined
                        dense
                      >
                      </v-autocomplete>
                    </div>
                    <div class="form-group mb-3">
                      <v-text-field
                        id="inputPin"
                        type="password"
                        label="PIN Code"
                        v-model="pin"
                        maxlength="4"
                        minlength="4"
                        :rules="[rules.required]"
                        autocomplete="off"
                        outlined
                        dense
                      />
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <input
                        id="customCheck1"
                        type="checkbox"
                        checked
                        class="custom-control-input mx-2"
                      />
                      <label for="customCheck1" class="custom-control-label"
                        >Remember password</label
                      >
                    </div>

                    <v-btn
                      :disabled="!valid"
                      @click="validate"
                      class="primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Register
                    </v-btn>
                  </v-form>
                  <div class="text-center d-flex justify-content-between mt-4">
                    <p>
                      <a
                        :href="`/login${
                          $route.query.payment_tocken !== undefined
                            ? '?payment_tocken=' + $route.query.payment_tocken
                            : ''
                        }`"
                        class="font-italic text-muted"
                        >Have an account?.</a
                      >
                    </p>
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
import { countries, uploads, escapeHtml } from "../../utils/constants";

export default {
  data: function () {
    return {
      countries: countries,
      userEmail: "",
      userName: "",
      userPassword: "",
      country: "",
      pin: "",
      app_download: app_download,
      valid: false,
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
        password: (value) =>
          value.length >= 8 || "Password must be atleast 8 characters",
      },
    };
  },

  beforeCreate() {
    this.$store.dispatch("signOut");
  },

  computed: {
    ...mapState(["loginError", "currentAuthData", "currentUser"]),
    ...mapGetters([
      "loginError",
      "currentAuthData",
      "currentUser",
      "messageAlert",
    ]),
  },

  watch: {
    currentUser(val) {
      if (val != null) {
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
    validate() {
      if (this.$refs.registerForm.validate()) {
        // send it
        this.registerUser();
      }
    },
    registerUser() {
      this.$store.dispatch("register", {
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword,
        country: this.country,
        pin: this.pin.substring(0, 4),
      });
    },
  },
};
</script>
