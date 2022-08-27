<script lang="ts" setup>
import InputLabelComponent from './InputLabelComponent.vue'
import FeedbackComponent from './../FeedbackComponent.vue'

const {rows, values, errors, label} = defineProps<{
    rows?: Number
    values: Object,
    errors: Array<any>,
    label: String,
}>()
</script>
<template>
    <InputLabelComponent :input-id="$attrs.id" :label="label"/>
    <textarea :id="$attrs.id" v-model="values[$attrs.name]" :class="{'is-invalid': errors.length}" :rows="rows ?? 8"
              class="form-control" v-bind="$attrs"/>
    <FeedbackComponent v-for="error in errors" :feedback="error" class="invalid-feedback"/>
</template>
