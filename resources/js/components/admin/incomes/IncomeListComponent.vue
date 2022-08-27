<script setup lang="ts">
import BaseListComponent from '../../base/BaseListComponent.vue'
import Income from "../../../models/Income";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const fields = {
    name: {label: t('admin.incomes.fields.name.label')},
    description: {label: t('admin.incomes.fields.description.label')},
    created_at: {label: t('admin.incomes.fields.created_at.label')}
}

const {loading, items} = defineProps<{ loading: Boolean, items: Income[] }>()

</script>
<template>
    <BaseListComponent :items="items" :loading="loading" :fields="fields"/>
</template>
