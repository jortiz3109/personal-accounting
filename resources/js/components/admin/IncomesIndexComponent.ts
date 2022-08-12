import useIncomes from '../../composables/incomes';
import {useIncomeStore} from '../../stores/admin/incomes'

export default {
    setup() {
        const {fetchIncomes} = useIncomes()
        const incomes = useIncomeStore()
        return {fetchIncomes, incomes}
    },
    template: `
        <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead>
            <slot name="thead"></slot>
            </thead>
            <tbody>
            <tr v-for="income in incomes.all()" :key="income.id">
                <td>{{ income.name }}</td>
                <td>{{ income.description }}</td>
                <td>{{ income.created_at.toLocaleDateString() }}</td>
                <td></td>
            </tr>
            </tbody>
            <slot name="table-bottom"></slot>
        </table>
        </div>
    `,
    mounted() {
        this.emitter.on('goto-page', () => this.fetchIncomes())
        this.emitter.on('search', () => this.fetchIncomes())
        this.emitter.on('search:refresh', () => this.fetchIncomes())

        this.fetchIncomes()
    }
}
