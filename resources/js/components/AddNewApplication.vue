<template>
    <v-container>
        <v-row>
            <v-btn
                @click="findFriendsDialog = true"
                outlined
                rounded
                color="primary"
            >
                Add New
            </v-btn>

            <v-dialog v-model="findFriendsDialog" width="500">
                <v-card>
                    <v-card-title class="headline" primary-title>
                        <h2>Add New Application</h2>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-title class="headline" primary-title>
                        <v-text-field
                            v-model="newApplication.label"
                            append-icon="mdi-shield-account"
                            label="Application Name"
                            dense
                            outlined
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-card-title>

                    <v-card-title class="headline" primary-title>
                        <v-textarea
                            v-model="newApplication.description"
                            label="description"
                            :rules="[rules.required]"
                            outlined
                            lines="2"
                            dense
                        />
                    </v-card-title>

                    <v-card-title class="headline" primary-title>
                        <v-file-input
                            v-model="newApplication.image"
                            label="Icon"
                            :rules="[rules.required]"
                            outlined
                            dense
                        />
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-2">
                        <v-btn
                            class="ml-auto"
                            @click="
                                findFriendsDialog = false
                            "
                            outlined
                            color="primary"
                            >Close</v-btn
                        >
                        <v-btn
                            color="primary"
                            @click="submitApplication"
                            >Submit</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>

export default {
    props: ["data"],

    data() {
        return {
            findFriendsDialog: false,
            newApplication: {},
            rules: {
                required: (value) => !!value || "This field is required",
                email: (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
            },
        };
    },

    methods: {
        submitApplication() {
            this.$store.dispatch("submitApplication", this.newApplication);
            this.findFriendsDialog = false;
            this.newApplication={}
        },
    },
};
</script>
