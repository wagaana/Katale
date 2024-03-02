<template>
  <v-container>
    <v-card @click="findCategories = true" class="pa-2">
      <v-row>
        <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
          <v-avatar size="60">
            <v-img
              class="card-img"
              :src="
                activeBrand.logo != null
                  ? `${activeBrand.logo}`
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
                  activeBrand.title != null ? activeBrand.title : "Select Brand"
                }}
              </h2>
              <p
                class="font-weight-light grey--text text--darken-1 body-2"
                v-if="activeBrand.title != null"
              >
                Ads: {{ activeBrand.adsCount }}<br />
                {{ activeBrand.description }}
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
            v-for="brand in getShopingBrands"
            :key="brand.id"
            cols="12"
            sm="12"
            order="-1"
            order-sm="2"
          >
            <v-card @click="openBrand(brand)" class="px-2 py-2">
              <v-row>
                <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
                  <v-avatar size="60">
                    <v-img class="card-img" :src="`${brand.logo}`"></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-row>
                    <v-col cols="12">
                      <h2 class="title cyan--text hover">
                        {{ brand.title }}
                      </h2>
                      <p
                        class="font-weight-light grey--text text--darken-1 body-2"
                      >
                        Ads: {{ brand.adsCount }}<br />
                        {{ brand.description }}
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
  props: ["setBrand", "categoryId"],

  data() {
    return {
      uploads: uploads,
      findCategories: false,
      queryText: "",
      activeBrand: {},
      valid: false,
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  computed: {
    ...mapState(["shopingBrands"]),
    ...mapGetters(["getShopingBrands"]),
  },

  watch: {
    queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchShopingSubCategories", {
          query: val,
          categoryId: this.categoryId,
        });
      }
    },

    categoryId(val) {
      if (val != null) {
        this.$store.dispatch("loadShopingBrands", val);
      }
    },
  },

  mounted() {
    this.$store.dispatch("loadShopingBrands", this.categoryId);
  },

  methods: {
    openFinderDialog() {
      this.$store.dispatch("loadShopingBrands", this.categoryId);
      this.findCategories = true;
    },

    searchShoppingCategories() {
      this.$store.dispatch("searchShopingSubCategories", {
        query: this.queryText,
        categoryId: this.categoryId,
      });
    },

    openBrand(brand) {
      this.activeBrand = brand;
      this.findCategories = false;
      this.$emit("setBrand", brand);
    },
  },
};
</script>
