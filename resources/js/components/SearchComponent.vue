<script setup lang="ts">
import {useAppStore} from '../stores/app'
import {computed, reactive} from 'vue'
import CardComponent from './common/CardComponent.vue'
import InputSearchComponent from "./form/inputs/InputSearchComponent.vue";
import InputDateComponent from "./form/inputs/InputDateComponent.vue";

const appStore = useAppStore()
const supportedFields = {name: InputSearchComponent, description: InputSearchComponent, created_at: InputDateComponent}
const values = reactive({})
const disableButton = computed((): Boolean => Object.keys(values).length === 0)
const errors = computed((): {} => appStore.errors.validation)
const emit = defineEmits(['search'])

const {fields} = defineProps<{fields: Array<any>}>()

const submit = (): void => {
    prepareToSearch()
    emit('search')
}
const refresh = (): void => {
    Object.keys(values).forEach(key => delete values[key])
    submit()
}

const prepareToSearch = (): void => {
    appStore.setSearchParams(values)
    appStore.setGotoPage(null)
}

</script>
<template>
    <CardComponent>
        <template #default>
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col" v-for="field in fields" :key="field">
                        <component
                            :label="$t(`search.fields.${field}`)"
                            :is="supportedFields[field]"
                            :values="values"
                            :errors="errors[`filters.${field}`] ?? []"
                            :name="field"
                            :id="'filters.'.concat(field)"
                        />
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-secondary" :class="{'disabled': disableButton}"
                                v-text="$t('search.actions.search')"/>
                        <button type="button" class="btn btn-secondary ms-2" @click="refresh"
                                v-text="$t('search.actions.refresh')"/>
                    </div>
                </div>
            </form>
        </template>
    </CardComponent>
</template>
