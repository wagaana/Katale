<template>
  <v-card class="py-1">
    <v-row>
      <v-col cols="12" sm="2" offset-sm="0">
        <div class="py-3 text-center">
          <v-avatar size="80">
            <v-img :src="`/${data.profile_picture}`" alt="avatar" />
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="12" sm="10">
        <div>
          <v-row>
            <v-col cols="12">
              <h3 @click="getUser" class="cyan--text hover">
                {{ data.name }}
              </h3>
              <p
                class="font-weight-light grey--text text--darken-1 body-2 mt-1"
              >
                {{ data.created_at | exactDay }}
              </p>
            </v-col>
            <v-col class="text-left" cols="12">
              <div class="font-weight-regular">
                {{ data.message }}
              </div>
            </v-col>
            <v-col cols="12" md="8"> </v-col>
            <v-col cols="12" md="4" class="center"> </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-card>
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
  }),

  created() {
    // window.scrollTo(0, 0);
  },

  computed: {},

  methods: {
    getUser() {},
  },

  filters: {
    exactDay(date) {
      return dayjs(date).format("h:mm a, MMMM DD YYYY");
    },
  },
};
</script>
