import * as api from '../services/ApiService'
import {Income} from "../classes/Income";
import {usePaginationStore} from '../stores/pagination'
import {useIncomeStore} from '../stores/admin/incomes'

const path = '/api/admin/incomes'
const incomes = useIncomeStore()
const pagination = usePaginationStore()

const mapIncomes = (data: Array<{ id: number, name: string, description: string, is_disabled: boolean, created_at: string }>): void => {
    data.forEach(function (income) {
        incomes.add(new Income(income.id, income.name, income.description, income.is_disabled, new Date(income.created_at)))
    })
}

export const useIncomes = () => ({
    fetchIncomes(): void {
        api.get(path, {})
            .then(response => {
                incomes.reset()
                mapIncomes(response.incomes)
                pagination.set(Object.assign(response.meta, {items: incomes.total()}))
            })
    }
})
