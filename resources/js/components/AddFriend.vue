<template>
    <v-container>
        <v-row>
            <v-btn
                @click="findFriendsDialog = true"
                outlined
                rounded
                color="primary"
            >
                Add New
            </v-btn>

            <v-dialog v-model="findFriendsDialog" width="500">
                <v-card>
                    <v-card-title class="headline" primary-title>
                        <v-text-field
                            v-model="queryText"
                            append-icon="mdi-shield-account"
                            label="Find Friends"
                            hide-details
                            dense
                            @change="searchUsers"
                            outlined
                        ></v-text-field>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>
                        <v-col
                            v-for="profile in getUserSearch"
                            :key="profile.id"
                            cols="12"
                            sm="12"
                            order="-1"
                            order-sm="2"
                        >
                            <v-card
                                @click="openUserPublicProfile(profile.id)"
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
                                                :src="`${uploads}${profile.profile_picture}`"
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>

                                    <v-col cols="12" sm="8">
                                        <v-row>
                                            <v-col cols="12">
                                                <h2
                                                    class="title cyan--text hover"
                                                >
                                                    {{ profile.name }}
                                                </h2>
                                                <p
                                                    class="font-weight-light grey--text text--darken-1 body-2"
                                                >
                                                    @{{ profile.user_name }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
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
            findFriendsDialog: false,
            queryText: "",
        };
    },

    computed: {
        ...mapState(["userSearch"]),
        ...mapGetters(["getUserSearch"]),
    },

    watch: {
        queryText(val) {
            if (val != null) {
                this.$store.dispatch("searchUsers", val);
            }
        },
    },

    methods: {
        searchUsers() {
            this.$store.dispatch("searchUsers", this.queryText);
        },

        openUserPublicProfile(userId) {
            this.$router.push({
                path: "/userPublicProfile",
                query: {
                    userIndex: userId,
                },
            });
        },
    },
};
</script>
