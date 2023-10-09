<template>
  <div class="container">
    <div>
      <v-row>
        <v-col class="col-md-11 pr-md-1 sm-6">
          <h1 class="font-weight-light mb-2">Promo Codes</h1>
          <span class="overline">Manage Promo Codes here</span>
        </v-col>

        <v-col class="col-md-1 pr-md-1">
          <v-btn @click="dialogCompose = true" width="100%" class="primary"
            >New</v-btn
          >
        </v-col>
      </v-row>

      <v-card class="py-2 pa-0">
        <v-data-table :headers="headers" :items="getPromoCodes" item-key="id">
          <template v-slot:item="{ item }">
            <tr @click="loadPromo(item)">
              <td>{{ item.code }}</td>
              <td>{{ item.ammount }}</td>
              <td>{{ item.validity }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.used }} ( {{ item.qty }} )</td>
              <td>{{ item.creationTime }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-dialog v-model="dialogCompose" width="500">
        <v-card>
          <v-card-title class="headline black" primary-title>
            Add Promo
          </v-card-title>
          <v-card-text class="pa-5">
            <v-form ref="sendForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="newPromoCode.code"
                label="Code"
                :rules="[rules.required]"
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="newPromoCode.ammount"
                label="Ammount"
                :rules="[rules.required]"
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="newPromoCode.qty"
                label="Quantity"
                :rules="[rules.required]"
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="newPromoCode.validity"
                label="Validity"
                :rules="[rules.required]"
                type="date"
                outlined
                dense
              ></v-text-field>

              <v-textarea
                v-model="newPromoCode.note"
                label="Note"
                :rules="[rules.required]"
                outlined
                lines="2"
                dense
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="dialogCompose = false"
              outlined
              color="primary"
              >Cancel</v-btn
            >
            <v-btn color="primary" :disabled="!valid" @click="validate"
              >Create</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="viewPromo" width="400">
        <v-card>
          <v-card-title class="headline" primary-title>
            {{ activePromo.code }}
          </v-card-title>

          <v-card-text class="pa-5">
            <p>
              {{ activePromo.note }}
            </p>
            <p>
              Status: {{ activePromo.status }}
              <br />
              Ammount: {{ activePromo.ammount }}
              <br />
              Valid: {{ activePromo.validity }}
              <br />
              Available: {{ activePromo.used }} ( {{ activePromo.qty }} )
              <br />
              DATE: {{ activePromo.creationTime }}
            </p>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-btn color="red" @click="deletePromo(activePromo)" outlined
              >Delete</v-btn
            >
            <v-btn
              class="ml-auto"
              @click="composeEmail(activePromo)"
              outlined
              color="primary"
              >EDIT</v-btn
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
  data: () => ({
    uploads: uploads,
    newPromoCode: {},
    activePromo: {},
    composeMessage: {},
    dialogCompose: false,
    viewPromo: false,
    valid: false,
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    headers: [
      {
        text: "Code",
        align: "left",
        sortable: false,
        value: "code",
      },
      { text: "Ammount", value: "ammount" },
      { text: "Valid", value: "validity" },
      { text: "Status", value: "status" },
      { text: "Available", value: "used" },
      { text: "Date Added", value: "creationTime" },
    ],
    priorities: [
      { id: "HIGH", label: "High Priority" },
      { id: "MEDIUM", label: "Medium Priority" },
      { id: "LOW", label: "Low Priority" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("fetchMyServicePoints");
    this.$store.dispatch("loadPromoCodes");
  },

  computed: {
    ...mapState(["myServicePints", "promoCodes"]),
    ...mapGetters(["getMyServicePints", "getPromoCodes", "messageAlert"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        this.$store.dispatch("fetchMyServicePoints");
        this.$store.dispatch("loadPromoCodes");
      }
    },
  },

  methods: {
    loadPromo(promo) {
      this.activePromo = promo;
      this.viewPromo = true;
    },

    deletePromo(activePromo) {
      alert("Deleting");
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createPromoCode(this.newPromoCode);
      }
    },

    createPromoCode(newPromoCode) {
      //send the message via API/server endpoint here
      this.dialogCompose = false;
      this.$store.dispatch("addNewPromoCode", newPromoCode);
    },
  },
};
</script>
