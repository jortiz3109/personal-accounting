<script setup lang="ts">
import SearchComponent from "../SearchComponent.vue";
import CardComponent from "../common/CardComponent.vue";
import CardHeaderComponent from "../common/CardHeaderComponent.vue";
import ToolbarComponent from "../common/ToolbarComponent.vue";
import PaginationComponent from "../PaginationComponent.vue";

const {searchFields, actions, title} = defineProps<{
    searchFields: Array<any>,
    actions: Object,
    title: String
}>()

const emit = defineEmits(['search', 'goto:page'])

</script>
<template>
    <SearchComponent @search="emit('search')" :fields="searchFields"/>
    <CardComponent>
        <template #card-header>
            <CardHeaderComponent :title="title"/>
        </template>
        <template #default>
            <ToolbarComponent :items="actions"/>
            <slot></slot>
        </template>
    </CardComponent>
    <PaginationComponent @goto:page="emit('goto:page')"/>
</template>
