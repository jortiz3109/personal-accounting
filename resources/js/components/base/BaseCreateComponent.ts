import CardComponent from '../common/CardComponent'
import CardHeaderComponent from '../common/CardHeaderComponent'
import SubmitButtonComponent from '../common/buttons/SubmitButtonComponent'
import ToolbarComponent from '../common/ToolbarComponent'

import {inject, reactive, ref} from 'vue'
import {useAppStore} from '../../stores/app'
import Model from '../../models/Model'

export default {
    name: 'BaseCreateComponent',
    components: {
        CardComponent,
        CardHeaderComponent,
        SubmitButtonComponent,
        ToolbarComponent
    },
    setup: () => {
        const formValues = reactive({})
        const model = reactive({} as Model)
        const submitting = ref(false)
        const appStore = useAppStore()

        const supportedFields = inject('supportedFields')
        const service = inject('service')

        const createNewOne = (): void => {
            Object.keys(model).forEach(key => delete model[key])
        }

        const handleSubmit =  () => {
            submitting.value = true
            // @ts-ignore
            service.store(formValues)
                .then(response => {
                    console.log(response)
                    Object.keys(formValues).forEach(key => delete formValues[key])
                    Object.assign(model, response)
                })
                .finally(() => submitting.value = false)
        }

        return {model, formValues, submitting, appStore, createNewOne, supportedFields, handleSubmit}
    },
    props: {
        title: {
            type: String,
            default: 'Create a new model'
        },
        formFields: {
            type: Object,
            required: true
        },
        actions: {
            type: Object,
            required: true
        },
    },
    computed: {
        modelCreated() {
            return Boolean(Object.values(this.model).length)
        },
        errors() {
            return this.appStore.errors.validation
        }
    },
    template: `
        <CardComponent>
        <template #card-header>
            <CardHeaderComponent :card-title="title"/>
        </template>
        <template #default>
            <ToolbarComponent :items="actions"/>
            <div v-if="modelCreated">
                <div class="alert alert-success mb-2" v-text="appStore.message.text" />
                <CardComponent>
                    <template #default>
                        <dl class="row">
                            <template v-for="(props, name) in formFields">
                                <dt class="col-sm-3" v-text="props.label"/>
                                <dd class="col-sm-9" v-text="this.model[name]"/>
                            </template>
                        </dl>
                        <hr>
                        <dl class="row">
                            <dt class="col-sm-3" v-text="'Created at'" />
                            <dd class="col-sm-9" v-text="this.model.created_at.toLocaleDateString()" />
                        </dl>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary ms-2" v-text="title" @click="createNewOne"/>
                        </div>
                    </template>
                </CardComponent>
            </div>
            <form v-else @submit.prevent="handleSubmit">
                <div class="mb-2" v-for="(props, field) in formFields" :key="field">
                    <Component
                        v-bind="props"
                        :is="supportedFields[field].component"
                        :errors="this.errors[field]"
                        :inputName="field"
                        :inputId="field"
                        :values="formValues"/>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                    <SubmitButtonComponent class="w-100 wmd-75" :text="submitting ? 'Submitting' : 'Save'" :disabled="submitting"/>
                </div>
            </form>
        </template>
        </CardComponent>
        `
}
