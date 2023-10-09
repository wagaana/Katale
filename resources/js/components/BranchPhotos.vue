<template>
    <v-row class="py-2 px-2">
        <v-col cols="12" sm="12" order="-1" order-sm="2">
        <h4 class="font-weight-light mb-0">
            Photos
        </h4>
        </v-col>

        <v-col cols="12" sm="12" order="-1" order-sm="2">
        <v-row class="px-4">
            <v-col
            cols="12"
            sm="4"
            order-sm="2"
            v-for="photo in data.gallery"
            :key="photo.id"
            >
            <v-card elevation="12">
                <v-img height="200px" :src="'/'+photo.imageUrl" />
            </v-card>
            </v-col>
        </v-row>
        </v-col>

        <v-col
        cols="12"
        sm="12"
        order="-1"
        order-sm="2"
        style="text-align: center;"
        >
        <span align="center" class="overline" @click="displayAllPictures = true"
            ><a>Go to all photos</a></span
        >
        <v-divider></v-divider>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
    template: '#BranchPhotos',
    props: ["data"],
    data() {
      return {
        uploads: uploads,
        displayAllPictures: false,
        table: "",
      };
    },
    computed: {
      ...mapGetters([]),
    },
    watch: {
      campaignTarget(val) {
        if (val !== null) {
          console.log(val);
          this.params = val;
        }
      },
    },
    methods: {
      ...mapActions([]),
    },
};
</script>