<template>
  <v-container>
    <v-card @click="findCategories = true" class="pa-2">
      <v-row>
        <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
          <v-avatar size="60">
            <v-img
              class="card-img"
              :src="
                activeCategory.logo != null
                  ? `${activeCategory.logo}`
                  : '/images/logo.png'
              "
            ></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12">
              <h2 class="title cyan--text hover">
                {{
                  activeCategory.title != null
                    ? activeCategory.title
                    : "Select Category"
                }}
              </h2>
              <p
                class="font-weight-light grey--text text--darken-1 body-2"
                v-if="activeCategory.title != null"
              >
                Ads: {{ activeCategory.adsCount }}<br />
                {{ activeCategory.description }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="findCategories" width="500">
      <v-card>
        <v-card-title class="headline" primary-title>
          <v-text-field
            v-model="queryText"
            append-icon="mdi-shield-account"
            label="Search Categories"
            hide-details
            dense
            @change="searchShoppingCategories"
            outlined
          ></v-text-field>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-col
            v-for="category in getShopingCategories"
            :key="category.id"
            cols="12"
            sm="12"
            order="-1"
            order-sm="2"
          >
            <v-card @click="openCategory(category)" class="px-2 py-2">
              <v-row>
                <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
                  <v-avatar size="60">
                    <v-img class="card-img" :src="`${category.logo}`"></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-row>
                    <v-col cols="12">
                      <h2 class="title cyan--text hover">
                        {{ category.title }}
                      </h2>
                      <p
                        class="font-weight-light grey--text text--darken-1 body-2"
                      >
                        Ads: {{ category.adsCount }}<br />
                        {{ category.description }}
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
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
  props: ["setShoppingCategory"],

  data() {
    return {
      uploads: uploads,
      findCategories: false,
      queryText: "",
      activeCategory: {},
      valid: false,
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  computed: {
    ...mapState(["shopingCategories"]),
    ...mapGetters(["getShopingCategories"]),
  },

  beforeCreate() {
    this.$store.dispatch("loadShopingCategories");
  },

  watch: {
    queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchShoppingCategories", val);
      }
    },
  },

  methods: {
    searchShoppingCategories() {
      this.$store.dispatch("searchShoppingCategories", this.queryText);
    },

    openCategory(category) {
      this.activeCategory = category;
      this.findCategories = false;
      this.$emit("setShoppingCategory", category.id);
    },
  },
};
</script>
