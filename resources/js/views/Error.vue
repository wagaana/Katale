<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-card height="400">
                            <v-layout
                                column
                                align-center
                                justify-center
                                class="white--text fill-height"
                                fill-height
                            >
                                <h1
                                    class="white--text mb-2 display-1 text-xs-center"
                                    style="
                                        font-weight: 900;
                                        text-shadow: 3px 2px #000000;
                                    "
                                >
                                    Error...
                                </h1>
                                <div
                                    class="white--text subheading mb-3 text-xs-center"
                                    style="
                                        font-weight: 900;
                                        text-shadow: 2px 2px #000000;
                                    "
                                >
                                    Requested Page Not Found
                                </div>
                                <h1
                                    class="white--text mb-2 display-1 text-xs-center"
                                    style="
                                        font-size: 900;
                                        font-weight: 900;
                                        text-shadow: 3px 2px #000000;
                                    "
                                >
                                    404
                                </h1>
                                <v-btn
                                    class="blue lighten-2 mt-5"
                                    dark
                                    large
                                    @click="goBack"
                                >
                                    Go Home
                                </v-btn>
                            </v-layout>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    template: "#ErrorPage",

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
