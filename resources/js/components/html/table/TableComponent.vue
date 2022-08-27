<script setup lang="ts">
import NameComponent from '../../common/tables/td/NameComponent.vue'
import CreatedAtComponent from '../../common/tables/td/CreatedAtComponent.vue'
import DescriptionComponent from '../../common/tables/td/DescriptionComponent.vue'
import AlertComponent from '../../common/AlertComponent.vue'
import Model from "../../../models/Model";
import {computed} from "vue";

const supportedFields = {
    name: NameComponent,
    created_at: CreatedAtComponent,
    description: DescriptionComponent,
}

const {fields, items} = defineProps<{
    fields: Object
    items: Model[],
}>()

const fieldProperties = computed((): Array<String> => Object.keys(fields))
const fieldsLength = computed((): Number => Object.keys(fields).length)

</script>
<template>
    <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead>
            <tr>
                <th v-for="field in fields" v-text="field.label" />
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="items.length" v-for="(item, id) in items" :key="id">
                <Component :is="supportedFields[property]" v-for="property in fieldProperties" :content="item[property]"/>
                <td></td>
            </tr>
            <tr v-else>
                <td :colspan="fieldsLength + 1">
                    <AlertComponent :content="$t('messages.empty-results')" />
                </td>
            </tr>
            </tbody>
            <slot name="table-bottom"></slot>
        </table>
    </div>
</template>
