import CreateButtonComponent from './buttons/CreateButtonComponent'
import BackButtonComponent from './buttons/BackButtonComponent'

const SUPPORTED_ITEM_TYPES = [
    {type: 'create', 'component': CreateButtonComponent},
    {type: 'back', 'component': BackButtonComponent},
]

export default {
    name: 'ToolbarComponent',
    props: {
        items: {
            required: true,
            type: Object
        }
    },
    methods: {
        itemType(type: string): Object {
            return SUPPORTED_ITEM_TYPES.find(item => item.type === type).component
        },
    },
    template: `
        <div class="d-flex flex-row-reverse bg-light border border-1 rounded rounded-2 p-2 mb-2">
          <Component class="ms-2" v-for="(props, type) of items" :is="itemType(type)" v-bind="props" />
        </div>
        <hr>
    `
}
