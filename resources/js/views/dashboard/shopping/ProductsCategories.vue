<template>
  <div class="container">
    <v-row>
      <v-col class="col-md-8 pr-md-1 sm-6">
        <v-row>
          <v-col class="col-md-10 pr-md-1 sm-6">
            <h1 class="font-weight-light mb-2">Products Categories</h1>
            <span class="overline">Manage Products Categories here</span>
          </v-col>
        </v-row>

        <v-card class="py-2 pa-0">
          <v-data-table
            :headers="headers"
            :items="getShopingCategories"
            item-key="id"
          >
            <template v-slot:item="{ item }">
              <tr @click="loadCategory(item)">
                <td>
                  <img :src="item.url" width="30px" height="30px" />
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.parent }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col class="col-md-4 pr-md-1 fill-width">
        <v-card>
          <v-card-text class="pa-2">
            <v-form ref="sendForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="categoryCompose.title"
                label="Category Label"
                :rules="[rules.required]"
                autocomplete="email"
                outlined
                dense
              ></v-text-field>

              <v-autocomplete
                v-model="categoryCompose.parent_id"
                :items="getShopingMainAndParentCategories"
                label="Select Parent"
                item-text="title"
                item-value="id"
                outlined
                dense
              />

              <v-textarea
                v-model="categoryCompose.description"
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
          <v-card-actions class="pa-2">
            <v-btn
              color="primary"
              class="ml-auto"
              :disabled="!valid"
              @click="validate"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="viewUserProfile" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ activeCategory.title }}
        </v-card-title>

        <v-card-title>
          <v-card
            :style="{
              'background-image': `url(${activeCategory.url})`,
              'background-repeat': 'no-repeat',
              height: '200px',
              width: '100%',
              'background-size': 'cover',
            }"
          >
          </v-card>
        </v-card-title>

        <v-card-text class="pa-5">
          <p>
            {{ activeCategory.description }}
          </p>
          <p>DATE: {{ activeCategory.created_at }}</p>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn color="red" @click="deleteCategory(activeCategory)" outlined
            >Delete</v-btn
          >
          <v-btn
            class="ml-auto"
            @click="openAdminDetails(activeUser)"
            outlined
            color="green"
            >Items</v-btn
          >
          <v-btn
            :to="`/admin/shopping/productsCategories/${
              activeCategory.id === undefined ? '' : activeCategory.id
            }`"
            outlined
            color="primary"
            >Configure</v-btn
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
import FilesEntry from "../../../components/FilesEntry.vue";

export default {
  components: {
    FilesEntry: FilesEntry,
  },
  data: () => ({
    file: null,
    countries: countries,
    uploads: uploads,
    escapeHtml: escapeHtml,
    categoryCompose: {},
    activeCategory: {},
    composeMessage: {},
    dialogComposeEmail: false,
    viewUserProfile: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      { text: "Icon", value: "imageUrl" },
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title",
      },
      { text: "Description", value: "description" },
      { text: "Parent", value: "parent" },
    ],
    systemUserLevels: [
      { id: "OWNER", label: "System Owner" },
      { id: "EDITOR", label: "System Editor" },
      { id: "VIEWER", label: "System Viewer" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loadShopingCategories");
    this.$store.dispatch("loadShopingMainAndParentCategories");
  },

  computed: {
    ...mapState(["shopingCategories", "shopingMainAndParentCategories"]),
    ...mapGetters([
      "getShopingCategories",
      "getShopingMainAndParentCategories",
      "messageAlert",
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
        this.$store.dispatch("loadShopingCategories");
        this.$store.dispatch("loadShopingMainAndParentCategories");
      }
    },
  },

  methods: {
    loadCategory(activeCategory) {
      this.activeCategory = activeCategory;
      this.viewUserProfile = true;
    },

    deleteCategory(activeCategory) {
      this.$store.dispatch("deleteShopingCategory", activeCategory.id);
      this.viewUserProfile = false;
    },

    composeEmail(user) {
      this.viewUserProfile = false;
      this.dialogComposeEmail = true;
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.categoryCompose);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createCategory(this.categoryCompose);
      }
    },

    createCategory(categoryCompose) {
      this.$store.dispatch("submitShopingCategory", categoryCompose);
    },

    selectedFiles(file) {
      this.categoryCompose.image = JSON.stringify(file);
      this.categoryCompose.logo_id = file.id;
    },
  },
};
</script>
