<template>
  <v-row class="py-2 px-2">
    <v-col cols="12" sm="12" order="-1" order-sm="2">
      <v-card-actions class="pa-2">
        <FilesSelector label="Add Photo" @selectedFiles="selectedFiles" />
        <h4 class="ml-auto font-weight-light mb-0">Photos</h4>
      </v-card-actions>
    </v-col>

    <v-col cols="12" sm="12" order="-1" order-sm="2">
      <v-row class="px-4">
        <v-col
          cols="12"
          sm="4"
          order-sm="2"
          v-for="image in getShopingProductData.images"
          :key="image.id"
        >
          <v-card elevation="12">
            <v-img height="200px" :src="`${image.url}`" />

            <!------------------ DELETE IMAGE ------------------>
            <div>
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
                    @click="deleteImage(image.id)"
                    v-on="on"
                    dark
                  >
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Delete Image</span>
              </v-tooltip>
            </div>
            <!------------------ DELETE IMAGE ------------------>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="12" order="-1" order-sm="2" style="text-align: center">
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import FilesSelector from "../FilesSelector.vue";
export default {
  components: {
    FilesSelector: FilesSelector,
  },
  template: "#page",
  props: {
    getShopingProductData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    body: "",
    displayAllPictures: false,
  }),

  methods: {
    selectedFiles(file) {
      const formData = new FormData();
      formData.append("productId", this.$route.params.id);
      formData.append("image", JSON.stringify(file));
      this.$store.dispatch("submitProductPhoto", formData);
    },

    deleteImage(imageId) {
      const formData = new FormData();
      formData.append("productId", this.$route.params.id);
      formData.append("imageId", imageId);
      this.$store.dispatch("deleteProductPhoto", formData);
    },
  },

  created() {},

  computed: {},
};
</script>
