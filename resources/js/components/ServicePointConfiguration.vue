<template>
    <div class="container">
        <v-row class="px-0">
      <!--time and venue-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--time-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <!--Billing config-->
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-currency-usd-circle-outline</v-icon>
              Handling Fee: {{ data.handlingFee || 0.00 }}
              <a @click="OpenEditModule('handlingFee', 'Handling Fee', data.handlingFee || 0.00 )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-currency-usd-circle-outline</v-icon>
              Delivery Fee/KM: {{ data.deliveryFeePerKM || 0.00 }}
              <a @click="OpenEditModule('deliveryFeePerKM', 'Delivery Fee/KM', data.deliveryFeePerKM || 0.00 )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-currency-usd-circle-outline</v-icon>
              Min Delivery Fee: {{ data.minDeliveryFee || 0.00 }}
              <a @click="OpenEditModule('minDeliveryFee', 'Min Delivery Fee', data.minDeliveryFee || 0.00 )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-currency-usd-circle-outline</v-icon>
              Max Delivery Fee: {{ data.maxDeliveryFee || 0.00 }}
              <a @click="OpenEditModule('maxDeliveryFee', 'Max Delivery Fee', data.maxDeliveryFee || 0.00 )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
          </v-col>
        </v-row>
      </v-col>

      <!--fees and benefits-->
      <v-col cols="12" sm="6" order="-1" order-sm="2">
        <v-row class="px-1">
          <!--Entrance fee-->
          <v-col cols="12" sm="12" order="-1" order-sm="2">
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-alarm</v-icon>
              {{ data.created_at }}
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-email</v-icon>
              {{ data.email }}
              <a @click="OpenEditModule('email', 'Email', data.email )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-web</v-icon>
               {{ data.website }}
               <a @click="OpenEditModule('website', 'Website', data.website )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p class="font-weight-bold">
              <v-icon color="primary">mdi-phone</v-icon>
              {{ data.phone }}
              <a @click="OpenEditModule('phone', 'Phone', data.phone )"><v-icon color="primary">mdi-pencil</v-icon></a>
            </p>
            <p>
              <a class="font-weight-bold">
                <v-icon color="primary">mdi-map</v-icon>
                Show Map
              </a>
            </p>
            <p class="font-weight-light">
              <v-icon color="primary">mdi-map-marker</v-icon>
              {{ data.address }}
            </p>
          </v-col>

          <!--Benefits-->
          <v-col
            v-if="data.benefits > 0"
            cols="12"
            sm="12"
            order="-1"
            order-sm="2"
          >
            <v-row class="px-1">
              <v-col cols="12" sm="2" order="-1" order-sm="2">
                <v-icon color="primary">mdi-gift</v-icon>
              </v-col>

              <v-col cols="12" sm="10" order="-1" order-sm="2">
                <p class="font-weight-bold">
                  Benefits
                </p>
                <p
                  class="font-weight-light"
                  v-if="benefit in data.benefits"
                  :key="benefit.id"
                >
                  <v-icon color="primary">mdi-plus</v-icon>
                  {{ benefit.label }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-dialog v-model="dialogEditConfig" width="400">
      <v-card>
        <v-card-title class="headline" primary-title>
          <h2>{{ `Edit ${activeFieldLabel}` }}</h2>
        </v-card-title>
        <v-divider></v-divider>

          <v-card-text>
                  <v-text-field
                    v-model="activeFieldValue"
                    :label="`${activeFieldLabel} Value`"
                    outlined
                    dense
                  ></v-text-field>
          </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-2">
          <v-btn
            class="ml-auto"
            @click="dialogEditConfig = false"
            outlined
            color="primary"
            >Close</v-btn
          >
          <v-btn
            color="primary"
            @click="updateConfig"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";

export default {
   template: '#ServicePointConfiguration',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        dialogEditConfig: false,
        activeFieldId: "",
        activeFieldLabel: "",
        activeFieldValue: null,
      };
    },
    computed: {
      ...mapGetters([]),
    },
    watch: {
      campaignTarget(val) {
        if (val !== null) {
          console.log(val);
          this.params = val;
        }
      },
    },
    methods: {
      ...mapActions([]),
      getTarget() {
        return this.params;
      },
      getConditionLabel(mCondition) {
        return this.conditions.find((cond) => cond.id === mCondition).label;
      },
      deleteParam(item) {
        let index = this.params.indexOf(item);
        if (index >= 0) {
          this.params.splice(index, 1);
        }
      },

      OpenEditModule(fieldId, fieldLabel, fieldValue){
        this.activeFieldId=fieldId;
        this.activeFieldLabel=fieldLabel;
        this.activeFieldValue=fieldValue;
        this.dialogEditConfig=true;
      },

      updateConfig(){
        const activeItem = {
          activeFieldId: this.activeFieldId,
          activeFieldLabel: this.activeFieldLabel,
          activeFieldValue: this.activeFieldValue,
          servicePointId: this.$route.query.servicePointId
        }
        this.$store.dispatch("updateServicePointConfig", activeItem);
        this.dialogEditConfig=false;
      },
    },
};
</script>