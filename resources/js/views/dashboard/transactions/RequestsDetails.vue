<template>
  <div class="container">
    <div>
      <h1 class="font-weight-light">Transaction Details</h1>
      <v-card> </v-card>
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
    headers: [
      {
        text: "Image",
        align: "left",
        sortable: false,
        value: "profile_picture",
      },
      { text: "Name", value: "name" },
      { text: "Provider", value: "provider" },
      { text: "Status", value: "status" },
      { text: "External Id", value: "externalId" },
      { text: "gross", value: "gross" },
      { text: "Fee", value: "fee" },
      { text: "Net", value: "net" },
      { text: "Time", value: "created_at" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loadCompleteTransactions");
  },

  computed: {
    ...mapState(["completeTransactions"]),
    ...mapGetters(["getCompleteTransactions"]),
  },

  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.getCompleteTransactions.reduce(
        (a, b) => a + (b[key] || 0),
        0
      );
    },
  },
};
</script>
