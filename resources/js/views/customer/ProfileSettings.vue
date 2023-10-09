<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon to="/home">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Profile</v-toolbar-title>

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
                  message.senderId === myUserProfile.id
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
      <v-container width="100%">
        <v-row>
          <v-col cols="12" class="py-6 pa-5">
            <v-row>
              <v-col lg="12" cols="12" class="py-0">
                <v-row>
                  <v-col xxs="12">
                    <v-card class="mb-1 pa-1">
                      <v-row class="pa-1">
                        <v-col cols="12" class="center relative">
                          <v-card class="mx-auto" tile>
                            <v-img
                              height="300"
                              :src="`${uploads}${myUserProfile.cover_picture}`"
                            ></v-img>

                            <!------------------ EDIT IMAGE BUTTON ------------------>
                            <div>
                              <input
                                type="file"
                                id="imageInput"
                                hidden
                                @change="handleCoverImageChange"
                              />
                              <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    class="mx-0 my-10"
                                    fab
                                    small
                                    color="#32BCC3"
                                    absolute
                                    right
                                    top
                                    @click="editImage"
                                    v-on="on"
                                    dark
                                  >
                                    <v-icon dark>mdi-camera</v-icon>
                                  </v-btn>
                                </template>
                                <span>Edit Profile Image</span>
                              </v-tooltip>
                            </div>
                            <!------------------ EDIT IMAGE BUTTON ------------------>

                            <v-row
                              style="
                                margin: 2.5%;
                                position: absolute;
                                top: 220px;
                              "
                            >
                              <v-list-item
                                center
                                class="center relative ml-auto"
                              >
                                <v-list-item-avatar
                                  size="150"
                                  center
                                  class="center relative"
                                >
                                  <v-img
                                    class="card-img"
                                    :src="`${uploads}${myUserProfile.profile_picture}`"
                                  ></v-img>
                                </v-list-item-avatar>

                                <!------------------ EDIT IMAGE BUTTON ------------------>
                                <div>
                                  <input
                                    type="file"
                                    id="profileImageInput"
                                    hidden
                                    @change="handleImageChange"
                                  />
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                      <v-btn
                                        class="mx-6 my-6"
                                        fab
                                        small
                                        color="#32BCC3"
                                        absolute
                                        left
                                        bottom
                                        @click="editProfileImage"
                                        v-on="on"
                                        dark
                                      >
                                        <v-icon dark>mdi-camera</v-icon>
                                      </v-btn>
                                    </template>
                                    <span>Edit Profile Image</span>
                                  </v-tooltip>
                                </div>
                                <!------------------ EDIT IMAGE BUTTON ------------------>
                              </v-list-item>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>

                  <v-col
                    lg="12"
                    cols="12"
                    class="py-12"
                    style="margin-top: 50px"
                  >
                    <v-row>
                      <v-col lg="4" cols="12">
                        <v-list-item-content>
                          <v-list-item-title
                            class="title"
                            style="margin-top: 20px"
                            >{{ myUserProfile.name }}
                            <span
                              :style="{
                                cursor: 'pointer',
                              }"
                              @click="
                                OpenProfileEditModule(
                                  'name',
                                  'Name',
                                  myUserProfile.name || ''
                                )
                              "
                              ><v-icon color="#32BCC3">mdi-pencil</v-icon></span
                            ></v-list-item-title
                          >
                          <v-list-item-title>
                            {{ myUserProfile.email }}
                            <span
                              :style="{
                                cursor: 'pointer',
                              }"
                              @click="
                                OpenProfileEditModule(
                                  'email',
                                  'Email',
                                  myUserProfile.email || ''
                                )
                              "
                              ><v-icon color="#32BCC3">mdi-pencil</v-icon></span
                            >
                            |
                            {{ myUserProfile.phone
                            }}<span
                              :style="{
                                cursor: 'pointer',
                              }"
                              @click="
                                OpenProfileEditModule(
                                  'phone',
                                  'Phone',
                                  myUserProfile.phone || ''
                                )
                              "
                              ><v-icon color="#32BCC3">mdi-pencil</v-icon></span
                            >
                          </v-list-item-title>
                        </v-list-item-content>

                        <v-card>
                          <v-card-title class="headline" primary-title>
                            <v-row class="no-gutters">
                              <div class="col-auto">
                                <div class="cyan fill-height">&nbsp;</div>
                              </div>
                              <div class="col pa-3 py-4 cyan--text">
                                <h5 class="text-truncate text-uppercase">
                                  My Applications
                                </h5>
                              </div>
                              <v-card-actions>
                                <AddNewApplication /><!--calls add app dialog-->
                              </v-card-actions>
                            </v-row>
                            <v-col
                              v-for="app in getMyApplications"
                              :key="app.id"
                              cols="12"
                              sm="12"
                              order="-1"
                              order-sm="2"
                            >
                              <v-card
                                @click="openApplicationDetails(app)"
                                class="px-2 py-2"
                              >
                                <v-row>
                                  <v-col
                                    cols="12"
                                    offset-sm="0"
                                    sm="3"
                                    class="py-4 center"
                                  >
                                    <v-avatar size="60">
                                      <v-img
                                        class="card-img"
                                        :src="`${uploads}${app.imageUrl}`"
                                      ></v-img>
                                    </v-avatar>
                                  </v-col>

                                  <v-col cols="12" sm="8">
                                    <v-row>
                                      <v-col cols="12">
                                        <h2 class="title cyan--text hover">
                                          {{ app.label }}
                                        </h2>
                                        <p
                                          class="font-weight-light grey--text text--darken-1 body-2"
                                        >
                                          {{ app.created_at | exactDay }}
                                        </p>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>
                          </v-card-title>
                        </v-card>
                      </v-col>

                      <v-col lg="8" cols="12">
                        <v-card class="pa-5">
                          <!-- api access -->
                          <v-expansion-panels :value="0">
                            <v-expansion-panel>
                              <v-expansion-panel-header>
                                My API Account Details
                                <template v-slot:actions>
                                  <v-icon color="primary"
                                    >mdi-arrow-up-circle</v-icon
                                  >
                                </template>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-switch
                                  v-model="myUserProfile.apiStatus"
                                  @change="SwitchApiStatus"
                                  inset
                                  :label="
                                    myUserProfile.apiStatus
                                      ? 'You Are In Live Mode (Real money is used)'
                                      : 'You Are In Sandbox Mode (No Real money is used)'
                                  "
                                ></v-switch>

                                <v-row>
                                  <v-col lg="6" cols="sm" class="pb-2">
                                    <v-card>
                                      <v-row class="no-gutters">
                                        <div class="col-auto">
                                          <div class="cyan fill-height">
                                            &nbsp;
                                          </div>
                                        </div>
                                        <div class="col pa-3 py-4 cyan--text">
                                          <h5
                                            class="text-truncate text-uppercase"
                                          >
                                            Developer Community
                                          </h5>
                                          <p>
                                            We have built a Community for all
                                            things integration (Forum, stop by
                                            step integration) related. Please
                                            visit the
                                            <a
                                              href="https://join.skype.com/jHrVbbmR9GKL"
                                              target="__BLANK"
                                              >developer Community</a
                                            >
                                          </p>
                                        </div>
                                      </v-row>
                                    </v-card>
                                  </v-col>
                                  <v-col lg="6" cols="sm" class="pb-2">
                                    <v-card>
                                      <v-row class="no-gutters">
                                        <div class="col-auto">
                                          <div class="cyan fill-height">
                                            &nbsp;
                                          </div>
                                        </div>
                                        <div class="col pa-3 py-4 cyan--text">
                                          <h5
                                            class="text-truncate text-uppercase"
                                          >
                                            API reference
                                          </h5>
                                          <p>
                                            For the API reference you can view
                                            the latest documentation with
                                            snippets of code.Please visit the
                                            <a href="/api_reference"
                                              >API reference</a
                                            >
                                          </p>
                                        </div>
                                      </v-row>
                                    </v-card>
                                  </v-col>
                                </v-row>
                              </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                              <v-expansion-panel-header>
                                Display API Credentials
                                <template v-slot:actions>
                                  <v-icon color="primary"
                                    >mdi-arrow-up-circle</v-icon
                                  >
                                </template>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-container>
                                  <v-form @submit.prevent="onBasicSubmit">
                                    <v-text-field
                                      v-model="getapiKey"
                                      :append-icon="
                                        showKey ? 'mdi-eye' : 'mdi-eye-off'
                                      "
                                      :type="showKey ? 'text' : 'password'"
                                      label="Private Key"
                                      @click:append="
                                        getapiKey === null
                                          ? (apiKeysheet = !apiKeysheet)
                                          : (showKey = !showKey)
                                      "
                                      outlined
                                      dense
                                    ></v-text-field>

                                    <v-btn
                                      type="submit"
                                      v-if="getapiKey === null"
                                      @click="apiKeysheet = !apiKeysheet"
                                      variant="primary"
                                      class="mt-4"
                                      >Create API Key</v-btn
                                    >

                                    <v-btn
                                      type="submit"
                                      v-else
                                      @click="apiKeysheet = !apiKeysheet"
                                      variant="primary"
                                      class="mt-4"
                                      >Reset Keys</v-btn
                                    >
                                  </v-form>
                                </v-container>
                              </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                              <v-expansion-panel-header>
                                API Settings
                                <template v-slot:actions>
                                  <v-icon color="primary"
                                    >mdi-arrow-up-circle</v-icon
                                  >
                                </template>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-container>
                                  <v-form @submit.prevent="onBasicSubmit">
                                    <v-text-field
                                      v-model="myUserProfile.callbackURL"
                                      label="Callback URL"
                                      outlined
                                      dense
                                    />

                                    <v-btn
                                      type="submit"
                                      @click="saveCallbackUrl"
                                      variant="primary"
                                      class="mt-4"
                                      >Save</v-btn
                                    >
                                  </v-form>
                                </v-container>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-dialog v-model="dialogEditProfile" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>{{ `Edit ${activeFieldLabel}` }}</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="activeFieldValue"
                :label="`${activeFieldLabel} Value`"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-2">
              <v-btn
                class="ml-auto"
                @click="dialogEditProfile = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="updateUserProfile">Update</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogApplicationInfo" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>{{ activeApplication.label }}</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-title>
              <v-img
                :src="`${uploads}${activeApplication.imageUrl}`"
                width="350px"
                height="100px"
              />
            </v-card-title>

            <v-card-text class="pa-5">
              <p>
                {{ activeApplication.description }}
                <br />
                DATE: {{ activeApplication.created_at | exactDay }}
                <br />
                STATUS:
                {{
                  activeApplication.approved === "false" ? "Pending" : "Aproved"
                }}
              </p>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="activeApplication.app_token"
                :append-icon="showTocket ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showTocket ? 'text' : 'password'"
                label="Private Key"
                @click:append="showTocket = !showTocket"
                outlined
                dense
              />
              <v-text-field
                v-model="activeApplication.callbackURL"
                label="Callback URL"
                outlined
                dense
              />
            </v-card-text>

            <v-card-actions>
              <v-btn
                @click="updateApplicationCallbackURL(activeApplication.id)"
                color="success"
                outlined
                >Save</v-btn
              >
              <v-btn
                class="ml-auto"
                @click="dialogApplicationInfo = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn
                color="red"
                @click="deleteApplication(activeApplication.id)"
                >Delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-bottom-sheet v-model="apiKeysheet" inset>
          <v-list>
            <div class="col pa-3 py-4 primary--text">
              <h3 class="text-truncate">
                Create API Key
                <v-btn
                  class="red--text subtitle-3 float-right text-uppercase"
                  @click="apiKeysheet = false"
                >
                  X
                </v-btn>
              </h3>

              <p class="overline">
                This will generate a new API key for this account.
              </p>
            </div>

            <v-divider></v-divider>

            <v-card class="pa-5">
              <v-row>
                <v-col>
                  <v-card-text>
                    <v-form :ref="'paymentInfoForm'" lazy-validation>
                      <v-text-field
                        :rules="[rules.required]"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        label="Password"
                        v-model="userPassword"
                        autocomplete="current-password"
                        outlined
                        dense
                      />
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>

            <v-card-actions class="pa-5">
              <v-btn
                outlined
                class="ml-auto"
                color="primary"
                v-if="getapiKey === null ? false : true"
                @click="resetApiKey"
                >Reset Key</v-btn
              >
              <!-- <v-btn
                    class="ml-auto"
                    @click="apiKeysheet = false"
                    outlined
                    color="red"
                    >Close</v-btn
                > -->
              <v-btn
                outlined
                class="ml-auto"
                color="success"
                v-if="getapiKey === null ? true : false"
                @click="resetApiKey"
                >Create Key</v-btn
              >
            </v-card-actions>
          </v-list>
        </v-bottom-sheet>

        <div class="overline mb-1 pt-6" style="text-align: center">
          Manage & track all your finances.
        </div>
      </v-container>
      <v-footer app class="py-3">
        <span class="ml-auto overline"
          >NSIIMBI.COM &copy;{{ new Date().getFullYear() }}</span
        >
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../utils/constants";
import AddNewApplication from "../../components/AddNewApplication.vue";
import ActivityListItem from "../../components/ActivityListItem.vue";
import TransactionsListLoader from "../../components/loaders/TransactionsListLoader.vue";

