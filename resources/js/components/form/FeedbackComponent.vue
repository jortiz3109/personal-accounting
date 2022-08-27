<script lang="ts" setup>
const {feedback} = defineProps<{ feedback: String }>()

</script>
<template>
    <div v-text="feedback"/>
</template>
