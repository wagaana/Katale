<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0 pa-5">
        <h1 class="font-weight-light mb-0">General Settings</h1>
        <span class="overline">Manage Your company here</span>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-card>
          <v-data-table
            :headers="headers"
            :items="getSystemSettings"
            item-key="setting_name"
          >
            <template v-slot:item="{ item }">
              <tr @click="loadSetting(item)">
                <td>{{ humanize(item.setting_name) }}</td>
                <td>{{ item.setting_value }}</td>
                <td>{{ item.type }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-dialog v-model="dialogSetting" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>{{ humanize(activeSetting.setting_name) }}</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-text-field
              v-model="activeSetting.setting_value"
              label="Your Name"
              outlined
              dense
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-2">
            <v-btn color="red" @click="deleteSetting(activeSetting)" outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="dialogSetting = false"
              outlined
              color="primary"
              >Close</v-btn
            >
            <v-btn color="primary" @click="updateSetting(activeSetting)"
              >Update</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { currencies, uploads, escapeHtml } from "../../../utils/constants";

export default {
  template: "#GeneralSettings",

  data() {
    return {
      file: null,
      valid: false,
      dialogSetting: false,
      activeSetting: {},
      uploads: uploads,
      rules: {
        required: (value) => !!value || "This field is required",
        email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
      },
      headers: [
        {
          text: "Setting Name",
          align: "left",
          sortable: false,
          value: "setting_name",
        },
        { text: "Setting Value", value: "setting_value" },
        { text: "Type", value: "type" },
      ],
    };
  },
  beforeCreate() {
    this.$store.dispatch("loadSystemSettings");
  },

  computed: {
    ...mapState(["systemSettings"]),
    ...mapGetters(["getSystemSettings"]),
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
        this.$store.dispatch("loadSystemSettings");
      }
    },
  },

  methods: {
    loadSetting(template) {
      this.activeSetting = template;
      this.dialogSetting = true;
    },

    updateSetting(activeSetting) {
      const context = this;
      console.log(activeSetting);
      context.$store.dispatch("updateSetting", activeSetting);
      this.dialogSetting = false;
    },

    humanize(str) {
      if (str !== undefined) {
        var i,
          frags = str.split("_");
        for (i = 0; i < frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(" ");
      } else {
        return "";
      }
    },

    deleteSetting() {},
  },
  created() {},
};
</script>
