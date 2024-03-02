<template>
  <v-row class="py-2 px-2">
    <v-col cols="12" sm="12" order="-1" order-sm="2">
      <h4 class="font-weight-light mb-0">Publisher</h4>
    </v-col>

    <v-col cols="12" sm="12" order="-1" order-sm="2">
      <v-card class="px-2 py-2">
        <v-row>
          <v-col cols="12" offset-sm="0" sm="3" class="py-4 center">
            <v-avatar size="60">
              <v-img class="card-img" :src="`/${data.profile_picture}`"></v-img>
            </v-avatar>
          </v-col>

          <v-col cols="12" sm="8">
            <v-row>
              <v-col cols="12">
                <h2 class="title cyan--text hover">
                  {{ data.authorName }}
                </h2>
                <p class="font-weight-light grey--text text--darken-1 body-2">
                  {{ data.email }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  template: "#page",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
