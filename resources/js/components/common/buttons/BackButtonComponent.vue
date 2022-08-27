<script lang="ts" setup>
const {text, route} = defineProps<{text: String, route: String}>()
</script>
<template>
    <a class="btn ms-2 btn-secondary" :href="route" v-text="text"/>
</template>
