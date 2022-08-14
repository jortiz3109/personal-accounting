import { useIncomes } from '../../../composables/incomes'
import {useIncomeStore} from '../../../stores/admin/incomes'
import TableComponent from '../../html/table/TableComponent'

export default {
    name: 'IncomeListComponent',
    components: {
        TableComponent
    },
    props: {
        fields: {
            type: Object,
            required: true
        }
    },
    setup() {
        const incomes = useIncomeStore()
        const {fetchIncomes} = useIncomes()
        return {fetchIncomes, incomes}
    },
    mounted() {
        this.emitter.on('goto-page', () => this.fetchIncomes())
        this.emitter.on('search', () => this.fetchIncomes())
        this.emitter.on('search:refresh', () => this.fetchIncomes())

        this.fetchIncomes()
    },
    template: `
      <TableComponent :items="incomes.all()" :fields="this.fields" />
    `
}
