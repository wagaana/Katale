<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="col-md-12">
              <div v-html="html"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import html from "../../assets/privacyPolicy.html";
export default {
  template: "#ErrorPage",
  data: function () {
    return {
      html: html,
    };
  },

  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
</style>
