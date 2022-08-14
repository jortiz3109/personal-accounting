import {useApi} from './ApiService'
import {Income} from "../classes/Income";
import {usePaginationStore} from '../stores/pagination'
import {useIncomeStore} from '../stores/admin/incomes'

const api = useApi()
const path = '/api/admin/incomes'
const incomeApi = useIncomeStore()
const pagination = usePaginationStore()

const mapIncomes = (data: Array<{ id: number, name: string, description: string, is_disabled: boolean, created_at: string }>): void => {
    data.forEach(function (income) {
        incomeApi.add(new Income(income.id, income.name, income.description, income.is_disabled, new Date(income.created_at)))
    })
}

export const useIncomeApi = () => ({
    fetchIncomes(): void {
        api.get(path, {})
            .then(response => {
                mapIncomes(response.incomes)
                pagination.set(Object.assign(response.meta, {items: incomeApi.total()}))
            })
    },
    storeIncome(data: { name: string, description: string }): Promise<any> {
        return api.post(path, data)
    }
})
