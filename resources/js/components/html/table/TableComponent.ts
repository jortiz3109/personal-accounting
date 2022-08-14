import NameComponent from '../../common/tables/td/NameComponent'
import TableColumnComponent from '../../html/table/TableColumnComponent'
import CreatedAtComponent from '../../common/tables/td/CreatedAtComponent'
import DescriptionComponent from '../../common/tables/td/DescriptionComponent'

const SUPPORTED_CELL_TYPES = [
    {type: 'name', component : NameComponent},
    {type: 'created_at', component : CreatedAtComponent},
    {type: 'description', component: DescriptionComponent}
]

export default {
    name: 'TableComponent',
    props: {
        fields: {
            type: Object,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        cellComponentFor: (type: string) => {
            try {
                return SUPPORTED_CELL_TYPES.find(cell => cell.type === type).component
            } catch (e) {
                return TableColumnComponent
            }
        }
    },
    computed: {
        fieldProperties: function () {
            return Object.keys(this.fields)
        },
        fieldTranslations: function () {
            return Object.values(this.fields)
        }
    },
    template: `
        <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead>
            <tr>
                <th v-for="translation of fieldTranslations">{{ translation }}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, id) in items" :key="id">
                <Component v-for="property in fieldProperties" :content="item[property]" :is="cellComponentFor(property)" />
                <td></td>
            </tr>
            </tbody>
            <slot name="table-bottom"></slot>
        </table>
        </div>
    `
}
