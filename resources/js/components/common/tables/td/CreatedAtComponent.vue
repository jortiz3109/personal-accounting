<script setup lang="ts">
const props = defineProps<{
    content: Date
}>()
</script>
<template><td v-text="props.content.toLocaleDateString()" /></template>
