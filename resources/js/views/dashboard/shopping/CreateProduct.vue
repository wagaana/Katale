<template>
  <div class="container">
    <v-row>
      <v-col class="col-md-10 pr-md-1 sm-6">
        <h1 class="font-weight-light mb-2">Create New Product</h1>
        <span class="overline"
          >Fill out the form below to create a new Product</span
        >
      </v-col>
    </v-row>

    <v-stepper v-model="e1" class="py-2 pa-0">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"> Category </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Description
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Pricing </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" min-height="200px">
            <v-form ref="sendForm" v-model="valid" lazy-validation>
              <v-row class="row px-2">
                <v-col lg="6" cols="12" class="py-6">
                  <h2 class="title cyan--text hover">Category</h2>
                  <ShppingCategoryProvider
                    @setShoppingCategory="setShoppingCategory"
                  />
                  <div v-if="productCompose.categoryId != null">
                    <h2 class="title cyan--text hover">Brand</h2>
                    <ShoppingBrandProvider
                      @setBrand="setBrand"
                      :categoryId="productCompose.categoryId"
                    />
                  </div>
                </v-col>
                <v-col lg="6" cols="12" class="py-6">
                  <v-card-actions class="pa-5">
                    <h2 class="title cyan--text hover">Attributes</h2>

                    <v-btn
                      class="ml-auto"
                      @click="attributesProvider = true"
                      outlined
                      color="green"
                      v-if="productCompose.categoryId"
                      >New</v-btn
                    >
                  </v-card-actions>

                  <v-card
                    class="px-2 py-2"
                    v-if="productCompose.categoryId == null"
                  >
                    <div>
                      <TransactionsListLoader />
                      <TransactionsListLoader />
                    </div>
                  </v-card>

                  <v-card class="py-2 pa-0" v-if="productCompose.categoryId">
                    <v-data-table
                      :headers="headers"
                      :items="productCompose.productAttributes"
                      item-key="id"
                    >
                      <template v-slot:item="{ item }">
                        <tr>
                          <td>{{ item.title }}</td>
                          <td>{{ item.attribute_form }}</td>
                          <td>
                            <v-btn icon @click="deleteAttribute(item)">
                              <v-icon color="primary">mdi-delete</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </template>
                    </v-data-table>
                  </v-card>
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn color="primary" @click="finishCategoryConfig">
            Continue
          </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-form
            ref="descriptionForm"
            v-model="descriptionValid"
            lazy-validation
          >
            <v-card class="mb-12" min-height="200px">
              <v-row class="row px-2">
                <v-col lg="6" cols="12" class="py-6">
                  <v-text-field
                    v-model="productCompose.name"
                    label="product Label"
                    :rules="[rules.required]"
                    autocomplete="email"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="productCompose.short_description"
                    label="Short Description"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>

                  <v-textarea
                    v-model="productCompose.description"
                    label="product Description"
                    :rules="[rules.required]"
                    outlined
                    dense
                  />
                </v-col>

                <v-col lg="6" cols="12" class="py-6">
                  <v-text-field
                    v-model="productCompose.current_stock"
                    label="Items In Stock"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="productCompose.minimum_order_quantity"
                    label="Min Order Qty"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="productCompose.low_stock_to_notify"
                    label="Low Stock Qty To notify"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>

                  <FilesEntry
                    label="Product Image"
                    @selectedFiles="selectedFiles"
                    class="pa-2"
                  />
                </v-col>
              </v-row>
            </v-card>

            <v-btn
              color="primary"
              :disabled="!descriptionValid"
              @click="validateDescriptionConfig"
            >
              Continue
            </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-form>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-form ref="pricingForm" v-model="pricingValid" lazy-validation>
            <v-card class="mb-12" min-height="200px">
              <v-row class="row px-2">
                <v-col lg="6" cols="12" class="py-6">
                  <v-text-field
                    v-model="productCompose.purchase_cost"
                    label="Cost Price"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col lg="6" cols="12" class="py-6">
                  <v-text-field
                    v-model="productCompose.price"
                    label="Sell Price"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="row px-2">
                <v-col lg="6" cols="12" class="py-6">
                  <v-checkbox
                    v-model="productCompose.is_featured"
                    label="Is Featured"
                    outlined
                    dense
                  ></v-checkbox>
                </v-col>

                <v-col lg="6" cols="12" class="py-6">
                  <v-text-field
                    v-model="productCompose.special_discount"
                    label="Discount"
                    :rules="[rules.required]"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="row px-2">
                <div class="col-md-6">
                  <v-text-field
                    v-model="productCompose.special_discount_start"
                    type="date"
                    id="startDate"
                    label="Discount Start Date"
                    outlined
                    dense
                  />
                </div>

                <div class="col-md-6">
                  <v-text-field
                    v-model="productCompose.special_discount_end"
                    type="date"
                    id="endDate"
                    label="Discount End Date"
                    outlined
                    dense
                  />
                </div>
              </v-row>
            </v-card>

            <v-btn
              color="primary"
              :disabled="!pricingValid"
              @click="validatePricingConfig"
            >
              Continue
            </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-form>
        </v-stepper-content>

        <v-dialog v-model="attributesProvider" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              Select Attributes
            </v-card-title>

            <v-card-text class="pa-5">
              <v-select
                v-model="attributeCompose.attribute_set_id"
                :rules="[rules.required]"
                :items="getShopingAttributeSets"
                label="Select Attribute"
                item-text="title"
                item-value="id"
                outlined
                dense
              >
              </v-select>

              <v-select
                v-model="attributeCompose.attribute_form"
                :rules="[rules.required]"
                :items="attribute_forms"
                label="Select Value Form"
                item-text="title"
                item-value="title"
                outlined
                dense
              >
              </v-select>
            </v-card-text>

            <v-card-actions class="pa-5">
              <v-btn @click="attributesProvider = false" outlined color="red"
                >Close</v-btn
              >
              <v-btn
                @click="addAttribute"
                class="ml-auto"
                outlined
                color="green"
                >Add New</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../utils/constants";

