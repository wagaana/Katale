<template>
  <v-card elevation="1" class="py-5 px-2">
    <v-row class="py-2 px-2">
      <!--Photos-->
      <v-col cols="12" sm="8" class="py-0" order="-1" order-sm="2">
        <ProductPhotos :getShopingProductData="data" />
      </v-col>

      <!--Hosts-->
      <v-col cols="12" sm="4" class="py-0" order="-1" order-sm="2">
        <ProductPublisher :data="data" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ProductPhotos from "./ProductPhotos.vue";
import ProductPublisher from "./ProductPublisher.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  template: "#page",
  components: {
    ProductPhotos: ProductPhotos,
    ProductPublisher: ProductPublisher,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    body: "",
  }),

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
  },
  beforeCreate() {
    // this.$store.dispatch("getMyProfile");
  },

  created() {},

  computed: {
    // ...mapGetters(["loadingForm", "myUserProfile"]),
  },
};
</script>
