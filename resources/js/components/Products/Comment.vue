<template>
  <v-card class="py-1">
    <v-row>
      <v-col cols="12" sm="2" offset-sm="0">
        <div class="py-3 text-center">
          <v-avatar size="80">
            <v-img :src="`/${data.profile_picture}`" alt="avatar" />
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="12" sm="10">
        <div>
          <v-row>
            <v-col cols="12">
              <h3 @click="getUser" class="cyan--text hover">
                {{ data.name }}
              </h3>
              <p
                class="font-weight-light grey--text text--darken-1 body-2 mt-1"
              >
                {{ data.created_at | exactDay }}
              </p>
            </v-col>
            <v-col class="text-left" cols="12">
              <div class="font-weight-regular">
                {{ data.message }}
              </div>
            </v-col>
            <v-col cols="12" md="8"> </v-col>
            <v-col cols="12" md="4" class="center"> </v-col>

            <!-- replys starts -->
            <v-col cols="12" sm="12" order="-1" order-sm="2">
              <CommentReply :data="data.altComment" />
            </v-col>
            <!-- replys end -->

            <v-col v-if="addComment" cols="12" sm="12" order-sm="2">
              <!-- reply form starts -->
              <v-row>
                <v-col cols="4" offset-sm="0" sm="2">
                  <div class="text-center">
                    <v-avatar size="50">
                      <v-img
                        :src="`/${myUserProfile.profile_picture}`"
                        alt="avatar"
                      />
                    </v-avatar>
                  </div>
                </v-col>
                <v-col cols="8" sm="10" class="pa-2">
                  <v-row>
                    <v-col class="text-left pa-2" cols="12">
                      <form @submit.prevent="handleCommentSubmit" ref="form">
                        <v-row>
                          <v-col cols="12">
                            <v-textarea
                              label="Write a comment"
                              type="text"
                              required
                              v-model="body"
                              counter
                              outlined
                              :loading="loadingForm"
                              no-resize
                              color="#32BCC3"
                              rows="2"
                            >
                            </v-textarea>
                          </v-col>
                        </v-row>
                        <v-card-actions>
                          <div class="flex-grow-1"></div>
                          <v-btn
                            color="cyan darken-2"
                            :disabled="loadingForm"
                            text
                            @click="addComment = false"
                            small
                            >Cancel</v-btn
                          >
                          <v-btn
                            color="cyan darken-2"
                            :disabled="loadingForm"
                            text
                            @click="body = ''"
                            small
                            >Clear</v-btn
                          >
                          <v-btn
                            color="cyan darken-2"
                            :loading="loadingForm"
                            text
                            type="submit"
                            small
                            >Comment</v-btn
                          >
                        </v-card-actions>
                      </form>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- reply form ends -->
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-card-actions v-if="!addComment">
      <div class="flex-grow-1"></div>
      <v-btn
        color="cyan darken-2"
        :loading="loadingForm"
        text
        type="submit"
        small
        @click="addComment = true"
        >Comment</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from "vue";
import dayjs from "dayjs";
import CommentReply from "./CommentReply.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: val.title,
          text: val.body,
        });
        this.$store.dispatch("fetchItemDetails", {
          purpose: this.$route.query.purpose,
          itemID: this.$route.query.itemID,
        });
        this.$store.dispatch(
          "loadProductDiscussions",
          this.$route.query.itemID
        );
      }
    },
  },

  components: {
    CommentReply,
  },

  data: () => ({
    addComment: false,
    body: "",
  }),

  created() {
    this.$store.dispatch("getMyProfile");
  },

  computed: {
    ...mapState(["singleUserPosts"]),
    ...mapGetters([
      "loadingUI",
      "loadingForm",
      "myUserProfile",
      "newsAndEventDetails",
    ]),
  },

  methods: {
    getUser() {},

    handleCommentSubmit() {
      this.$store
        .dispatch("submitShoppingProductDiscussionReply", {
          productId: this.$route.params.id,
          message: this.body,
          discussionId: this.data.id,
        })
        .then(() => {
          this.body = "";
        })
        .catch((error) => error);
    },
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
  },
};
</script>
