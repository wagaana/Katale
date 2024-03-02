<template>
  <v-row>
    <v-col cols="12" class="py-0">
      <h2 class="font-weight-light mb-0">
        {{ getProductDetails.name }}
      </h2>
      <span class="overline">{{ getProductDetails.short_description }}</span>
    </v-col>

    <v-col cols="12" sm="12" order-sm="2">
      <v-card elevation="10">
        <v-row class="px-4">
          <v-col class="col-md-10 pr-md-1">
            <p class="font-weight-light">
              <v-icon color="primary"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <!-- You attended this event -->
            </p>
          </v-col>
          <v-col class="col-md-2 pr-md-1 fill-width">
            <v-btn
              @click="dialogUploadImages = true"
              color="primary"
              class="font-weight-light"
              >post photos</v-btn
            >
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="px-4">
          <v-col cols="12" sm="4" order-sm="2">
            <v-card min-width="150" elevation="12">
              <v-img :src="`${getProductDetails.thumbnail}`" />
            </v-card>
          </v-col>

          <v-col cols="12" sm="8" order-sm="2">
            <v-card min-height="300" min-width="150" elevation="1" class="py-2">
              <ProductConfiguration :data="getProductDetails" />

              <v-row class="px-4">
                <v-col cols="12" class="py-2">
                  <h4 class="font-weight-bold mb-0">
                    {{ getProductDetails.name }}
                  </h4>
                </v-col>
                <v-col cols="12" class="py-2">
                  <div v-html="getProductDetails.description"></div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12" sm="12" order-sm="2">
      <ProductPhotosAndHosts :data="getProductDetails" />
    </v-col>

    <v-col cols="12" sm="12" order-sm="2">
      <v-row class="px-1">
        <v-col
          class="col-md-4 pr-md-1 sm-2"
          cols="12"
          v-for="attribute_set in getProductDetails.attribute_sets"
          :key="attribute_set.id"
        >
          <v-card class="py-1 pa-0">
            <v-row class="px-4">
              <v-col class="col-md-7 pr-md-1 sm-6">
                <h1 class="font-weight-light mb-2">
                  {{ attribute_set.title }}
                </h1>
              </v-col>

              <v-col
                class="col-md-5 pr-md-1 fill-width sm-6"
                cols="12"
                sm="12"
                order-sm="2"
              >
                <v-btn
                  @click="openAddAttributeOptionDialog(attribute_set)"
                  outlined
                  rounded
                  color="primary"
                  >Add New</v-btn
                >
              </v-col>
            </v-row>

            <v-card class="py-2 pa-0">
              <v-data-table
                :items="getProductAttributeSetAtributes(attribute_set.id)"
                item-key="id"
              >
                <template v-slot:item="{ item }">
                  <tr
                    @click="
                      displayShopingProductAttributeOption(item, attribute_set)
                    "
                  >
                    <td v-if="item.attribute_form !== 'image'">
                      {{ item.value }}
                    </td>

                    <td v-else>
                      <v-img
                        :src="
                          item.value != null
                            ? `${item.value}`
                            : '/images/default/default-image-40x40.png'
                        "
                        height="30"
                        width="30"
                      />
                    </td>
                    <td>{{ item.label }}</td>

                    <td>{{ item.price }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-col>

        <v-col class="col-md-4 pr-md-1 sm-2" cols="12">
          <v-card class="py-1 pa-0">
            <v-row class="px-4">
              <v-col class="col-md-7 pr-md-1 sm-6">
                <h1 class="font-weight-light mb-2">Specs</h1>
              </v-col>

              <v-col
                class="col-md-5 pr-md-1 fill-width sm-6"
                cols="12"
                sm="12"
                order-sm="2"
              >
                <v-btn
                  @click="dialogAddSpecifications = true"
                  outlined
                  rounded
                  color="primary"
                  >Add New</v-btn
                >
              </v-col>
            </v-row>

            <v-card class="py-2 pa-0">
              <v-data-table
                :items="getShopingProductSpecifications"
                item-key="id"
              >
                <template v-slot:item="{ item }">
                  <tr @click="displaySpecificationsModel(item)">
                    <td>{{ item.title }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="12" order-sm="2">
      <CommentsAndReplys
        :data="getProductDetails"
        v-if="
          getProductDetails.id !== undefined || getProductDetails.id !== null
        "
      />
    </v-col>

    <v-dialog v-model="dialogAddAttributeOption" width="400">
      <v-card>
        <v-card-title class="headline black" primary-title>
          Add Product {{ activeAttribute.title }} Option
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form
            ref="productAttributeOptionForm"
            v-model="productAttributeOptionValid"
            lazy-validation
          >
            <v-text-field
              v-if="activeAttribute.attribute_form !== 'text'"
              v-model="productAttributeOption.label"
              :label="`${activeAttribute.title} Label`"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-if="
                activeAttribute.attribute_form == 'text' ||
                activeAttribute.attribute_form == 'color'
              "
              v-model="productAttributeOption.value"
              :label="`${activeAttribute.title} Option ${
                activeAttribute.attribute_form == 'color'
                  ? 'Color Code'
                  : 'Value'
              } *`"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="productAttributeOption.price"
              :label="`${activeAttribute.title} Additional Price (optional)`"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <FilesEntry
              v-if="activeAttribute.attribute_form == 'image'"
              :label="`${activeAttribute.title} Option Image (optional)`"
              @selectedFiles="selectedFiles"
              outlined
              dense
            />

            <v-switch
              v-model="productAttributeOption.isDefault"
              inset
              label="Is Default"
              outlined
              dense
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogAddAttributeOption = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            :disabled="!productAttributeOptionValid"
            @click="validateProductAttributeOption"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAddSpecifications" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          Add Product Specification
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form
            ref="specificationForm"
            v-model="specificationValid"
            lazy-validation
          >
            <v-select
              v-model="specificationCompose.specificationId"
              :rules="[rules.required]"
              :items="getSpecifications"
              label="Select Specification"
              item-text="title"
              item-value="id"
              outlined
              dense
            >
            </v-select>

            <v-text-field
              v-model="specificationCompose.value"
              label="Specification Value"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogAddSpecifications = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            :disabled="!specificationValid"
            @click="validateSpecification"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogUploadImages" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          Product Photos
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="sendForm" v-model="valid" lazy-validation>
            <v-file-input
              label="Product Image"
              v-model="galleryImage"
              :rules="[rules.required]"
              outlined
              dense
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogUploadImages = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn color="primary" :disabled="!valid" @click="validateUpdate"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="viewProductColorOption" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ productColorOption.label }}
        </v-card-title>

        <v-card-title>
          <v-img
            :src="`${uploads}${productColorOption.imageUrl}`"
            width="350px"
          />
        </v-card-title>

        <v-card-text class="pa-5">
          <p>
            {{ productColorOption.colorCode }}
          </p>
          <p>DATE: {{ productColorOption.created_at }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-5 background-secundario">
          <v-switch
            v-model="isColorDefault"
            @change="
              switchShopingProductColorOptionDefaultStatus(productColorOption)
            "
            inset
            label="Default"
            outlined
            dense
          />

          <v-btn
            color="red"
            class="ml-auto"
            @click="deleteAttribute(productColorOption)"
            outlined
            >Delete</v-btn
          >
          <v-btn @click="viewProductColorOption = false" outlined color="green"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="viewProductAttributeOption" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ activeAttribute.title }}
        </v-card-title>

        <v-card-title>
          <h v-if="productAttributeOption.attribute_form !== 'image'">
            {{ productAttributeOption.value }}
          </h>

          <v-img
            v-else
            :src="`${productAttributeOption.value}`"
            width="350px"
          />
        </v-card-title>

        <v-card-text class="pa-5">
          <p>Form: {{ productAttributeOption.attribute_form }}</p>
          <p>DATE: {{ productAttributeOption.created_at }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-5 background-secundario">
          <v-switch
            v-model="isAttributeDefault"
            @change="
              switchShopingProductAttributeOptionDefaultStatus(
                productAttributeOption
              )
            "
            inset
            label="Default"
            outlined
            dense
          />

          <v-btn
            color="red"
            class="ml-auto"
            @click="deleteAttribute(productAttributeOption)"
            outlined
            >Delete</v-btn
          >
          <v-btn
            @click="viewProductAttributeOption = false"
            outlined
            color="green"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from "vue";
import CommentsAndReplys from "../../../components/Products/CommentsAndReplys.vue";
import ProductPhotosAndHosts from "../../../components/Products/ProductPhotosAndHosts.vue";
import ProductConfiguration from "../../../components/Products/ProductConfiguration.vue";
import FilesEntry from "../../../components/FilesEntry.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import { countries, uploads, escapeHtml } from "../../../utils/constants";

export default {
  template: "#page",

  components: {
    CommentsAndReplys: CommentsAndReplys,
    ProductPhotosAndHosts: ProductPhotosAndHosts,
    ProductConfiguration: ProductConfiguration,
    FilesEntry: FilesEntry,
  },

  data() {
    return {
      countries: countries,
      uploads: uploads,
      escapeHtml: escapeHtml,
      valid: true,
      specificationValid: false,
      galleryImage: null,
      dialogUploadImages: false,
      dialogAddSpecifications: false,
      specificationCompose: {},
      productColorOption: {},
      productColorOptionValid: false,
      dialogAddAttributeOption: false,
      productAttributeOption: {
        isDefault: false,
      },
      productAttributeOptionValid: false,
      viewProductAttributeOption: false,
      viewProductColorOption: false,
      productColorOption: {},
      activeAttribute: {},
      isColorDefault: false,
      isAttributeDefault: false,

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
        { text: "Author", value: "name" },
        { text: "Date Added", value: "created_at" },
      ],
    };
  },

  beforeCreate() {
    this.$store.dispatch("loadProductDetails", this.$route.params.id);
    this.$store.dispatch("loadSystemSettings");
    this.$store.dispatch("loadSpecifications");
    this.$store.dispatch(
      "loadShopingProductSpecifications",
      this.$route.params.id
    );
    this.$store.dispatch("loadProductAttributes", this.$route.params.id);
    this.$store.dispatch(
      "fetchShoppingProductDiscussions",
      this.$route.params.id
    );
  },

  computed: {
    ...mapState([
      "productDetails",
      "systemSettings",
      "specifications",
      "shopingProductSpecifications",
      "productAttributes",
      "shoppingProductDiscussions",
    ]),
    ...mapGetters([
      "getProductDetails",
      "getSystemSettings",
      "messageAlert",
      "getSpecifications",
      "getShopingProductSpecifications",
      "getProductAttributes",
      "getShoppingProductDiscussions",
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
        this.dialogUploadImages = false;
        this.$store.dispatch("loadProductDetails", this.$route.params.id);
        this.$store.dispatch("loadSystemSettings");
        this.$store.dispatch("loadSpecifications");
        this.$store.dispatch(
          "loadShopingProductSpecifications",
          this.$route.params.id
        );
        this.$store.dispatch("loadProductAttributes", this.$route.params.id);
        this.$store.dispatch(
          "fetchShoppingProductDiscussions",
          this.$route.params.id
        );
      }
    },
  },

  mounted: function () {},

  methods: {
    getProductAttributeSetAtributes(attribute_id) {
      var attributes = [];
      for (var mAttribute of this.getProductAttributes) {
        if (mAttribute.attribute_id == attribute_id) {
          attributes.push(mAttribute);
        }
      }
      return attributes;
    },
    validateUpdate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.PostPhotos();
      }
    },

    switchShopingProductAttributeOptionDefaultStatus(productAttributeOption) {
      this.$store.dispatch("switchShopingProductAttributeOptionDefaultStatus", {
        productId: this.$route.params.id,
        optionId: productAttributeOption.id,
        isDefault: this.isAttributeDefault,
      });
    },

    switchShopingProductColorOptionDefaultStatus(productColorOption) {
      this.$store.dispatch("switchShopingProductColorOptionDefaultStatus", {
        productId: this.$route.params.id,
        optionId: productColorOption.id,
        isDefault: this.isColorDefault,
      });
    },

    displayShopingProductAttributeOption(attribute, attributeActive) {
      this.viewProductAttributeOption = true;
      this.isAttributeDefault = attribute.isDefault == "true" ? true : false;
      this.productAttributeOption = attribute;
      this.activeAttribute = attributeActive;
    },

    displayShopingProductColorOption(colorOption) {
      this.viewProductColorOption = true;
      this.isColorDefault = colorOption.isDefault == "true" ? true : false;
      this.productColorOption = colorOption;
    },

    PostPhotos() {
      this.$store.dispatch("submitShopingProductGalleryImage", {
        productId: this.$route.params.id,
        image: this.galleryImage,
      });
    },

    validateSpecification() {
      if (this.$refs.specificationForm.validate()) {
        // send it
        this.specificationCompose["productId"] = this.$route.params.id;
        this.$store.dispatch(
          "submitShopingProductSpecification",
          this.specificationCompose
        );
        this.dialogAddSpecifications = false;
      }
    },

    validateProductAttributeOption() {
      if (this.$refs.productAttributeOptionForm.validate()) {
        // send it
        this.productAttributeOption["productId"] = this.$route.params.id;
        this.productAttributeOption["attribute_form"] =
          this.activeAttribute.attribute_form;
        this.productAttributeOption["attribute_id"] = this.activeAttribute.id;

        this.$store.dispatch(
          "submitShopingProductAttributeOption",
          this.productAttributeOption
        );
        this.dialogAddAttributeOption = false;
      }
    },

    openAddAttributeOptionDialog(attribute) {
      this.productAttributeOption = {
        isDefault: false,
      };
      this.activeAttribute = attribute;
      this.dialogAddAttributeOption = true;
    },

    selectedFiles(file) {
      this.productAttributeOption.image = JSON.stringify(file);
    },

    deleteAttribute(attribute) {
      this.$store.dispatch("deleteProductAttribute", attribute.id);
      this.viewProductAttributeOption = false;
    },
  },
};
</script>
