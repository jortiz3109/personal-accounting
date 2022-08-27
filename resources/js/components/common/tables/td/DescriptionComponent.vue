<script setup lang="ts">
const props = defineProps<{
    content: string
}>()
</script>
<template><td v-text="props.content" /></template>
