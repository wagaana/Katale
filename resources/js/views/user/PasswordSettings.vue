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
                  <h3 class="font-weight-light display-3 mt-12">Nsiimbi</h3>
                  <p class="text-muted mb-4">
                    FAST, PUNCTUAL AND PROTECTIVE DELIVERY
                  </p>
                  <v-form
                    ref="passwordUpdateForm"
                    v-model="valid"
                    lazy-validation
                  >
                    <div class="form-group mb-3">
                      <v-text-field
                        id="inputEmail"
                        type="password"
                        label="Current Password"
                        autofocus=""
                        v-model="old_password"
                        autocomplete="password"
                        :rules="[rules.required]"
                        outlined
                        dense
                      />

                      <v-text-field
                        id="inputEmail"
                        type="password"
                        label="New Password"
                        autofocus=""
                        v-model="new_password"
                        autocomplete="password"
                        :rules="[rules.required]"
                        outlined
                        dense
                      />
                    </div>
                  </v-form>
                  <v-btn
                    @click="validate"
                    class="
                      primary
                      btn-block
                      text-uppercase
                      mb-2
                      rounded-pill
                      shadow-sm
                    "
                  >
                    Update Password
                  </v-btn>
                  <div class="text-center d-flex justify-content-between mt-4">
                    <p>
                      <a href="/home" class="font-italic text-muted">Home</a>
                    </p>
                  </div>

                  <div class="form-group mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nsiimbi.delivery"
                      target="__APP"
                    >
                      <img
                        width="100%"
                        alt="download"
                        src="assets/img/app_download.png"
                      />
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

export default {
  data: function () {
    return {
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      old_password: "",
      new_password: "",
    };
  },

  computed: {
    ...mapState([]),
    ...mapGetters(["messageAlert"]),
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
  },

  created() {},

  methods: {
    validate() {
      if (this.$refs.passwordUpdateForm.validate()) {
        this.updatePassword();
      }
    },

    updatePassword() {
      this.$store.dispatch("updatePassword", {
        oldPass: this.old_password,
        newPassword: this.new_password,
      });
    },
  },
};
</script>
