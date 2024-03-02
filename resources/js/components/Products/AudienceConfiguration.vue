<template>
  <div>
    <v-row class="px-0">
      <!--time and venue-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--time-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-alarm</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-bold">
                  {{ getSafePostAudience.created_at | exactDay }}
                </p>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <v-switch
                  v-model="isDefault"
                  @change="
                    switchSafePostAudienceDefaultStatus(getSafePostAudience)
                  "
                  inset
                  label="Is Default"
                  outlined
                  dense
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <!--time and venue-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--time-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-account-multiple</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-bold">
                  @{{ getSafePostAudience.user_name }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  props: {
    getSafePostAudience: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    body: "",
    isDefault: false,
  }),

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
  },

  watch: {
    getSafePostAudience(val) {
      if (val != null) {
        this.isDefault = val.isDefault == "false" ? false : true;
      }
    },
  },

  methods: {
    handleCommentSubmit() {
      this.$store
        .dispatch("SUBMIT_COMMENT", {
          screamId: this.screamId,
          comment: {
            body: this.body,
          },
        })
        .then(() => {
          this.body = "";
        })
        .catch((error) => error);
    },

    switchSafePostAudienceDefaultStatus(getSafePostAudience) {
      this.$store.dispatch("switchSafePostAudienceDefaultStatus", {
        audienceId: getSafePostAudience.id,
        isDefault: this.isDefault,
      });
    },
  },
  beforeCreate() {
    // this.$store.dispatch("getMyProfile");
  },

  computed: {
    ...mapGetters(["getSystemSettings"]),
  },
};
</script>