export default {
  components: {
    AddNewApplication: AddNewApplication,
    ActivityListItem: ActivityListItem,
    TransactionsListLoader: TransactionsListLoader,
  },

  data() {
    return {
      uploads: uploads,
      overlay: false,
      sidebarMenu: true,
      toggleMini: false,
      themeSwitch: false,
      theme: false,
      uploads: uploads,

      activeFieldLabel: "",
      activeField: "",
      activeFieldValue: "",
      activeApplication: {},
      dialogApplicationInfo: false,
      showTocket: false,
      showKey: false,
      apiKeysheet: false,
      userPassword: null,
      showPassword: false,

      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },

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

      dialogEditProfile: false,
      headers: [
        {
          text: "Image",
          align: "left",
          sortable: false,
          value: "profilePicture",
        },
        {
          text: "Pick Up Addr",
          value: "pickUpAddress",
        },
        {
          text: "Drop Off Addr",
          value: "dropOffAddress",
        },
        {
          text: "Status",
          value: "status",
        },
        {
          text: "Net",
          value: "net",
        },
        {
          text: "Time",
          value: "timeAdded",
        },
      ],
    };
  },

  beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("loadMyApplications");
    this.$store.dispatch("fetchUserCompleteDeliveryRequest");
    this.$store.dispatch("fetchUserDeliveryRequest");
    this.$store.dispatch("getMyBalances");
  },

  computed: {
    ...mapState([
      "userDeliveryRequests",
      "myUserProfile",
      "newMessages",
      "userNotifications",
      "myApplications",
      "userCompleteDeliveryRequest",
      "myBalances",
      "apiKey",
    ]),
    ...mapGetters([
      "messageAlert",
      "getUserDeliveryRequests",
      "myUserProfile",
      "getNewMessages",
      "getUserNotifications",
      "getMyApplications",
      "getUserCompleteDeliveryRequest",
      "getMyBalances",
      "getapiKey",
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
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("loadMyApplications");
        this.$store.dispatch("fetchUserCompleteDeliveryRequest");
        this.$store.dispatch("fetchUserDeliveryRequest");
        this.$store.dispatch("getMyBalances");
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

    getapiKey(val) {
      if (val != null) {
        this.showKey = true;
        this.apiKeysheet = false;
      }
    },

    myUserProfile(val) {
      if (val != null) {
        this.myUserProfile.apiStatus = val.apiStatus == "true" ? true : false;
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
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMM DD YYYY");
    },
  },

  methods: {
    OpenProfileEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditProfile = true;
    },

    updateUserProfile() {
      if (this.activeFieldValue !== "") {
        const formData = new FormData();
        formData.append("editSubject", this.activeField);
        formData.append("editValue", this.activeFieldValue);
        this.$store.dispatch("updateUserProfileValue", formData);
      } else {
        this.$notify(
          "error",
          "Update Error",
          this.activeFieldLabel + " Is Required",
          {
            duration: 3000,
            permanent: false,
          }
        );
      }
      this.dialogEditProfile = false;
    },

    handleImageChange(event) {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      this.$store.dispatch("saveUserAvator", formData);
    },

    handleCoverImageChange(event) {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      this.$store.dispatch("uploadUserCoverPhoto", formData);
    },

    editProfileImage() {
      const profileImageInput = document.getElementById("profileImageInput");
      profileImageInput.click();
    },

    editImage() {
      const imageInput = document.getElementById("imageInput");
      imageInput.click();
    },

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
      if (this.myUserProfile.id !== userId || chatType !== "SINGLE_CAST") {
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

    openUserRequestDetails(requestId) {
      this.$router.push({
        path: "/userRequestDetails",
        query: {
          requestId: requestId,
        },
      });
    },

    openApplicationDetails(application) {
      this.activeApplication = application;
      this.dialogApplicationInfo = true;
    },

    deleteApplication(appId) {},

    resetApiKey() {
      const userPassword = this.userPassword;
      const email = this.myUserProfile.email;
      this.$store.dispatch("resetApiKey", {
        email: email,
        password: userPassword,
      });
      this.apiKeysheet = false;
    },

    saveCallbackUrl() {
      const formData = new FormData();
      formData.append("editSubject", "callbackURL");
      formData.append("editValue", this.myUserProfile.callbackURL);
      this.$store.dispatch("updateUserProfileValue", formData);
      this.apiKeysheet = false;
    },

    SwitchApiStatus() {
      const formData = new FormData();
      formData.append("editSubject", "apiStatus");
      formData.append("editValue", this.myUserProfile.apiStatus);
      this.$store.dispatch("updateUserProfileValue", formData);
      this.apiKeysheet = false;
    },

    updateApplicationCallbackURL(appId) {
      const formData = new FormData();
      formData.append("appId", appId);
      formData.append("callbackURL", this.activeApplication.callbackURL);
      this.$store.dispatch("updateApplicationCallbackURL", formData);
      this.dialogApplicationInfo = false;
    },
  },
};
</script>
