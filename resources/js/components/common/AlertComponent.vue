<script setup lang="ts">
const {content} = defineProps<{content: String}>()
</script>
<template>
        <div class="alert alert-info text-center" v-text="content" />
</template>
