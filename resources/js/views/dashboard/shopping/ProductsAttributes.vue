<template>
  <div class="container">
    <v-row>
      <v-col class="col-md-8 pr-md-1 sm-6">
        <v-row>
          <v-col class="col-md-10 pr-md-1 sm-6">
            <h1 class="font-weight-light mb-2">Products Attributes</h1>
            <span class="overline">Manage Products Attributes here</span>
          </v-col>
        </v-row>

        <v-card class="py-2 pa-0">
          <v-data-table
            :headers="headers"
            :items="getShopingAttributeSets"
            item-key="id"
          >
            <template v-slot:item="{ item }">
              <tr @click="loadAttribute(item)">
                <td>{{ item.title }}</td>
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
                v-model="attributeCompose.title"
                label="Attribute Label"
                :rules="[rules.required]"
                autocomplete="email"
                outlined
                dense
              ></v-text-field>
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
          {{ activeAttribute.title }}
        </v-card-title>

        <v-card-title>
          <v-card
            :style="{
              'background-image': `url(${activeAttribute.logo})`,
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
            {{ activeAttribute.description }}
          </p>
          <p>DATE: {{ activeAttribute.created_at }}</p>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn color="red" @click="deleteAttribute(activeAttribute)" outlined
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
              activeAttribute.id === undefined ? '' : activeAttribute.id
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
    attributeCompose: {},
    activeAttribute: {},
    composeMessage: {},
    dialogComposeEmail: false,
    viewUserProfile: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title",
      },
    ],
    systemUserLevels: [
      { id: "OWNER", label: "System Owner" },
      { id: "EDITOR", label: "System Editor" },
      { id: "VIEWER", label: "System Viewer" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loadShopingAttributeSets");
  },

  computed: {
    ...mapState(["shopingAttributeSets"]),
    ...mapGetters(["getShopingAttributeSets", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: "Success",
          text: val.body,
        });
        this.$store.dispatch("loadShopingAttributeSets");
      }
    },
  },

  methods: {
    loadAttribute(activeAttribute) {
      this.activeAttribute = activeAttribute;
      this.viewUserProfile = true;
    },

    deleteAttribute(activeAttribute) {
      this.$store.dispatch("deleteShopingAttributeSet", activeAttribute.id);
      this.viewUserProfile = false;
    },

    composeEmail(user) {
      this.viewUserProfile = false;
      this.dialogComposeEmail = true;
    },

    validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.attributeCompose);
      }
    },

    sendEmail() {
      alert("Sending");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createAttribute(this.attributeCompose);
      }
    },

    createAttribute(attributeCompose) {
      this.$store.dispatch("submitShopingAttributeSet", attributeCompose);
    },
  },
};
</script>
