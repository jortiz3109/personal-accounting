import CardComponent from '../../common/CardComponent'
import CardHeaderComponent from '../../common/CardHeaderComponent'
import SubmitButtonComponent from '../../common/buttons/SubmitButtonComponent'
import InputTextComponent from '../../form/inputs/InputTextComponent'
import inputDateComponent from '../../form/inputs/InputDateComponent'
import TextAreaComponent from '../../form/inputs/TextAreaComponent'
import ToolbarComponent from '../../common/ToolbarComponent'
import {useIncomeApi} from '../../../services/IncomeApi'
import {useAppStore} from '../../../stores/app'
import {reactive, ref} from 'vue'
import * as _ from 'lodash'

const SUPPORTED_FIELD_TYPES = [
    {type: 'name', 'component': InputTextComponent},
    {type: 'description', 'component': TextAreaComponent},
    {type: 'created_at', 'component': inputDateComponent}
]

export default {
    name: 'IncomeCreateComponent',
    setup: () => {
        const formValues = reactive({})
        const income = reactive({})
        const submitting = ref(false)
        const incomeApi = useIncomeApi()
        const appStore = useAppStore()

        return {income, formValues, submitting, incomeApi, appStore}
    },
    components: {
        CardComponent,
        CardHeaderComponent,
        SubmitButtonComponent,
        InputTextComponent,
        ToolbarComponent
    },
    props: {
        title: {
            type: String,
            default: 'Create a new income'
        },
        formFields: {
            type: Object,
            required: true
        },
        actions: {
            type: Object,
            required: true
        }
    },
    methods: {
        submit(): void {
            this.submitting = true
            this.incomeApi.storeIncome(this.formValues)
                .then(response => {
                    Object.keys(this.formValues).forEach(key => delete this.formValues[key])
                    Object.assign(this.income, response.data)
                })
                .finally(() => this.submitting = false)
        },
        createNewOne(): void {
            Object.keys(this.income).forEach(key => delete this.income[key])
        },
        getFieldError(fieldId: string): string | null {
            return _.first(this.errors[fieldId])
        },
        getFieldComponent(name: string): Object {
            return SUPPORTED_FIELD_TYPES.find(field => field.type === name).component
        }
    },
    computed: {
        errors: function (): Array<any> {
            return this.appStore.errors.validation
        },
        created: function (): Boolean {
            return Boolean(Object.values(this.income).length)
        },
    },
    template: `
        <CardComponent>
        <template #card-header>
            <CardHeaderComponent :card-title="title"/>
        </template>
        <template #default>
            <ToolbarComponent :items="actions"/>
            <div v-if="created" class="alert alert-success">
                <h4 class="alert-heading">
                    {{ appStore.message.text }}
                </h4>
                <hr>
                <dl class="row">
                    <template v-for="(props, name) in formFields">
                        <dt class="col-sm-3" v-text="props.label"/>
                        <dd class="col-sm-9" v-text="this.income[name]"/>
                    </template>
                </dl>
                <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-primary ms-2" v-text="title" @click="createNewOne"/>
                </div>
            </div>
            <form v-else @submit.prevent="submit">
                <div class="mb-2" v-for="(props, name) in formFields">
                    <Component
                        :is="getFieldComponent(name)"
                        :error="getFieldError(name)"
                        :inputName="name"
                        :inputId="name"
                        :values="formValues"
                        v-bind="props"/>
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
