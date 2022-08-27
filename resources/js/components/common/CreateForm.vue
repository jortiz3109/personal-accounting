<script lang="ts" setup>
import SubmitButtonComponent from "./buttons/SubmitButtonComponent.vue";
import {computed, reactive} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const emit = defineEmits(['submit'])
const formValues = reactive({})

const {
    fields,
    errors,
    submitting,
} = defineProps<{ fields: Object, errors: Object, submitting: Boolean }>()

const submitText = computed(() => submitting ? t('submitting') : t('save'))
const handleSubmit = () => emit('submit', formValues)
</script>
<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="(props, field) in fields" :key="field" class="mb-2">
            <Component
                :is="props.component"
                :errors="errors[field] ?? []"
                :id="field"
                :name="field"
                :values="formValues"
                :label="props.label"
                :placeholder="props.placeholder"
                />
        </div>
        <hr>
        <div class="d-flex justify-content-end">
            <SubmitButtonComponent
                :disabled="submitting"
                :text="submitText"
                class="w-100 wmd-75"/>
        </div>
    </form>
</template>
