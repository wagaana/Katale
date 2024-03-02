<template>
  <div class="container">
    <v-row>
      <v-col cols="12" sm="12" order="-1" order-sm="2">
        <v-card-actions class="pa-2">
          <FilesSelector label="Add Banner" @selectedFiles="selectedBanner" />
          <h4 class="ml-auto font-weight-light mb-0">Camaigns Banner</h4>
        </v-card-actions>
      </v-col>

      <v-col cols="12" sm="12" order="-1" order-sm="2">
        <v-card
          :style="{
            'background-image': `url(${getCamaignsBanner.url})`,
            'background-repeat': 'no-repeat',
            height: '100px',
            width: '100%',
            'background-size': 'cover',
          }"
        >
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" order="-1" order-sm="2">
        <v-card-actions class="pa-2">
          <FilesSelector label="Add Photo" @selectedFiles="selectedFiles" />
          <h4 class="ml-auto font-weight-light mb-0">Slider Images</h4>
        </v-card-actions>
      </v-col>

      <v-col cols="12" sm="12" order="-1" order-sm="2">
        <v-row class="px-2">
          <v-col
            cols="12"
            sm="4"
            order-sm="2"
            v-for="image in getSliderImages"
            :key="image.id"
          >
            <v-card elevation="4">
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
                      @click="deleteSliderImage(image.id)"
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
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../../utils/constants";
import FilesSelector from "../../../../components/FilesSelector.vue";

export default {
  components: {
    FilesSelector: FilesSelector,
  },

  data: () => ({
    uploads: uploads,
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState(["sliderImages", "camaignsBanner"]),
    ...mapGetters(["getSliderImages", "messageAlert", "getCamaignsBanner"]),
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
        this.$store.dispatch("fetchSliderImages");
        this.$store.dispatch("fetchCamaignsBanner");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchSliderImages");
    this.$store.dispatch("fetchCamaignsBanner");
  },

  methods: {
    selectedFiles(file) {
      const formData = new FormData();
      formData.append("fileId", file.id);
      this.$store.dispatch("submitSliderImage", formData);
    },

    deleteSliderImage(imageId) {
      this.$store.dispatch("deleteSliderImage", imageId);
    },

    selectedBanner(file) {
      const formData = new FormData();
      formData.append("fileId", file.id);
      this.$store.dispatch("submitCamaignsBanner", formData);
    },
  },
};
</script>
