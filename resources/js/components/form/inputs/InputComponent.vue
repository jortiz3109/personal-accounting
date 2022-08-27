<script lang="ts" setup>
import InputLabelComponent from './InputLabelComponent.vue'
import FeedbackComponent from './../FeedbackComponent.vue'

const {values, label, errors} = defineProps<{
    values: Object,
    label: String,
    errors: Array<any>,
}>()

</script>
<template>
    <InputLabelComponent :input-id="$attrs.id" :label="label"/>
    <input v-model="values[$attrs.name]" v-bind="$attrs" :class="{'is-invalid': errors.length}" class="form-control">
    <FeedbackComponent v-for="error in errors" :feedback="error" class="invalid-feedback"/>
</template>
