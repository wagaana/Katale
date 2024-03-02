<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h1 class="font-weight-light mb-0">Shopping</h1>
        <span class="overline">Manage Market Places</span>
        <v-card class="pa-3">
          <v-row class="row">
            <v-col lg="3" cols="12">
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
            <v-col lg="9" cols="12">
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
import {
  languages_options,
  countries,
  uploads,
  escapeHtml,
} from "../../utils/constants";

export default {
  data() {
    return {
      items: [
        {
          title: "Requests",
          icon: "mdi-cogs",
          href: "/admin/shopping/requests",
        },
        {
          title: "Products",
          icon: "mdi-account-multiple",
          href: "/admin/shopping/products",
        },
        {
          title: "Categories",
          icon: "mdi-database-settings-outline",
          href: "/admin/shopping/productsCategories",
        },
        {
          title: "Brands",
          icon: "mdi-database-settings-outline",
          href: "/admin/shopping/brands",
        },
        {
          title: "Attributes",
          icon: "mdi-database-settings-outline",
          href: "/admin/shopping/attributes",
        },
        {
          title: "Specifications",
          icon: "mdi-database-settings-outline",
          href: "/admin/shopping/specifications",
        },
        {
          title: "Sellers",
          icon: "mdi-account-multiple",
          href: "/admin/shopping/sellers",
        },
        {
          title: "Delivery Companies",
          icon: "mdi-account-multiple",
          href: "/admin/shopping/deliveryCompanies",
        },
        {
          title: "Settings",
          href: "/admin/shopping/settings",
          icon: "mdi-cog",
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
