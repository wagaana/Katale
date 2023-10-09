<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-md-10 pr-md-1 sm-6">
          <h1 class="font-weight-light">Campaigns</h1>
        </div>
        <div class="col-md-2 pr-md-1 fill-width">
          <v-btn @click="createCampaign" class="primary font-weight-light"
            >New Campaign</v-btn
          >
        </div>
      </div>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="getMarketingCampaings"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="loadCampaign(item)">
              <td>{{ item.label }}</td>
              <td>{{ item.description }}</td>
              <td>
                {{ item.campaignInterval }}
              </td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.deleted }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-dialog v-model="dialogTemplate" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>{{ activeCampaign.label }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-card-text>
              <p>{{ activeCampaign.description }}</p>

              <span class="success--text subtitle-1">
                Created: {{ activeCampaign.created_at }}
              </span>
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn color="red" @click="deleteCampaign(activeCampaign)" outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="runCampaign(activeCampaign)"
              outlined
              color="primary"
              >Run</v-btn
            >
            <v-btn color="primary" @click="viewCampaign(activeCampaign)"
              >Configure</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";

export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      dialogTemplate: false,
      activeCampaign: {},
      headers: [
        {
          text: "Label",
          align: "left",
          sortable: false,
          value: "text",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Interval",
          value: "campaignInterval",
        },
        {
          text: "Creation Time",
          value: "created_at",
        },
        {
          text: "Deleted",
          value: "deleted",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("loadMarketingCampaings");
  },

  computed: {
    ...mapState(["marketingCampaings"]),
    ...mapGetters(["getMarketingCampaings", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          type: val.type,
          text: val.body,
        });
      }
    },
  },

  methods: {
    viewCampaign(activeCampaign) {
      this.$router.push({
        path: "/admin/marketingCampaigns/createCampaign",
        query: {
          action: "viewCampaign",
          campaignID: activeCampaign.id,
        },
      });
    },

    createCampaign() {
      this.$router.push({
        path: "/admin/marketingCampaigns/createCampaign",
        query: {
          action: "newCampaign",
        },
      });
    },

    loadCampaign(activeCampaign) {
      this.activeCampaign = activeCampaign;
      this.dialogTemplate = true;
    },

    runCampaign(activeCampaign) {
      this.$store.dispatch("runCampaign", activeCampaign.id);
      this.dialogTemplate = false;
    },

    deleteCampaign(activeCampaign) {
      this.$store.dispatch("deleteCampaign", activeCampaign.id);
      this.dialogTemplate = false;
    },
  },
};
</script>
