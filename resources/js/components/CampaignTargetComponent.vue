<template>
    <div class="container">
        <div class="col-md-12 col-12">
            <label>Query parameters</label>
            <div class="row">
                <div class="col-md-3">
                    <v-select
                        v-model="param.field"
                        :items="queryParams"
                        item-text="label"
                        item-value="id"
                        label="Table field"
                        placeholder="Select Table field"
                        dense
                        outlined
                    />
                </div>
                <div class="col-md-3">
                    <v-select
                        v-model="param.mCondition"
                        :items="conditions"
                        item-text="label"
                        item-value="id"
                        label="Query condition"
                        placeholder="Select Query condition"
                        dense
                        outlined
                    />
                </div>
                <div class="col-md-3">
                    <v-text-field
                        v-model="param.value"
                        label="Query Value"
                        placeholder="Select Query value"
                        dense
                        outlined
                    />
                </div>
                <div class="col-md-3">
                    <v-btn
                        color="primary"
                        block
                        depressed
                        @click="
                            params.push(param);
                            param = {};
                        "
                        >Set condition</v-btn
                    >
                </div>
            </div>
            <v-data-table
                :headers="tableHeaders"
                :items="params"
                v-if="params.length > 0"
            >
                <template v-slot:item.mCondition="props">
                    {{ getConditionLabel(props.item.mCondition) }}
                </template>
                <template v-slot:item.action="props">
                    <v-btn
                        color="error"
                        small
                        depressed
                        @click="deleteParam(props.item)"
                    >
                        Delete
                        <v-icon right>mdi-delete-forever</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";

export default {
    props: ["campaignTarget"],
    data() {
        return {
            table: "",
            param: {
                field: null,
                mCondition: null,
                value: null,
            },
            rules: [(v) => v <= 40 || "Exclude 40% of the records"],
            params: [],
            queryParams: [
                { id: "id", label: "User Id" },
                { id: "email", label: "Email Address" },
                { id: "phone", label: "Phone Number" },
                { id: "name", label: "User Name" },
                { id: "email_verified", label: "Email Varified" },
                { id: "level", label: "User level" },
                { id: "dob", label: "Date Of Birth" },
                { id: "gender", label: "User Gender" },
                { id: "created_at", label: "Join Date" },
            ],
            tableHeaders: [
                { text: "Table field", value: "field" },
                { text: "Query Condition", value: "mCondition" },
                { text: "Query Value", value: "value" },
                { text: "Action", value: "action" },
            ],
            conditions: [
                { id: "=", label: "Equal To" },
                { id: ">", label: "Greater Than" },
                { id: "<", label: "Less Than" },
            ],
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
