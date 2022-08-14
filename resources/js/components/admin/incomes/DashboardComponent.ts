import IncomesListComponent from './ListComponent'
import CardComponent from '../../common/CardComponent'
import CardHeaderComponent from '../../common/CardHeaderComponent'
import SearchComponent from '../../SearchComponent'
import PaginationComponent from '../../PaginationComponent'
import ToolbarComponent from '../../common/ToolbarComponent'

export default {
    name: 'IncomeDashboardComponent',
    components: {
        SearchComponent,
        IncomesListComponent,
        CardComponent,
        CardHeaderComponent,
        ToolbarComponent,
        PaginationComponent
    },
    props: {
        searchFields: {
            type: Object,
            required: true
        },
        actions: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        fields: {
            type: Object,
            required: true
        }
    },
    template: `
        <SearchComponent :fields="searchFields"/>
        <CardComponent>
        <template #card-header>
            <CardHeaderComponent :card-title="title" />
        </template>
        <template #default>
            <ToolbarComponent :items="actions"/>
            <IncomesListComponent :fields="fields"/>
        </template>
        </CardComponent>
        <PaginationComponent/>
    `
}
