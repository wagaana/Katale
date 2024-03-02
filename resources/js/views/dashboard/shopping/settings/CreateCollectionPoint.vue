<template>
  <div class="container">
    <v-row>
      <v-col cols="12">
        <h5 class="font-weight-light mb-2">Create Collection Point</h5>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-form
          ref="collectionPointForm"
          v-model="validCollectionPoint"
          lazy-validation
        >
          <v-text-field
            v-model="newCollectionPoint.label"
            label="Label"
            autocomplete="company"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>

          <v-textarea
            v-model="newCollectionPoint.description"
            label="Description"
            rows="2"
            max-rows="4"
            outlined
            dense
            :rules="[rules.required]"
          />

          <v-text-field
            v-model="newCollectionPoint.phone"
            label="Phone"
            autocomplete="phone"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
            v-model="newCollectionPoint.website"
            label="Website"
            autocomplete="website"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
            v-model="newCollectionPoint.email"
            label="Email"
            autocomplete="email"
            outlined
            dense
            :rules="[rules.required, rules.email]"
          ></v-text-field>

          <FilesEntry
            label="Featured Picture"
            @selectedFiles="selectedFiles"
            class="pa-5"
          />

          <vuetify-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            @placechanged="getAddressData"
            country="ug"
            outlined
            dense
          >
          </vuetify-google-autocomplete>

          <v-btn
            class="mb-1"
            @click="validateNewCollectionPointForm"
            :disabled="!validCollectionPoint"
            variant="success"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../../utils/constants";
import FilesEntry from "../../../../components/FilesEntry.vue";

export default {
  components: {
    FilesEntry: FilesEntry,
  },
  data() {
    return {
      validCollectionPoint: false,
      newCollectionPoint: {},
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
    };
  },

  beforeCreate() {},

  computed: {
    ...mapState([]),
    ...mapGetters(["messageAlert"]),
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
        this.$router.push("/admin/shopping/settings/collectionPoints");
      }
    },
  },

  methods: {
    validateNewCollectionPointForm() {
      if (this.$refs.collectionPointForm.validate()) {
        // send it
        this.$store.dispatch("submitCollectionPoint", this.newCollectionPoint);
      }
    },

    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function (addressData, placeResultData, id) {
      this.address = addressData;
      console.log(placeResultData);
      this.newCollectionPoint.data = placeResultData;
    },

    selectedFiles(file) {
      this.newCollectionPoint.image = JSON.stringify(file);
      this.newCollectionPoint.logo_id = file.id;
    },
  },
};
</script>
