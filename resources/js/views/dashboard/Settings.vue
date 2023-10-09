<template>
    <div class="container">
        <v-row>
            <v-col cols="12" class="py-0">
                <h1 class="font-weight-light mb-0">Settings</h1>
                <span class="overline">Manage system Settings</span>
                <v-card class="py-6">
                    <v-row class="row px-2">
                        <v-col lg="3" cols="12" class="py-6">
                            <v-card>
                                <v-list dense nav>
                                    <v-list-item
                                        v-for="item in items"
                                        :key="item.title"
                                        link
                                        :to="item.href"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>{{
                                                item.title
                                            }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                        <v-col lg="9" cols="12" class="py-6">
                            <router-view></router-view>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { languages_options, uploads } from "../../utils/constants";

export default {
    data() {
        return {
            items: [
                {
                    title: "General",
                    icon: "mdi-cogs",
                    href: "/admin/settings/generalSettings",
                },
                {
                    title: "Service Points",
                    icon: "mdi-database-settings-outline",
                    href: "/admin/settings/myServicePoints",
                },
                {
                    title: "Suported Countries",
                    icon: "mdi-flag",
                    href: "/admin/settings/suportedCountries",
                },
                {
                    title: "Currencies",
                    icon: "mdi-currency-usd",
                    href: "/admin/settings/suportedCurrencies",
                },
                {
                    title: "Sys Users",
                    icon: "mdi-account-multiple",
                    href: "/admin/settings/sysUsers",
                },
            ],
        };
    },

    beforeCreate() {},

    computed: {
        ...mapState([]),
        ...mapGetters([]),
    },
};
</script>
