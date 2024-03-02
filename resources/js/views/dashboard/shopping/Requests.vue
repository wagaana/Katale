<template>
  <div class="container">
    <div>
      <h1 class="font-weight-light">Orders</h1>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="getProductsInvoices"
          item-key="id"
        >
          <template v-slot:item="{ item }">
            <tr @click="openRequestDetails(item.invoiceId)">
              <td>@{{ item.user_name }}</td>
              <td>{{ item.order_status }}</td>
              <td>{{ item.ammount }}</td>
              <td>{{ item.deliveryFee }}</td>
              <td>{{ item.ammountPaid }}</td>
              <td>{{ item.totalItems }}</td>
              <td>{{ item.products }}</td>
              <!-- <td>{{ item.status }}</td> -->
              <td>{{ item.created_at }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { countries, uploads, escapeHtml } from "../../../utils/constants";

export default {
  data: () => ({
    uploads: uploads,
    headers: [
      { text: "User Name", value: "user_name" },
      { text: "Order Status", value: "order_status" },
      { text: "Ammount", value: "ammount" },
      { text: "Delivery Fee", value: "deliveryFee" },
      { text: "Ammount Paid", value: "ammountPaid" },
      { text: "Total Items", value: "totalItems" },
      { text: "Products", value: "products" },
      // { text: "Request Status", value: "status" },
      { text: "Time", value: "created_at" },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("fetchAllProductsInvoices");
  },
  //
  computed: {
    ...mapState(["productsInvoices"]),
    ...mapGetters(["getProductsInvoices"]),
  },

  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.getProductsInvoices.reduce((a, b) => a + (b[key] || 0), 0);
    },

    openRequestDetails(requestId) {
      this.$router.push({
        path: "/admin/shopping/requests/" + requestId,
        query: {},
      });
    },
  },
};
</script>
