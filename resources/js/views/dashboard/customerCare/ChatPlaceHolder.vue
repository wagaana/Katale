<template>
    <v-container class="fill-height" fluid>
        <v-row>
            <v-col lg="12" cols="12">
                <section>
                    <v-parallax :src="social_cover" height="600">
                        <v-layout
                            column
                            align-center
                            justify-center
                            class="white--text"
                        >
                            <h1
                                class="white--text mb-2 display-1 text-xs-center"
                                style="
                                    font-weight: 900;
                                    text-shadow: 3px 2px #000000;
                                "
                            >
                                Chat.
                            </h1>
                            <div
                                class="white--text subheading mb-3 text-xs-center"
                                style="
                                    font-weight: 900;
                                    text-shadow: 2px 2px #000000;
                                "
                            >
                                Never miss out on anything
                            </div>
                        </v-layout>
                    </v-parallax>
                </section>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../../utils/constants";
import mSocial_cover from "../../../../assets/img/neural-net.jpg";

export default {
    data() {
        return {
            uploads: uploads,
            social_cover: mSocial_cover,
        };
    },
};
</script>
