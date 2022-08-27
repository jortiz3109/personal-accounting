<script lang="ts" setup>
import BaseCreateComponent from '../../base/BaseCreateComponent.vue'
import InputTextComponent from '../../form/inputs/InputTextComponent.vue'
import inputDateComponent from '../../form/inputs/InputDateComponent.vue'
import TextAreaComponent from '../../form/inputs/TextAreaComponent.vue'
import {useIncomeApi} from '../../../services/IncomeApi'
import {useCreate} from "../../../composables/useCreate";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const incomeApi = useIncomeApi()
const {submitting, errors, model, handleSubmit, createNewOne} = useCreate(incomeApi)
const fields = {
    name: {
        label: t('admin.incomes.fields.name.label'),
        component: InputTextComponent
    },
    description: {
        label: t('admin.incomes.fields.description.label'),
        component: TextAreaComponent
    }
}

const actions = {
    back: {route: '/admin/incomes', text: t('admin.incomes.titles.index')}
}

</script>
<template>
    <BaseCreateComponent @create-new="createNewOne" @create="handleSubmit" :actions="actions" :errors="errors" :fields="fields" :model="model"
                         :submitting="submitting" :title="$t('admin.incomes.titles.create')"/>
</template>
