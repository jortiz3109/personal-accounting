import SearchComponent from '../SearchComponent'
import NameComponent from '../filters/NameComponent'
import DescriptionComponent from '../filters/DescriptionComponent'
import CreatedAtComponent from '../filters/CreatedAtComponent'
export default {
    components: {
        SearchComponent,
        NameComponent,
        DescriptionComponent,
        CreatedAtComponent
    },
    template: `
        <search-component>
        <template v-slot:inputs="props">
            <div class="row">
                <div class="col">
                    <name-component :params="props.params" />
                </div>
                <div class="col">
                    <description-component :params="props.params" />
                </div>
                <div class="col">
                    <created-at-component :params="props.params" />
                </div>
            </div>
        </template>
        </search-component>
    `
}
