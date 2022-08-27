<script setup lang="ts">
const {disabled, text} = defineProps<{ disabled: Boolean, text: String }>()
</script>
<template>
    <button class="btn btn-success ms-2" type="submit" v-text="text" :disabled="disabled"/>
</template>
