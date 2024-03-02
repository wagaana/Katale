<template>
  <div class="container">
    <v-card class="pa-1">
      <v-row class="row pa-2">
        <v-col lg="8" cols="12">
          <router-view></router-view>
        </v-col>

        <v-col lg="4" cols="12">
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
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { languages_options, uploads } from "../../../utils/constants";

export default {
  data() {
    return {
      items: [
        {
          title: "General",
          icon: "mdi-cogs",
          href: "/admin/shopping/settings/generalSettings",
        },
        {
          title: "Collection Points",
          icon: "mdi-database-settings-outline",
          href: "/admin/shopping/settings/collectionPoints",
        },
        {
          title: "Suported Countries",
          icon: "mdi-earth",
          href: "/admin/shopping/settings/suportedCountries",
        },
        {
          title: "Suported Regions",
          icon: "mdi-flag",
          href: "/admin/shopping/settings/suportedRegions",
        },
        {
          title: "Suported Cities",
          icon: "mdi-map",
          href: "/admin/shopping/settings/suportedCities",
        },
        {
          title: "Package Samples",
          icon: "mdi-box",
          href: "/admin/shopping/settings/packageTypeOptions",
        },
        {
          title: "Shipping Config",
          icon: "mdi-account-multiple",
          href: "/admin/shopping/settings/shippingConfiguration",
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
