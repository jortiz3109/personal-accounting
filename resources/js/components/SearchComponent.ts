import {useAppStore} from '../stores/app'
import InputDateComponent from './form/inputs/InputDateComponent'
import InputTextComponent from './form/inputs/InputTextComponent'
import {SearchFieldType} from '../types'
import * as _ from 'lodash'

const SUPPORTED_FIELD_TYPES = [
    {type: 'date', 'component': InputDateComponent},
    {type: 'text', 'component': InputTextComponent}
]

export default {
    setup() {
        const appStore = useAppStore()
        return {appStore}
    },
    components: {
        InputTextComponent,
        InputDateComponent
    },
    props: {
        fields: Array<SearchFieldType>
    },
    template: `
        <div class="card">
        <div class="card-body">
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col" v-for="field of fields" :key="field.inputId">
                        <component
                            :is="inputType(field.type)"
                            :filters="this.params"
                            :error="this.getFieldError(field.inputId)"
                            :input-id="field.inputId"
                            :input-name="field.inputName"
                            :label="field.label"
                            :placeholder="field.placeholder"
                        />
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-secondary" :class="{'disabled': this.disableButton}">
                            Search
                        </button>
                        <button type="button" class="btn btn-secondary ms-2" :class="{'disabled': this.disableButton}" @click="clear">
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    `,
    data() {
        return {
            params: {}
        }
    },
    computed: {
        disableButton: function (): boolean {
            return Object.keys(this.params).length === 0
        },
        errors: function(): Array<any> {
            return this.appStore.errors.validation
        }
    },
    methods: {
        submit(): void {
            this.appStore.setSearchParams(this.params)
            this.appStore.setGotoPage(null)
            this.appStore.setValidationErrors({})
            this.emitter.emit('search')
        },
        clear(): void {
            this.params = {}
            this.appStore.setSearchParams(this.params)
            this.appStore.setGotoPage(null)
            this.emitter.emit('search:refresh')
        },
        inputType(type: string): Object {
            try {
                return SUPPORTED_FIELD_TYPES.find(item => item.type === type).component
            } catch (e) {
                return InputTextComponent
            }
        },
        getFieldError(fieldId: string): string|null {
            return _.first(this.errors[fieldId])
        }
    }
}
