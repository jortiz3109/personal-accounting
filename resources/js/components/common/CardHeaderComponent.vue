<script lang="ts" setup>

const {title} = defineProps<{ title: String }>()
</script>
<template>
    <div class="card-header">
        <h3 class="card-title mb-0" v-text="title"/>
    </div>
</template>
