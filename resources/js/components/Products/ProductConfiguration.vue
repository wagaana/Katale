<template>
  <div>
    <v-row class="px-0">
      <!--time and venue-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--time-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-alarm</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-bold">
                  {{ data.created_at | exactDay }}
                </p>
              </v-col>
            </v-row>
          </v-col>

          <!--venue-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-database-settings-outline</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-light">{{ data.category_id }} Category</p>
              </v-col>
            </v-row>
          </v-col>

          <!--attendees count-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-account-multiple</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <a class="font-weight-bold"> {{ data.total_sale }} sales </a>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-switch
              v-model="featuredProduct"
              @change="switchProduuctFeaturedStatus(data)"
              inset
              label="Is Featured"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-col>

      <!--fees and benefits-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--Entrance fee-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-currency-usd</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-bold">Product Prices</p>

                <v-card elevation="0">
                  <v-row>
                    <v-col sm="12">
                      <v-row>
                        <v-col sm="5">Cost Price</v-col
                        ><v-col sm="7"
                          >{{ getSystemSettings.currency }}
                          {{ data.purchase_cost }}</v-col
                        >
                      </v-row>

                      <v-row>
                        <v-col sm="5">Discount Price</v-col
                        ><v-col sm="7"
                          >{{ getSystemSettings.currency }}
                          {{ data.special_discount }}</v-col
                        >
                      </v-row>

                      <v-row>
                        <v-col sm="5">Sell Price</v-col
                        ><v-col sm="7"
                          >{{ getSystemSettings.currency }}
                          {{ data.price }}</v-col
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    body: "",
    featuredProduct: false,
  }),

  watch: {
    data(val) {
      if (val != null) {
        this.featuredProduct = val.is_featured;
      }
    },
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
  },

  methods: {
    handleCommentSubmit() {
      this.$store
        .dispatch("SUBMIT_COMMENT", {
          screamId: this.screamId,
          comment: {
            body: this.body,
          },
        })
        .then(() => {
          this.body = "";
        })
        .catch((error) => error);
    },

    switchProduuctFeaturedStatus(product) {
      this.$store.dispatch("switchProduuctFeaturedStatus", {
        productId: product.id,
        is_featured: this.featuredProduct,
      });
    },
  },
  beforeCreate() {
    // this.$store.dispatch("getMyProfile");
  },

  computed: {
    ...mapGetters(["getSystemSettings"]),
  },
};
</script>
