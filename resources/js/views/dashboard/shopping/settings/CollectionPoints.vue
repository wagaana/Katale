<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card-actions class="pa-3">
          <h5 class="font-weight-light mb-2">Collection Points</h5>

          <v-btn
            to="/admin/shopping/settings/createCollectionPoint"
            class="primary ml-auto"
            >New</v-btn
          >
        </v-card-actions>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-data-table
          :headers="headers"
          :items="getCollectionPoints"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="openCollectionPointDetails(item)">
              <td>
                <img :src="`${item.imageUrl}`" width="30px" height="30px" />
              </td>
              <td>{{ item.label }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../../utils/constants";
import ActiveCompanyLoader from "../../../../components/ActiveCompanyLoader.vue";
import CompanyListLoader from "../../../../components/CompanyListLoader.vue";

export default {
  components: {
    ActiveCompanyLoader,
    CompanyListLoader,
  },

  data: () => ({
    uploads: uploads,
    showApiKey: false,
    showKey: false,
    getFreelancerCompany: {},

    headers: [
      {
        text: "Avator",
        align: "left",
        sortable: false,
        value: "imageUrl",
      },
      { text: "Label", value: "label" },
      { text: "Address", value: "address" },
      { text: "Author", value: "name" },
    ],
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState(["myCollectionPoints", "freelancerCompany"]),
    ...mapGetters([
      "getCollectionPoints",
      /*"getFreelancerCompany",*/
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
        this.$store.dispatch("fetchAllCollectionPoints");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchAllCollectionPoints");
  },

  methods: {
    openCollectionPointDetails(collectionPoint) {
      this.$router.push({
        path: "/admin/shopping/settings/collectionPoints/" + collectionPoint.id,
        query: {},
      });
    },

    onBasicSubmit() {},
  },
};
</script>
