<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>
<template>
    <div class="py-5 bg-light text-center" v-text="t('messages.loading')" />
</template>
