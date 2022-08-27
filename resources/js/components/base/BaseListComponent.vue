<script lang="ts" setup>
import TableComponent from "../html/table/TableComponent.vue";
import LoadingComponent from "../common/LoadingComponent.vue";
import Model from "../../models/Model";

const {fields, loading, items} = defineProps<{
    fields: Object,
    loading: Boolean,
    items: Model[]
}>()

</script>
<template>
    <LoadingComponent v-if="loading"/>
    <TableComponent v-else :fields="fields" :items="items"/>
</template>
