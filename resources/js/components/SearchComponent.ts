import {useAppStore} from '../stores/app'
import * as _ from 'lodash'
import NameComponent from './common/search/fields/NameComponent'
import DescriptionComponent from './common/search/fields/DescriptionComponent'
import CreatedAtComponent from './common/search/fields/CreatedAtComponent'
import CardComponent from './common/CardComponent'

const SUPPORTED_FIELD_TYPES = [
    {type: 'name', 'component': NameComponent},
    {type: 'description', 'component': DescriptionComponent},
    {type: 'created_at', 'component': CreatedAtComponent}
]

export default {
    name: 'SearchComponent',
    components: {
        CardComponent
    },
    setup() {
        const appStore = useAppStore()
        return {appStore}
    },
    data: () => ({
        values: {}
    }),
    props: {
        fields: {
            required: true,
            type: Object
        },
        searchText: {
            type: String,
            default: 'Search'
        },
        refreshText: {
            type: String,
            default: 'Refresh'
        }
    },
    computed: {
        disableButton: function (): boolean {
            return Object.keys(this.values).length === 0
        },
        errors: function (): Array<any> {
            return this.appStore.errors.validation
        }
    },
    methods: {
        submit(): void {
            this.prepareToSearch()
            this.emitter.emit('search')
        },
        refresh(): void {
            this.values = {}
            this.prepareToSearch()
            this.emitter.emit('search:refresh')
        },
        prepareToSearch(): void {
            this.appStore.setSearchParams(this.values)
            this.appStore.setGotoPage(null)
            this.appStore.setValidationErrors({})
        },
        componentForInput(type: string): Object {
            return SUPPORTED_FIELD_TYPES.find(item => item.type === type).component
        },
        getFieldError(fieldId: string): string | null {
            return _.first(this.errors['filters.' + fieldId])
        },
        makeFieldProps(field, props): Object {
            return Object.assign({}, props, {
                values: this.values,
                error: this.getFieldError(field),
                inputId: 'filters.' + field
            })
        }
    },
    template: `
        <CardComponent>
        <template #default>
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col" v-for="(props, field) in fields" :key="field">
                        <component :is="this.componentForInput(field)" v-bind="makeFieldProps(field, props)"/>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-secondary" :class="{'disabled': this.disableButton}"
                                v-text="searchText"/>
                        <button type="button" class="btn btn-secondary ms-2" @click="refresh" v-text="refreshText"/>
                    </div>
                </div>
            </form>
        </template>
        </CardComponent>
    `
}
