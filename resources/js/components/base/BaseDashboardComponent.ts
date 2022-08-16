import SearchComponent from "../SearchComponent";
import CardComponent from "../common/CardComponent";
import CardHeaderComponent from "../common/CardHeaderComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import PaginationComponent from "../PaginationComponent";

export default {
    name: 'BaseDashboardComponent',
    components: {
        SearchComponent,
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
            <slot></slot>
        </template>
        </CardComponent>
        <PaginationComponent/>
    `
}
