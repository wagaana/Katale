<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-md-10 pr-md-1 sm-6">
          <h1 class="font-weight-light">Templates</h1>
        </div>
        <div class="col-md-2 pr-md-1 fill-width">
          <v-btn @click="createTemplate" class="primary font-weight-light"
            >New Template</v-btn
          >
        </div>
      </div>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="getCampaignTemplates"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="loadTemplate(item)">
              <td>{{ item.label }}</td>
              <td>{{ item.description }}</td>
              <td>
                {{ item.purpose !== null ? item.purpose : "Email Campaigns" }}
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
            <h2>{{ activeTemplate.label }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-card-text>
              <p>{{ activeTemplate.description }}</p>

              <span class="success--text subtitle-1">
                Created: {{ activeTemplate.created_at }}
              </span>
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn color="red" @click="deleteTemplate(activeTemplate)" outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="dialogTemplate = false"
              outlined
              color="primary"
              >Close</v-btn
            >
            <v-btn
              color="primary"
              @click="viewTemplate(activeTemplate.templateID)"
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
      activeTemplate: {},
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
          text: "Purpose",
          value: "purpose",
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
    this.$store.dispatch("loadCampaignTemplates");
  },

  computed: {
    ...mapState(["campaignTemplates"]),
    ...mapGetters(["getCampaignTemplates", "messageAlert"]),
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
      }
    },
  },

  methods: {
    createTemplate() {
      this.$router.push({
        path: "/admin/marketingCampaigns/createTemplate",
        query: {
          action: "createTemplate",
        },
      });
    },

    viewTemplate(templateID) {
      this.$router.push({
        path: "/admin/marketingCampaigns/createTemplate",
        query: {
          action: "vewTemplate",
          id: templateID,
        },
      });
    },

    loadTemplate(template) {
      this.activeTemplate = template;
      this.dialogTemplate = true;
    },

    deleteTemplate(template) {
      this.$store.dispatch("deleteTemplate", template.templateID);
      this.dialogTemplate = false;
    },
  },
};
</script>
