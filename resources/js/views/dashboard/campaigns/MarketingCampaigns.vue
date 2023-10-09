<template>
  <div class="container">
    <v-row>
      <v-col cols="12" class="py-0">
        <h1 class="font-weight-light mb-0">Campaigns</h1>
        <span class="overline">Manage Marketing Campaigns Here</span>

        <v-card>
          <v-card-text>
            <v-container>
              <div class="row">
                <div class="col-md-3">
                  <v-card>
                    <v-list dense nav>
                      <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        :to="item.href"
                      >
                        <v-list-item-icon>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </div>
                <div class="col-md-9">
                  <router-view></router-view>
                </div>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "campaigns",
          icon: "mdi-message-cog-outline",
          href: "/admin/marketingCampaigns/campaigns",
        },
        {
          title: "campaignOffers",
          icon: "mdi-account-multiple",
          href: "/admin/marketingCampaigns/campaignOffers",
        },
        {
          title: "campaignTargets",
          icon: "mdi-database-settings-outline",
          href: "/admin/marketingCampaigns/campaignTargets",
        },

        {
          title: "templates",
          icon: "mdi-cogs",
          href: "/admin/marketingCampaigns/campaignTemplates",
        },
      ],
    };
  },
};
</script>
