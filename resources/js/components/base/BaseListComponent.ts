import TableComponent from "../html/table/TableComponent";
import {ref} from "vue";
import Model from "../../models/Model";

export default {
    name: 'BaseListComponent',
    setup() {
        const loading = ref(false)

        return {loading}
    },
    components: {
        TableComponent
    },
    props: {
        fields: {
            type: Object,
            required: true
        },
    },
    computed: {
        items: (): Model[] => [] as Model[]
    },
    methods: {
        fetchModels() {
            const {fetch} = this.service
            this.loading = true
            fetch().then().finally(() => this.loading = false)
        }
    },
    mounted() {
        this.emitter.on('goto-page', () => this.fetchModels())
        this.emitter.on('search', () => this.fetchModels())
        this.emitter.on('search:refresh', () => this.fetchModels())

        this.fetchModels()
    },
    template: `
        <div v-if="loading" class="alert alert-info">LOADING</div>
        <TableComponent
            :items="items"
            :headings="Object.values(this.fields)"
            :fields="this.fields" />
    `
}