import ShppingCategoryProvider from "../../../components/ShppingCategoryProvider.vue";
import ShoppingBrandProvider from "../../../components/ShoppingBrandProvider.vue";
import ShoppingSubCategoryQueryParamProvider from "../../../components/ShoppingSubCategoryQueryParamProvider.vue";
import TransactionsListLoader from "../../../components/loaders/TransactionsListLoader.vue";
import FilesEntry from "../../../components/FilesEntry.vue";
import { json } from "d3";
export default {
  components: {
    ShppingCategoryProvider: ShppingCategoryProvider,
    ShoppingBrandProvider: ShoppingBrandProvider,
    TransactionsListLoader: TransactionsListLoader,
    ShoppingSubCategoryQueryParamProvider:
      ShoppingSubCategoryQueryParamProvider,
    FilesEntry: FilesEntry,
  },

  data() {
    return {
      e1: 1,
      pricingValid: false,
      descriptionValid: false,
      attributesProvider: false,
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      productCompose: {
        categoryId: null,
        brandId: 0,
        onDiscount: false,
        productAttributes: [],
      },
      selectedBrand: {},
      attributeCompose: {
        attribute_form: "",
      },
      isSubCategoryFinal: false,
      parameterSubCategory: {},
      lastShopingBrands: [],
      attribute_forms: [
        { title: "text" },
        { title: "color" },
        { title: "image" },
      ],
      headers: [
        { text: "Title", value: "title" },
        { text: "Form", value: "attribute_form" },
        { text: "Delete", value: "delete" },
      ],
    };
  },

  beforeCreate() {
    this.$store.dispatch("loadShopingAttributeSets");
  },

  computed: {
    ...mapState([
      "shopingBrands",
      "shopingBrandsModels",
      "shoppingQueryParameter",
      "shopingAttributeSets",
    ]),
    ...mapGetters([
      "messageAlert",
      "getShopingBrands",
      "getShopingBrandModels",
      "getShoppingQueryParameter",
      "uploadingProduct",
      "getShopingAttributeSets",
    ]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type,
        });
      }
    },

    uploadingProduct(val) {
      if (val != null) {
        this.$router.go(-1);
      }
    },
  },

  methods: {
    displayNotification(message) {
      if (message != null) {
        Vue.notify({
          group: "foo",
          title: message.title,
          text: message.body,
          type: message.type,
        });
      }
    },

    loadBrandModels(brandId) {
      this.$store.dispatch("fetchShopingBrandModels", brandId);
    },

    setShoppingCategory(categoryId) {
      this.productCompose.categoryId = categoryId;
      this.$store.dispatch(
        "fetchShopingBrands",
        this.productCompose.categoryId
      );
    },

    setBrand(brand) {
      this.selectedBrand = brand;
      this.isSubCategoryFinal = brand.isFinal == "true" ? true : false;
      this.productCompose.brandId = brand.id;
      if (!this.isSubCategoryFinal) {
        this.$store.dispatch("fetchShoppingQueryParameter", brand.id);
        this.$store.dispatch("fetchShopingSubCategoryBrands", brand.id);
      } else {
        this.$store.dispatch(
          "fetchShopingBrands",
          this.productCompose.categoryId
        );
      }
    },

    setQueryParameter(parameterSubCategory) {
      this.parameterSubCategory = parameterSubCategory;
      this.productCompose.subCategoryParameterId = parameterSubCategory.id;
    },

    finishCategoryConfig() {
      var goOn = true;
      if (this.productCompose.categoryId === null) {
        goOn = false;
        var message = {
          title: "Error",
          body: "Category is not set",
          type: "error",
        };
        this.displayNotification(message);
      }

      if (goOn) {
        this.e1 = 2;
      }
    },

    validateDescriptionConfig() {
      if (this.$refs.descriptionForm.validate()) {
        // send it
        this.finishDescriptionConfig();
      }
    },

    finishDescriptionConfig() {
      this.e1 = 3;
    },

    validatePricingConfig() {
      if (this.$refs.pricingForm.validate()) {
        // send it
        console.log(this.productCompose);
        this.createProduct(this.productCompose);
      }
    },

    createProduct(productCompose) {
      //send the message via API/server endpoint here
      this.productCompose.productAttributes = JSON.stringify(
        this.productCompose.productAttributes
      );
      this.$store.dispatch("submitProduct", productCompose);
    },

    addAttribute() {
      var attribute = {};
      const attributeCompose = this.attributeCompose;
      for (var mAttribute of this.getShopingAttributeSets) {
        if (mAttribute.id == attributeCompose.attribute_set_id) {
          attribute = mAttribute;
          attribute.attribute_form = attributeCompose.attribute_form;
        }
      }

      //send the message via API/server endpoint here
      var addAttr = true;
      for (var mAttribute of this.productCompose.productAttributes) {
        if (mAttribute.id == attribute.id) {
          addAttr = false;
        }
      }
      if (addAttr) {
        this.productCompose.productAttributes.push(attribute);
      }
      this.attributesProvider = false;
      this.attributeCompose = {};
    },

    deleteAttribute(attribute) {
      //send the message via API/server endpoint here
      var newAttributes = [];
      for (var mAttribute of this.productCompose.productAttributes) {
        if (mAttribute.id != attribute.id) {
          newAttributes.push(mAttribute);
        }
      }
      this.productCompose.productAttributes = newAttributes;
    },

    selectedFiles(file) {
      this.productCompose.image = JSON.stringify(file);
      this.productCompose.image_id = file.id;
    },
  },
};
</script>