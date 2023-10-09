<template>
    <v-row class="py-0 px-0">
        <v-slide-group class="pa-4" multiple show-arrows>
            <v-slide-item v-for="photo in data" :key="photo.id">
                <v-card elevation="12" class="ma-4" height="200" width="200">
                    <v-img height="200" :src="`${uploads}${photo.message}`" />
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-row>
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
