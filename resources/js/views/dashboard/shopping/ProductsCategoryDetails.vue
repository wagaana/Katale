<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h2 class="font-weight-light mb-0">
          {{ getShoppingCategory.title }}
        </h2>
        <span class="overline"> {{ getShoppingCategory.description }}</span>
      </v-col>

      <v-col cols="12" sm="12" order-sm="2">
        <v-card elevation="10">
          <v-row class="px-4">
            <v-col class="col-md-10 pr-md-1">
              <p class="font-weight-light">
                <v-icon color="primary"
                  >mdi-checkbox-marked-circle-outline</v-icon
                >
                <span class="overline">{{
                  getShoppingCategory.status === 1 ? "Active" : "Inactive"
                }}</span>
              </p>
            </v-col>
            <v-col class="col-md-2 pr-md-1 fill-width">
              <v-btn
                @click="ChagePaymentMethodStatus"
                color="primary"
                class="font-weight-light"
              >
                {{
                  getShoppingCategory.status === 1 ? "Deactivate" : "Activate"
                }}
              </v-btn>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="px-4">
            <v-col cols="12" sm="4" order-sm="2">
              <v-card min-width="150" elevation="12">
                <v-img
                  v-if="getShoppingCategory.logo"
                  :src="`${getShoppingCategory.logo}`"
                />
              </v-card>
            </v-col>

            <v-col cols="12" sm="8" order-sm="2">
              <v-card
                min-height="300"
                min-width="150"
                elevation="1"
                class="py-2"
              >
                <v-row>
                  <v-col cols="12" sm="6" order="-1" order-sm="2">
                    <v-row>
                      <v-col cols="12" class="py-2">
                        <h4 class="font-weight-bold mb-0">Statistics</h4>
                      </v-col>
                      <v-col cols="12" class="py-2">
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-currency-eur</v-icon>Ads:
                          {{ getShoppingCategory.adsCount }}
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-currency-eur</v-icon
                          >views:
                          {{ getShoppingCategory.views }}
                        </p>

                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-calendar</v-icon>
                          {{ getShoppingCategory.created_at }}
                        </p>

                        <v-switch
                          v-model="getShoppingCategory.is_featured"
                          @change="switchCategoryFeaturedStatus"
                          inset
                          label="Is Featured"
                          outlined
                          dense
                        />
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" sm="6" order="-1" order-sm="2">
                    <v-row>
                      <v-col cols="12" class="py-2">
                        <h4 class="font-weight-bold mb-0">Suport</h4>
                      </v-col>
                      <v-col cols="12" class="py-2">
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-account</v-icon>
                          {{ getShoppingCategory.suport_name }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_name',
                                'Suport Name',
                                getShoppingCategory.suport_name || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-phone</v-icon>
                          {{ getShoppingCategory.suport_phone }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_phone',
                                'Suport Phone',
                                getShoppingCategory.suport_phone || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-at</v-icon>
                          {{ getShoppingCategory.suport_email }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_email',
                                'Suport Email',
                                getShoppingCategory.suport_email || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-bold">
                          <v-icon color="primary">mdi-web</v-icon>
                          {{ getShoppingCategory.suport_website }}
                          <a
                            @click="
                              OpenEditModule(
                                'suport_website',
                                'Suport Website',
                                getShoppingCategory.suport_website || 0.0
                              )
                            "
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p>
                          <a
                            class="font-weight-bold"
                            target="__BLANK"
                            :href="`https://www.google.com/maps/search/?api=1&query=${getShoppingCategory.latitude}%2C${getShoppingCategory.longitude}`"
                          >
                            <v-icon color="primary">mdi-map</v-icon>
                            Get Directions
                          </a>
                          <a @click="OpenEditConfigLocation"
                            ><v-icon color="primary">mdi-pencil</v-icon></a
                          >
                        </p>
                        <p class="font-weight-light">
                          {{ data.address }}
                        </p>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <v-divider></v-divider>

        <v-row>
          <v-col class="col-md-7 pr-md-1 sm-2" cols="12" sm="12">
            <v-card class="py-1 pa-0">
              <v-card-actions class="pa-3">
                <h1 class="font-weight-light mb-2">Products</h1>

                <v-btn
                  to="/admin/shopping/createProduct"
                  class="ml-auto"
                  outlined
                  rounded
                  color="primary"
                  >Add New</v-btn
                >
              </v-card-actions>

              <v-card class="py-2 pa-0">
                <v-data-table
                  :headers="product_headers"
                  :items="getProducts"
                  item-key="id"
                >
                  <template v-slot:item="{ item }">
                    <tr @click="displayProduct(item)">
                      <td>
                        <img
                          :src="`${item.thumbnail}`"
                          width="30px"
                          height="30px"
                        />
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.short_description }}</td>
                      <td>{{ item.created_at }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-card>
          </v-col>

          <v-col class="col-md-5 pr-md-1 sm-2" order-sm="2">
            <v-card class="py-1 pa-0">
              <v-card-actions class="pa-3">
                <h1 class="font-weight-light mb-2">Sub Categories</h1>

                <v-btn
                  class="ml-auto"
                  @click="dialogSubCategoryCompose = true"
                  color="primary"
                  outlined
                  rounded
                  >Add New</v-btn
                >
              </v-card-actions>

              <v-card class="py-2 pa-0">
                <v-data-table
                  :headers="headers"
                  :items="getShopingSubCategories"
                  item-key="id"
                >
                  <template v-slot:item="{ item }">
                    <tr @click="displaySubCategory(item)">
                      <td>
                        <img :src="`${item.logo}`" width="30px" height="30px" />
                      </td>
                      <td>{{ item.title }}</td>
                      <td>{{ item.description }}</td>
                      <td>{{ item.created_at }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialogEditConfig" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>{{ `Edit ${activeFieldLabel}` }}</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="activeFieldValue"
                :label="`${activeFieldLabel} Value`"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-2">
              <v-btn
                class="ml-auto"
                @click="dialogEditConfig = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="updateConfig">Update</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="viewSubCategoryProfile" width="500">
          <v-card>
            <v-card-title class="headline" primary-title>
              {{ activeSubCategory.title }}
            </v-card-title>

            <v-card-title>
              <v-img :src="`${activeSubCategory.logo}`" height="200px" />
            </v-card-title>

            <v-card-text class="pa-5">
              <p>
                {{ activeSubCategory.description }}
              </p>
              <p>
                ADS: {{ activeSubCategory.adsCount }}
                <br />
                VIEWS: {{ activeSubCategory.views }}
                <br />
                DATE: {{ activeSubCategory.created_at }}
              </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-5">
              <v-btn
                class="ml-auto"
                color="red"
                @click="deleteSubCategory(activeSubCategory)"
                outlined
                >Delete</v-btn
              >
              <v-btn
                color="primary"
                :disabled="isSubCategoryFinal"
                :to="`/admin/shopping/productsCategories/${activeSubCategory.id}`"
                >Configure</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="viewProduct" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              {{ activeProduct.name }}
            </v-card-title>

            <v-card-title>
              <v-img :src="`${activeProduct.thumbnail}`" width="350px" />
            </v-card-title>

            <v-card-text class="pa-5">
              <p>
                {{ activeProduct.description }}
              </p>
              <p>
                Cost Price: {{ activeProduct.purchase_cost }}
                <br />
                Sell Price: {{ activeProduct.price }}
                <br />
                Is Featured: {{ activeProduct.is_featured }}
                <br />
                DATE: {{ activeProduct.created_at }}
              </p>
            </v-card-text>
            <v-card-actions class="pa-5">
              <v-btn color="red" @click="deleteProduct(activeProduct)" outlined
                >Delete</v-btn
              >
              <v-btn
                class="ml-auto"
                @click="viewProduct = false"
                outlined
                color="green"
                >Close</v-btn
              >
              <v-btn
                :to="`/admin/shopping/products/${
                  activeProduct.id === undefined ? '' : activeProduct.id
                }`"
                outlined
                color="primary"
                >Details</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogEditConfigLocation" width="400">
          <v-card>
            <v-card-title class="headline" primary-title>
              <h2>Edit Suport Location</h2>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="getShoppingCategory.latitude"
                label="Latitude"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="getShoppingCategory.longitude"
                label="Longitude"
                outlined
                dense
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-2">
              <v-btn
                class="ml-auto"
                @click="dialogEditConfigLocation = false"
                outlined
                color="primary"
                >Close</v-btn
              >
              <v-btn color="primary" @click="updateLocationConfig"
                >Update</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogSubCategoryCompose" width="500">
          <v-card>
            <v-card-title class="headline black" primary-title>
              New Sub Category
            </v-card-title>

            <v-card-text class="pa-2">
              <v-form ref="sendForm" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="subCategoryCompose.title"
                  label="Category Label"
                  :rules="[rules.required]"
                  autocomplete="email"
                  outlined
                  dense
                ></v-text-field>

                <v-textarea
                  v-model="subCategoryCompose.description"
                  label="Category Description"
                  :rules="[rules.required]"
                  outlined
                  dense
                />

                <FilesEntry
                  label="Category Icon"
                  @selectedFiles="selectedFiles"
                  class="pa-2"
                />
              </v-form>
            </v-card-text>

            <v-card-actions class="pa-5">
              <v-btn
                class="ml-auto"
                @click="dialogCompose = false"
                outlined
                color="primary"
                >Cancel</v-btn
              >
              <v-btn color="primary" :disabled="!valid" @click="validate"
                >Add Category</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../utils/constants";
import FilesEntry from "../../../components/FilesEntry.vue";

export default {
  components: {
    FilesEntry: FilesEntry,
  },
  data: () => ({
    data: {},
    dialogEditConfig: false,
    dialogSubCategoryCompose: false,
    dialogEditConfigLocation: false,
    activeFieldLabel: "",
    activeField: "",
    activeFieldValue: "",
    subCategoryCompose: {},
    brandCompose: {},
    getDeliveryRequestDetails: {},
    activeSubCategory: {},
    activeProduct: {},
    viewSubCategoryProfile: false,
    viewProduct: false,
    valid: false,
    brandValid: false,
    queryParameterValid: false,
    isSubCategoryFinal: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      { text: "Icon", value: "imageUrl" },
      {
        text: "Label",
        align: "left",
        sortable: false,
        value: "label",
      },
      { text: "Description", value: "description" },
      { text: "Date Added", value: "created_at" },
    ],
    product_headers: [
      { text: "Icon", value: "imageUrl" },
      {
        text: "Label",
        align: "left",
        sortable: false,
        value: "label",
      },
      { text: "Description", value: "short_description" },
      { text: "Date Added", value: "created_at" },
    ],
    query_param_headers: [
      {
        text: "Brand Label",
        align: "left",
        sortable: false,
        value: "label",
      },
      { text: "Date Added", value: "created_at" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("fetchShoppingCategory", this.$route.params.id);
    this.$store.dispatch("fetchShopingSubCategories", this.$route.params.id);
    this.$store.dispatch("loadCategoryProducts", this.$route.params.id);
  },

  computed: {
    ...mapState(["shopingSubCategories", "shoppingCategory", "products"]),
    ...mapGetters([
      "getShoppingCategory",
      "getShopingSubCategories",
      "messageAlert",
      "getProducts",
    ]),
  },

  created() {},

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("fetchShoppingCategory", this.$route.params.id);
        this.$store.dispatch(
          "fetchShopingSubCategories",
          this.$route.params.id
        );
        this.$store.dispatch("loadCategoryProducts", this.$route.params.id);
      }
    },
  },

  methods: {
    updateConfig() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        bankCode: this.$route.params.id,
      });
      this.dialogEditConfig = false;
    },

    updateLocationConfig() {
      this.$store.dispatch("updateBankLocationConfig", {
        latitude: this.getShoppingCategory.latitude,
        longitude: this.getShoppingCategory.longitude,
        bankCode: this.$route.params.id,
      });
      this.dialogEditConfigLocation = false;
    },

    OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },

    OpenEditConfigLocation() {
      this.dialogEditConfigLocation = true;
    },

    displaySubCategory(subCategory) {
      this.activeSubCategory = subCategory;
      this.viewSubCategoryProfile = true;
      this.isSubCategoryFinal = subCategory.isFinal == "true" ? true : false;
    },

    displayProduct(product) {
      this.activeProduct = product;
      this.viewProduct = true;
    },

    ChagePaymentMethodStatus() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: "status",
        activeFieldLabel: "Status",
        activeFieldValue:
          this.getShoppingCategory.status === "active"
            ? "not active"
            : "active",
        bankCode: this.$route.params.id,
      });
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createSubCategory(this.subCategoryCompose);
      }
    },

    createSubCategory(subCategoryCompose) {
      this.dialogSubCategoryCompose = false;

      subCategoryCompose["parent_id"] = this.$route.params.id;
      this.$store.dispatch("submitShopingCategory", subCategoryCompose);
    },

    deleteSubCategory(activeCategory) {
      this.$store.dispatch("deleteShopingCategory", activeCategory.id);
      this.viewSubCategoryProfile = false;
    },

    switchCategoryFeaturedStatus() {
      this.$store.dispatch("switchCategoryFeaturedStatus", {
        categoryId: this.getShoppingCategory.id,
        is_featured: this.getShoppingCategory.is_featured,
      });
    },

    selectedFiles(file) {
      this.subCategoryCompose.image = JSON.stringify(file);
      this.subCategoryCompose.logo_id = file.id;
    },
  },
};
</script>
