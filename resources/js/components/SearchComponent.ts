import {useAppStore} from '../stores/app'
import {reactive} from 'vue'
import CardComponent from './common/CardComponent'
import InputSearchComponent from "./form/inputs/InputSearchComponent";
import InputDateComponent from "./form/inputs/InputDateComponent";

export default {
    name: 'SearchComponent',
    components: {
        CardComponent
    },
    setup() {
        const appStore = useAppStore()
        const supportedFields = {
            name: InputSearchComponent,
            description: InputSearchComponent,
            created_at: InputDateComponent
        }

        const values = reactive({})

        return {appStore, supportedFields, values}
    },
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
        },
    },
    template: `
        <CardComponent>
        <template #default>
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col" v-for="(props, field) in fields" :key="field">
                        <component
                            v-bind="props"
                            :is="supportedFields[field]"
                            :values="values"
                            :errors="this.errors['filters.'.concat(field)]"
                            :inputName="field"
                            :inputId="'filters.'.concat(field)"
                        />
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <button
                            type="submit"
                            class="btn btn-secondary"
                            :class="{'disabled': this.disableButton}"
                            v-text="searchText"/>
                        <button type="button" class="btn btn-secondary ms-2" @click="refresh" v-text="refreshText"/>
                    </div>
                </div>
            </form>
        </template>
        </CardComponent>
    `
}
