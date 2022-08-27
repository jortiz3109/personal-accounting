<script setup lang="ts">
import BaseDashboardComponent from '../../base/BaseDashboardComponent.vue'
import IncomesListComponent from './IncomeListComponent.vue'
import {useIncomeApi} from '../../../services/IncomeApi'
import {useIncomeStore} from '../../../stores/admin/incomes'
import {useDashboard} from "../../../composables/useDashboard";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const searchFields = ['name', 'description', 'created_at']
const store = useIncomeStore()
const service = useIncomeApi()

const {loading, fetchModels} = useDashboard(service)

const actions = {
    create: {route: '/admin/incomes/create', text: t('admin.incomes.actions.create')}
}

</script>
<template>
    <BaseDashboardComponent @goto:page="fetchModels" @search="fetchModels" :search-fields="searchFields" :title="$t('admin.incomes.titles.index')" :actions="actions">
        <template #default>
            <IncomesListComponent :items="store.all()" :loading="loading"/>
        </template>
    </BaseDashboardComponent>
</template>
