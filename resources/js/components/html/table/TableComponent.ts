import TableColumnComponent from '../../html/table/TableColumnComponent'
import NameComponent from '../../common/tables/td/NameComponent'
import CreatedAtComponent from '../../common/tables/td/CreatedAtComponent'
import DescriptionComponent from '../../common/tables/td/DescriptionComponent'
import {shallowRef} from 'vue'

export default {
    name: 'TableComponent',
    data: () => ({
        supportedFields: {
            name: shallowRef(NameComponent),
            created_at: shallowRef(CreatedAtComponent),
            description: shallowRef(DescriptionComponent),
        }
    }),
    components: {
        TableColumnComponent
    },
    props: {
        fields: {
            type: Object,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        itemComponents: {
            type: Object,
            default: {}
        }
    },
    computed: {
        itemProperties: function () {
            return Object.keys(this.fields)
        },
        headings: function () {
            return Object.values(this.fields)
        }
    },
    template: `
        <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead v-if="headings.length">
            <tr>
                <th v-for="heading in headings">{{ heading }}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, id) in items" :key="id">
                <Component :is="supportedFields[property]" v-for="property in itemProperties" :content="item[property]"/>
                <td></td>
            </tr>
            </tbody>
            <slot name="table-bottom"></slot>
        </table>
        </div>
    `
}
