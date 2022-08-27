<script lang="ts" setup>
import CardComponent from '../common/CardComponent.vue'
import CardHeaderComponent from '../common/CardHeaderComponent.vue'
import ToolbarComponent from '../common/ToolbarComponent.vue'
import CreateForm from "../common/CreateForm.vue"
import ModelCreatedComponent from "../common/ModelCreatedComponent.vue";

const emit = defineEmits(['create', 'createNew'])
const handleSubmit = (event) => emit('create', event)
const {
    title,
    fields,
    actions,
    errors,
    model,
    submitting
} = defineProps<{ title: String, fields: Object, actions: Object, errors: Object, submitting: Boolean, model: Object }>()

</script>
<template>
    <CardComponent>
        <template #card-header>
            <CardHeaderComponent :title="title"/>
        </template>
        <template #default>
            <ToolbarComponent :items="actions"/>
            <ModelCreatedComponent v-if="Object.keys(model).length" :model="model" :fields="fields" @create-new="emit('createNew')"/>
            <CreateForm v-else :errors="errors" :fields="fields" :submitting="submitting" @submit="handleSubmit"/>
        </template>
    </CardComponent>
</template>
