<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card-actions class="pa-3">
          <h5 class="font-weight-light mb-2">Package Samples</h5>

          <v-btn @click="dialogNewPackageSample = true" class="primary ml-auto"
            >New</v-btn
          >
        </v-card-actions>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-data-table :headers="headers" :items="getPackageTypes" item-key="id">
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.package_type }}</td>
              <td>{{ `${item.length}X${item.width}X${item.height}(CM)` }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ `${item.weight}Kg` }}</td>
              <td>
                <v-btn icon @click="deletePackageType(item)">
                  <v-icon color="primary">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogNewPackageSample" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          New Package Sample
        </v-card-title>
        <v-card-text class="pa-5">
          <v-form ref="packageSampleForm" v-model="valid" lazy-validation>
            <v-autocomplete
              v-model="newPackageSample.package_type"
              :items="packageTypes"
              label="Select Package Type"
              item-text="text"
              item-value="value"
              :rules="[rules.required]"
              outlined
              dense
            >
            </v-autocomplete>
          </v-form>

          <v-text-field
            v-model="newPackageSample.name"
            label="Label"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>

          <v-row>
            <v-col lg="4">
              <v-text-field
                v-model="newPackageSample.length"
                label="Length (CM)"
                outlined
                dense
                :rules="[rules.required]"
              />
            </v-col>
            <v-col lg="4">
              <v-text-field
                v-model="newPackageSample.width"
                label="Width (CM)"
                outlined
                dense
                :rules="[rules.required]"
              />
            </v-col>
            <v-col lg="4">
              <v-text-field
                v-model="newPackageSample.height"
                label="Height (CM)"
                outlined
                dense
                :rules="[rules.required]"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col lg="6">
              <v-text-field
                v-model="newPackageSample.quantity"
                label="Quantity"
                outlined
                dense
                :rules="[rules.required]"
              />
            </v-col>
            <v-col lg="6">
              <v-text-field
                v-model="newPackageSample.weight"
                label="Weight (KG)"
                outlined
                dense
                :rules="[rules.required]"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogNewPackageSample = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Add Sample</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data: () => ({
    uploads: uploads,
    dialogNewPackageSample: false,
    getFreelancerCompany: {},
    headers: [
      { text: "Name", value: "name" },
      { text: "Type", value: "state" },
      { text: "Area", value: "country" },
      { text: "Qty", value: "quantity" },
      { text: "Weigh", value: "weight" },
      { text: "Delete", value: "delete" },
    ],
    packageTypes: [
      { text: "Document", value: "Document" },
      { text: "Package", value: "Package" },
    ],
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    newPackageSample: {
      quantity: 1,
    },
  }),

  computed: {
    ...mapState(["packageTypes"]),
    ...mapGetters(["getPackageTypes", "messageAlert"]),
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
        this.$store.dispatch("loadPackageTypes");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("loadPackageTypes");
  },

  methods: {
    validate() {
      if (this.$refs.packageSampleForm.validate()) {
        // send it
        this.createRegion(this.newPackageSample);
      }
    },

    createRegion(newPackageSample) {
      this.$store.dispatch("submitPackageType", newPackageSample);
      this.dialogNewPackageSample = false;
    },

    deletePackageType(packageSample) {
      this.$store.dispatch("deletePackageType", packageSample.id);
    },
  },
};
</script>
