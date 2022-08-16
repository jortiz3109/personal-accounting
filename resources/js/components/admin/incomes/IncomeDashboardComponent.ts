import IncomesListComponent from './IncomeListComponent'
import BaseDashboardComponent from "../../base/BaseDashboardComponent";

export default {
    name: 'IncomeDashboardComponent',
    extends: BaseDashboardComponent,
    components: {
        BaseDashboardComponent,
        IncomesListComponent,
    },
    template: `
        <BaseDashboardComponent v-bind="$props" >
            <template #default>
                <IncomesListComponent :fields="fields"/>
            </template>
        </BaseDashboardComponent>
    `
}
