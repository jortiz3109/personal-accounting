<script lang="ts" setup>
import CardComponent from "../common/CardComponent.vue";

const {model, fields} = defineProps<{ model: Object, fields: Object }>()
const emit = defineEmits(['createNew'])

</script>
<template>
    <CardComponent>
        <template #default>
            <dl class="row">
                <template v-for="(props, name) in fields">
                    <dt class="col-sm-3" v-text="props.label"/>
                    <dd class="col-sm-9" v-text="model[name]"/>
                </template>
            </dl>
            <hr>
            <dl v-if="Boolean(model['created_at'])" class="row">
                <dt class="col-sm-3" v-text="$t('Created at')"/>
                <dd class="col-sm-9" v-text="model['created_at'].toLocaleDateString()"/>
            </dl>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary ms-2" type="button" @click="emit('createNew')"
                        v-text="$t('actions.new')"/>
            </div>
        </template>
    </CardComponent>
</template>
