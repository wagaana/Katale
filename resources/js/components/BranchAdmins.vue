<template>
    <v-row class="py-2 px-2">
        <v-col cols="12" sm="12" order="-1" order-sm="2">
        <h4 class="font-weight-light mb-0">
            Admins
        </h4>
        </v-col>

        <v-col v-for="profile in getServicePointUsers" :key="profile.id" cols="12" sm="12" order="-1" order-sm="2">
        <v-card class="px-2 py-2">
            <v-row>
            <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
                <v-avatar size="60">
                <v-img class="card-img" :src="'/'+profile.profile_picture"></v-img>
                </v-avatar>
            </v-col>

            <v-col cols="12" sm="8">
                <v-row>
                <v-col cols="12">
                    <h2 class="title cyan--text hover">
                    {{ profile.name }}
                    </h2>
                    <p class="font-weight-light grey--text text--darken-1 body-2">
                    {{ profile.email }}
                    </p>
                </v-col>
                </v-row>
            </v-col>
            </v-row>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
    template: '#BranchAdmins',
    props: ["data"],
    data() {
      return {
        uploads: uploads,
        table: "",
      };
    },
    computed: {
      ...mapGetters([
        "getServicePointUsers",
      ]),
    },
    watch: {
    },
    methods: {
    },
};
</script>