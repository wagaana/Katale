<template>
  <div class="container">
    <div>
      <h1 class="font-weight-light">Transaction Requests</h1>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="getCompleteTransactions"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="openRequestDetails(item.id)">
              <td>
                <img
                  :src="`${uploads}${item.profile_picture}`"
                  width="30px"
                  height="30px"
                />
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.provider }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.externalId }}</td>
              <td>{{ item.currency }} {{ item.gross }}</td>
              <td>{{ item.currency }} {{ item.fee }}</td>
              <td>{{ item.currency }} {{ item.net }}</td>
              <td>{{ item.created_at }}</td>
            </tr>
          </template>
          <!-- <template slot="body.append">
                    <tr class="primary--text">
                        <th class="title">Totals</th>
                        <th class="title">{{ sumField('sales') }}</th>
                        <th class="title">{{ sumField('customers') }}</th>
                        <th class="title">{{ sumField('items') }}</th>
                    </tr>
                </template> -->
        </v-data-table>
      </v-card>
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

    openRequestDetails(requestId) {
      this.$router.push({
        path: "/admin/requests/" + requestId,
      });
    },
  },
};
</script>
