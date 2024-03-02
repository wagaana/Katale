<template>
  <v-row>
    <v-col cols="12" sm="12" order-sm="2">
      <v-card elevation="1" class="py-5 px-2">
        <v-row class="py-2 px-2">
          <!--Photos-->
          <v-col cols="12" class="py-0">
            <v-row class="py-2 px-2">
              <v-col cols="12" sm="12" order="-1" order-sm="2">
                <h4 class="font-weight-light mb-0">Comments</h4>
                <p>Last conversations about this product.</p>
              </v-col>

              <v-col cols="12" sm="12" order="-1" order-sm="2">
                <v-card>
                  <v-row>
                    <v-col cols="12" offset-sm="0" sm="2">
                      <div class="text-center">
                        <v-avatar size="100">
                          <v-img
                            :src="`/${myUserProfile.profile_picture}`"
                            alt="avatar"
                          />
                        </v-avatar>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="9" class="pa-2">
                      <v-row>
                        <v-col cols="12" class="pa-2">
                          <h3 class="title">{{ myUserProfile.name }}</h3>
                        </v-col>
                        <v-col class="text-left pa-2" cols="12">
                          <form
                            @submit.prevent="handleCommentSubmit"
                            ref="form"
                          >
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
                                  rows="3"
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
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" order="-1" order-sm="2">
                <Comment
                  v-for="comment in getShoppingProductDiscussions"
                  :key="comment.id"
                  :data="comment"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Comment from "./Comment.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  template: "#page",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    Comment,
  },
  data: () => ({
    body: "",
  }),
  methods: {
    handleCommentSubmit() {
      this.$store
        .dispatch("submitShoppingProductDiscussion", {
          productId: this.$route.params.id,
          message: this.body,
        })
        .then(() => {
          this.body = "";
        })
        .catch((error) => error);
    },
  },

  created() {
    this.$store.dispatch("getMyProfile");
  },

  computed: {
    ...mapState(["shoppingProductDiscussions"]),
    ...mapGetters([
      "loadingForm",
      "myUserProfile",
      "getShoppingProductDiscussions",
    ]),
  },
};
</script>
