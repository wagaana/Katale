<template>
  <v-container>
    <v-card @click="openFinderDialog" class="pa-2">
      <v-row>
        <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
          <v-avatar size="60">
            <v-img
              class="card-img"
              :src="
                activeCategory.imageUrl != null
                  ? `${uploads}${activeCategory.imageUrl}`
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
                  activeCategory.label != null
                    ? activeCategory.label
                    : "Select " + getShoppingQueryParameter.label
                }}
              </h2>
              <p
                class="font-weight-light grey--text text--darken-1 body-2"
                v-if="activeCategory.label != null"
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
            :label="`Search ${getShoppingQueryParameter.label}`"
            hide-details
            dense
            @change="searchShoppingCategories"
            outlined
          ></v-text-field>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-col
            v-for="category in getShopingChildSubCategories"
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
                    <v-img
                      class="card-img"
                      :src="`${uploads}${category.imageUrl}`"
                    ></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-row>
                    <v-col cols="12">
                      <h2 class="title cyan--text hover">
                        {{ category.label }}
                      </h2>
                      <p
                        class="
                          font-weight-light
                          grey--text
                          text--darken-1
                          body-2
                        "
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
  props: ["setQueryParameter", "parentId"],

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
    ...mapState(["shopingChildSubCategories", "shoppingQueryParameter"]),
    ...mapGetters([
      "getShopingChildSubCategories",
      "getShoppingQueryParameter",
    ]),
  },

  watch: {
    queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchShopingChildSubCategories", {
          query: val,
          parentId: this.parentId,
        });
      }
    },

    parentId(val) {
      if (val != null) {
        this.$store.dispatch("fetchShopingChildSubCategories", val);
        this.$store.dispatch("fetchShoppingQueryParameter", val);
      }
    },
  },

  mounted() {
    this.$store.dispatch("fetchShopingChildSubCategories", this.parentId);
    this.$store.dispatch("fetchShoppingQueryParameter", this.parentId);
  },

  methods: {
    openFinderDialog() {
      this.$store.dispatch("fetchShopingChildSubCategories", this.parentId);
      this.$store.dispatch("fetchShoppingQueryParameter", this.parentId);
      this.findCategories = true;
    },

    searchShoppingCategories() {
      this.$store.dispatch("searchShopingChildSubCategories", {
        query: this.queryText,
        parentId: this.parentId,
      });
    },

    openCategory(parameterSubCategory) {
      this.activeCategory = parameterSubCategory;
      this.findCategories = false;
      this.$emit("setQueryParameter", parameterSubCategory);
    },
  },
};
</script>
