<script setup lang="ts" >
const {text, route} = defineProps<{text: String, route: String}>()
</script>
<template>
    <a class="btn btn-primary" :href="route" v-text="text"/>
</template>
