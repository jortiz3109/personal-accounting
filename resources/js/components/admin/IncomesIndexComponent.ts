import {Income} from '../../classes/Income'
import {usePaginationStore} from '../../stores/pagination'
import * as api from '../../services/ApiService'
import {useAppStore} from '../../stores/app'

export default {
    setup() {
        const appStore = useAppStore()
        const paginationStore = usePaginationStore()

        return {appStore, paginationStore}
    },
    data: () => ({
        incomes: [] as Income[],
        path: '/api/admin/incomes',
    }),
    template: `
        <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead>
            <slot name="thead"></slot>
            </thead>
            <tbody>
            <tr :class="{'table-danger': income.isDisabled()}" v-for="income in incomes" :key="income.id">
                <td>{{ income.name }}</td>
                <td>{{ income.description }}</td>
                <td>{{ income.created_at.toLocaleDateString() }}</td>
                <td>

                </td>
            </tr>
            </tbody>
            <slot name="table-bottom"></slot>
        </table>
        </div>
    `,
    mounted() {
        this.emitter.on('goto-page', () => this.fetchIncomes())
        this.emitter.on('search', filters => this.fetchIncomes())
        this.emitter.on('search:refresh', () => this.fetchIncomes())
        this.fetchIncomes()
    },
    methods: {
        fetchIncomes: function() {
            api.get(this.path, Object.assign({}, {page: this.appStore.gotoPage}, {filters: this.appStore.searchParams}))
                .then(response => {
                    this.incomes = response.incomes.map(function (income) {
                        return new Income(income.id, income.name, income.description, income.is_disabled, new Date(income.created_at))
                    })
                    this.paginationStore.set(Object.assign(response.meta, {items: this.incomes.length}))
                })
        }
    }
}
