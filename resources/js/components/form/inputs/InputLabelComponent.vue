<script setup lang="ts">
const {inputId, label} = defineProps<{
    inputId: String,
    label: String
}>()
</script>
<template>
    <label :for="inputId" class="form-label" v-text="label" />
</template>
