<template>
  <v-container fluid pa-3 style="min-height: 100vh">
    <v-row>
      <v-col cols="12" sm="9" order="1" order-sm="1">
        <v-row class="py-2 pa-0 mb-5">
          <v-col cols="9" class="py-0">
            <h1 class="font-weight-light mb-0">Order Details</h1>
            <span class="overline"
              >Below is the information about this Order</span
            >
          </v-col>

          <v-col cols="3" class="pr-md-1 fill-width">
            <v-btn @click="dialogDeliveryInfo = true" class="primary"
              >Delivery Info</v-btn
            >
          </v-col>
        </v-row>

        <v-card class="py-2 pa-0 mb-5">
          <v-data-table
            :headers="headers"
            :items="getInvoiceProducts"
            item-key="id"
            dark
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
          >
            <template v-slot:item="{ item }">
              <tr @click="loadProductDetails(item.productId)">
                <td>
                  <v-img
                    :src="`/${item.imageUrl}`"
                    width="30px"
                    height="30px"
                  />
                </td>
                <td>{{ item.label }}</td>
                <td>
                  {{ item.sizeLabel }}
                </td>
                <td>
                  {{ item.colorLabel }}
                </td>
                <td>{{ item.orderQty }}</td>
                <td>
                  {{ settings.currency }}
                  {{
                    item.onDiscount == "true"
                      ? item.discountPrice
                      : item.sellPrice
                  }}
                </td>
                <td>{{ item.created_at | exactDay }}</td>
                <td>{{ item.onDiscount }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="12" sm="3" order="-1" order-sm="2">
        <v-card min-height="300" min-width="150" elevation="0">
          <v-row class="pa-3" v-if="getProductsInvoice != null">
            <v-col offset="1" cols="10" class="center relative">
              <v-avatar size="160">
                <v-img
                  class="card-img"
                  :src="`/${getProductsInvoice.profile_picture}`"
                ></v-img>
              </v-avatar>
            </v-col>

            <v-col offset="1" cols="10" class="background">
              <v-row>
                <v-col>
                  <!------------------ PROFILE DATA ------------------>
                  <div
                    class="text-center mb-3 title text-secundario font-weight-bold"
                  >
                    {{ getProductsInvoice.name }}
                  </div>
                  <div
                    class="text-center mb-3 text-secundario font-weight-bold"
                  >
                    Ammount: <span>{{ settings.currency }}</span>
                    {{ getProductsInvoice.ammount }}
                  </div>
                  <div
                    class="text-center mb-3 text-secundario font-weight-bold"
                  >
                    Ammount Paid: <span>{{ settings.currency }}</span>
                    {{ getProductsInvoice.ammountPaid }}
                  </div>
                  <div
                    class="text-center mb-3 text-secundario font-weight-bold"
                  >
                    Delivery: <span>{{ settings.currency }}</span>
                    {{ getProductsInvoice.deliveryFee }}
                  </div>
                  <div
                    class="text-center mb-3 text-secundario font-weight-bold"
                  >
                    Status:
                    {{ getProductsInvoice.order_status }}
                  </div>
                  <div
                    class="text-center mb-3 text-secundario font-weight-bold"
                  >
                    {{ getProductsInvoice.paymentMethod }}
                  </div>
                  <div
                    class="text-center mb-3 title text-secundario font-weight-bold"
                  >
                    <v-btn
                      class="ml-auto"
                      @click="LoadUserProfile(getProductsInvoice)"
                      outlined
                      color="primary"
                      >Profile</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogDeliveryInfo" width="500">
      <v-card>
        <v-card-title class="headline black" primary-title>
          Order Delivery Info
        </v-card-title>
        <v-card-text class="pa-5" v-if="getProductsInvoice != null">
          <div class="mb-3 title text-secundario">
            Name: {{ getProductsInvoice.fullname }}
          </div>

          <div class="mb-3 title text-secundario">
            Unit/Apt:
            {{ getProductsInvoice.unit_apt }}
          </div>

          <div class="mb-3 title text-secundario">
            phone number:
            {{ getProductsInvoice.phone_number }}
          </div>

          <div class="mb-3 title text-secundario">
            Address:
            <a
              class="font-weight-bold"
              target="__BLANK"
              :href="`https://www.google.com/maps/search/?api=1&query=${getProductsInvoice.latitude}%2C${getProductsInvoice.longitude}`"
            >
              {{ getProductsInvoice.locationAddress }}
            </a>
          </div>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn
            class="ml-auto"
            @click="dialogDeliveryInfo = false"
            outlined
            color="primary"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import dayjs from "dayjs";
// VUEX
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
/*
import {
  mdiMapMarker,
  mdiWeb,
  mdiCalendar,
  mdiPencil,
  mdiPencilOutline,
  mdiCameraRetakeOutline,
} from "@mdi/js";
*/
export default {
  data: () => ({
    valid: false,
    dialogDeliveryInfo: false,
    composeMessage: {},
    selectedGateWay: {},
    rules: {
      required: (value) => !!value || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    },
    svg: {
      location: mdiMapMarker,
      web: mdiWeb,
      calendar: mdiCalendar,
      pencil: mdiPencil,
      camera: mdiCameraRetakeOutline,
    },

    headers: [
      { text: "Photo", value: "photoUrl" },
      {
        text: "Item",
        align: "left",
        sortable: false,
        value: "label",
      },
      { text: "Size", value: "sizeLabel" },
      { text: "Color", value: "colorLabel" },
      { text: "Qty", value: "orderQuantity" },
      { text: "Price", value: "price" },
      { text: "Creation", value: "publishTimeMillis" },
      { text: "Discount", value: "discount" },
    ],

    paymentGateways: [
      { text: "Bank Deposit ", value: "bankDeposit" },
      { text: "Visa/Master ", value: "card" },
      { text: "Mobile Money ", value: "mobileMoney" },
    ],
    sortBy: "publishTimeMillis",
    sortDesc: true,
    settings: {},
  }),

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
  },

  beforeCreate() {
    this.$store.dispatch(
      "fetchAdminProductsInvoice",
      this.$route.params.invoiceId
    );
    this.$store.dispatch(
      "fetchAdminInvoiceProducts",
      this.$route.params.invoiceId
    );
    this.$store.dispatch("loadSystemSettings");
  },

  computed: {
    ...mapState([
      "selectedUser",
      "systemSettings",
      "productsInvoice",
      "invoiceProducts",
    ]),
    ...mapGetters([
      "getSystemSettings",
      "getProductsInvoice",
      "getInvoiceProducts",
      "messageAlert",
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
      }
    },

    getSystemSettings(val) {
      if (val != null) {
        for (var i = 0; i < val.length; i++) {
          const value = val[i];
          this.settings[value.setting_name] = value.setting_value;
        }
      }
    },
  },

  methods: {
    displayTransactionContextMenu(item) {
      alert(item.id);
    },

    validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
      }
    },

    loadProductDetails(productId) {
      this.$router.push({
        path: "/admin/shopping/products/" + productId,
        query: {},
      });
    },

    LoadUserProfile(activeUser) {
      this.$router.push({
        path: "/admin/customers/" + activeUser.userId,
        query: {},
      });
    },
  },
};
</script>
