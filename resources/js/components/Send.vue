<template>
  <v-container>
    <v-row>
      <v-btn @click="findFriendsDialog = true" outlined rounded color="primary">
        Send
      </v-btn>

      <v-dialog v-model="findFriendsDialog" width="500">
        <v-card>
          <v-card-title class="headline" primary-title>
            <v-text-field
              v-model="queryText"
              append-icon="mdi-shield-account"
              label="Find Friends"
              hide-details
              dense
              @change="searchUsers"
              outlined
            ></v-text-field>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-col
              v-for="profile in queryText.length > 0
                ? getUserSearch
                : getFriends"
              :key="queryText.length > 0 ? profile.id : profile.accountId"
              cols="12"
              sm="12"
              order="-1"
              order-sm="2"
            >
              <v-card
                @click="
                  openUserPublicProfile(
                    profile,
                    queryText.length > 0 ? profile.id : profile.accountId
                  )
                "
                class="px-2 py-2"
              >
                <v-row>
                  <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
                    <v-avatar size="60">
                      <v-img
                        class="card-img"
                        :src="`${uploads}${profile.profile_picture}`"
                      ></v-img>
                    </v-avatar>
                  </v-col>

                  <v-col cols="12" sm="8">
                    <v-row>
                      <v-col cols="12">
                        <h2 class="title cyan--text hover">
                          {{ profile.name }}
                        </h2>
                        <p
                          class="font-weight-light grey--text text--darken-1 body-2"
                        >
                          @{{ profile.user_name }}
                        </p>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="sendMoneyDialog" width="420">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>{{ activeUserProfile.name }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-text-field
              v-model="fundingDetails.net"
              :rules="[rules.required]"
              label="Ammount"
              outlined
              dense
            />

            <v-text-field
              id="inputPin"
              type="password"
              label="PIN Code"
              v-model="fundingDetails.pin"
              maxlength="4"
              minlength="4"
              :rules="[rules.required]"
              autocomplete="off"
              outlined
              dense
            />

            <h5>
              TO SEND: {{ getStebleCurency.code }}
              {{ fundingDetails.net - getStebleCurency.transactionFee }}
            </h5>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="sendMoneyDialog = false"
              outlined
              color="red"
              >Close</v-btn
            >
            <v-btn outlined color="primary" @click="sendMoney()">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
  props: ["data"],

  data() {
    return {
      uploads: uploads,
      findFriendsDialog: false,
      sendMoneyDialog: false,
      queryText: "",
      activeUserProfile: {},
      fundingDetails: {},

      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  computed: {
    ...mapState([
      "userSearch",
      "stebleCurency",
      "friends",
      "sendActivePaymentMethods",
      "paymentMethodCurencies",
    ]),
    ...mapGetters([
      "getUserSearch",
      "getStebleCurency",
      "getFriends",
      "getSendActivePaymentMethods",
      "getPaymentMethodCurencies",
    ]),
  },

  beforeCreate() {
    this.$store.dispatch("loadSendActivePaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
    this.$store.dispatch("fetchFriends");
    this.$store.dispatch("loadStebleCurency");
  },

  watch: {
    queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchUsers", val);
      }
    },
  },

  methods: {
    searchUsers() {
      this.$store.dispatch("searchUsers", this.queryText);
    },

    sendMoney() {
      this.$store.dispatch("sendMoney", this.fundingDetails);
      this.sendMoneyDialog = false;
    },

    openUserPublicProfile(profile, userId) {
      this.activeUserProfile = profile;
      this.fundingDetails.userId = userId;
      this.findFriendsDialog = false;
      this.sendMoneyDialog = true;
    },
  },
};
</script>
