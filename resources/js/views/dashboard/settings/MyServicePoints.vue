<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-row>
          <v-col class="col-md-9 pr-md-1 sm-6">
            <h1 class="font-weight-light mb-0">Service Points</h1>
            <span class="overline">Add & Manage Service Points Here</span>
          </v-col>

          <v-col class="col-md-3 pr-md-1 fill-width">
            <v-btn @click="registerServicePoint" class="primary"
              >New Point</v-btn
            >
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="py-0">
        <div v-if="getMyServicePints.length > 0">
          <v-card class="py-2 pa-0">
            <v-data-table
              :headers="headers"
              :items="getMyServicePints"
              item-key="id"
            >
              <template v-slot:item="{ item }">
                <tr @click="openServicePointDetails(item)">
                  <td>
                    <img
                      :src="`${uploads}${item.imageUrl}`"
                      width="30px"
                      height="30px"
                    />
                  </td>
                  <td>{{ item.label }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.created_at }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";
import ActiveCompanyLoader from "../../../components/ActiveCompanyLoader.vue";
import CompanyListLoader from "../../../components/CompanyListLoader.vue";

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
      { text: "Date Added", value: "created_at" },
    ],
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    ...mapState(["myServicePints", "freelancerCompany"]),
    ...mapGetters([
      "getMyServicePints",
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
        this.$store.dispatch("fetchAllServicePoints");
      }
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchAllServicePoints");
  },

  methods: {
    openServicePointDetails(servicePoint) {
      this.$router.push({
        path: "/admin/settings/myServicePoints/" + servicePoint.id,
        query: {},
      });
    },

    registerServicePoint() {
      this.$router.push({
        path: "/admin/settings/createServicePoint",
        query: {},
      });
    },

    onBasicSubmit() {},
  },
};
</script>
