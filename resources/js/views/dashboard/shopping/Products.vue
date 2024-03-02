<template>
  <div class="container">
    <v-row>
      <v-col class="col-md-10 pr-md-1 sm-6">
        <h1 class="font-weight-light mb-2">Products</h1>
        <span class="overline">Manage Products here</span>
      </v-col>

      <v-col class="col-md-2 pr-md-1 fill-width">
        <v-btn to="/admin/shopping/createProduct" class="primary">New</v-btn>
      </v-col>
    </v-row>

    <v-card class="py-2 pa-0">
      <v-data-table :headers="headers" :items="getProducts" item-key="id">
        <template v-slot:item="{ item }">
          <tr @click="loadCategory(item)">
            <td>
              <img :src="`${item.thumbnail}`" width="30px" height="30px" />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.short_description }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialogAddProduct" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          New Product
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="sendForm" v-model="valid" lazy-validation>
            <v-text-field
              v-model="productCompose.label"
              label="product Label"
              :rules="[rules.required]"
              autocomplete="email"
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

            <v-select
              v-model="productCompose.categoryId"
              :items="getShoppingCategories"
              label="Select Category"
              item-text="label"
              item-value="id"
              outlined
              dense
              @change="loadSubCategories(productCompose.categoryId)"
            >
            </v-select>

            <v-select
              v-model="productCompose.subCategoryId"
              v-if="productCompose.categoryId"
              :items="getShopingSubCategories"
              label="Select Sub Category"
              item-text="label"
              item-value="id"
              outlined
              dense
            >
            </v-select>

            <v-select
              v-model="productCompose.brandId"
              v-if="productCompose.subCategoryId"
              :items="getShopingBrands"
              label="Select Brand"
              item-text="label"
              item-value="id"
              outlined
              dense
              @change="loadBrandModels(productCompose.brandId)"
            >
            </v-select>

            <v-select
              v-model="productCompose.brandModel"
              v-if="productCompose.brandId"
              :items="getShopingBrandModels"
              label="Select Brand Model"
              item-text="label"
              item-value="id"
              outlined
              dense
            >
            </v-select>

            <v-text-field
              v-model="productCompose.costPrice"
              label="Cost Price"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="productCompose.sellPrice"
              label="Sell Price"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-checkbox
              v-model="productCompose.onDiscount"
              label="On Discount"
              outlined
              dense
            ></v-checkbox>

            <v-text-field
              v-model="productCompose.discountPrice"
              label="Discount Price"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="productCompose.itemsInStock"
              label="Items In Stock"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="productCompose.maxOrder"
              label="Max Order Qty"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="productCompose.minOrder"
              label="Min Order Qty"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-file-input
              v-model="productCompose.image"
              label="Product Image"
              :rules="[rules.required]"
              outlined
              dense
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogAddProduct = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Add Product</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="viewShopingProduct" width="400">
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
            @click="viewShopingProduct = false"
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
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data: () => ({
    file: null,
    countries: countries,
    uploads: uploads,
    escapeHtml: escapeHtml,
    productCompose: {},
    activeProduct: {},
    composeMessage: {},
    dialogAddProduct: false,
    dialogComposeEmail: false,
    viewShopingProduct: false,
    valid: false,
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
      { text: "Description", value: "short_description" },
      { text: "Date Added", value: "created_at" },
    ],
    systemUserLevels: [
      { id: "OWNER", label: "System Owner" },
      { id: "EDITOR", label: "System Editor" },
      { id: "VIEWER", label: "System Viewer" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("fetchShoppingCategories");
  },

  computed: {
    ...mapState([
      "products",
      "shoppingCategories",
      "shopingSubCategories",
      "shopingBrands",
      "shopingBrandsModels",
    ]),
    ...mapGetters([
      "getProducts",
      "messageAlert",
      "getShoppingCategories",
      "getShopingSubCategories",
      "getShopingBrands",
      "getShopingBrandModels",
    ]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("loadProducts");
      }
    },
  },

  methods: {
    loadSubCategories(categoryId) {
      this.$store.dispatch("fetchShopingSubCategories", categoryId);
      this.$store.dispatch("fetchShopingBrands", categoryId);
    },
    loadBrandModels(brandId) {
      this.$store.dispatch("fetchShopingBrandModels", brandId);
    },
    loadCategory(activeProduct) {
      this.activeProduct = activeProduct;
      this.viewShopingProduct = true;
    },

    deleteProduct(activeProduct) {
      this.$store.dispatch("deleteProduct", activeProduct.id);
      this.viewShopingProduct = false;
    },

    composeEmail(user) {
      this.viewShopingProduct = false;
      this.dialogComposeEmail = true;
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.productCompose);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createProduct(this.productCompose);
      }
    },

    createProduct(productCompose) {
      //send the message via API/server endpoint here
      this.dialogAddProduct = false;

      this.$store.dispatch("submitShopingProduct", productCompose);
    },
  },
};
</script>
