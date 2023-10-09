<template>
    <v-card elevation="1" class="py-5 px-2">
    <v-row class="py-2 px-2">
      <!--Photos-->
      <v-col cols="12" sm="8" class="py-0" order="-1" order-sm="2">
        <BranchPhotos :data="data" />
      </v-col>

      <!--Hosts-->
      <v-col cols="12" sm="4" class="py-0" order="-1" order-sm="2">
        <BranchAdmins :data="data" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import BranchPhotos from "./BranchPhotos.vue";
import BranchAdmins from "./BranchAdmins.vue";

export default {
    template: '#BranchPhotosAndAdmins',
    components: {
        BranchPhotos,
        BranchAdmins,
    },
    props: ["data"],
    data() {
      return {
        table: "",
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
    },
};
</script>