<script setup lang="ts">
import CreateButtonComponent from './buttons/CreateButtonComponent.vue'
import BackButtonComponent from './buttons/BackButtonComponent.vue'

const supportedItemTypes = {
    create: CreateButtonComponent,
    back: BackButtonComponent,
}

const {items} = defineProps({
    items: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="d-flex flex-row-reverse bg-light border border-1 rounded rounded-2 p-2 mb-2">
        <Component class="ms-2" v-for="(props, type) of items" :is="supportedItemTypes[type]" v-bind="props" />
    </div>
</template>
