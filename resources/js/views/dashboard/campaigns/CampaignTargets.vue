<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-md-10 pr-md-1 sm-6">
          <h1 class="font-weight-light">Campaign Targets</h1>
        </div>
        <div class="col-md-2 pr-md-1 fill-width">
          <v-btn @click="createCampaignTarget" class="primary font-weight-light"
            >New Targets</v-btn
          >
        </div>
      </div>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="getCampaignTargets"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="loadTemplate(item)">
              <td>{{ item.label }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.deleted }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-dialog v-model="dialogTemplate" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>{{ activeTarget.label }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-card-text>
              <p>{{ activeTarget.description }}</p>

              <span class="success--text subtitle-1">
                Created: {{ activeTarget.timeAdded }}
              </span>
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn
              color="red"
              @click="deleteCampaignTarget(activeTarget)"
              outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="loadTargetUsers(activeTarget)"
              outlined
              color="primary"
              >Target Users</v-btn
            >
            <v-btn color="primary" @click="viewCampaign(activeTarget)"
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
      activeTarget: {},
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
          text: "Creation Time",
          value: "timeAdded",
        },
        {
          text: "Deleted",
          value: "deleted",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("loadCampaignTargets");
  },

  computed: {
    ...mapState(["campaignTargets"]),
    ...mapGetters(["getCampaignTargets", "messageAlert"]),
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
    viewCampaign(activeTarget) {
      this.$router.push({
        path: "/admin/marketingCampaigns/createCampaignTarget",
        query: {
          action: "viewTarget",
          targetID: activeTarget.id,
        },
      });
    },

    createCampaignTarget() {
      this.$router.push({
        path: "/admin/marketingCampaigns/createCampaignTarget",
        query: {
          action: "newCampaign",
        },
      });
    },

    loadTargetUsers(activeTarget) {
      this.$router.push({
        path: "/targetUsers",
        query: {
          targetID: activeTarget.id,
        },
      });
    },

    loadTemplate(activeTarget) {
      this.activeTarget = activeTarget;
      this.dialogTemplate = true;
    },

    deleteCampaignTarget(activeTarget) {
      this.$store.dispatch("deleteCampaignTarget", activeTarget.id);
      this.dialogTemplate = false;
    },
  },
};
</script>
