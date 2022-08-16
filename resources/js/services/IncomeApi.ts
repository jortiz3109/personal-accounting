import {useApi} from './ApiService'
import Income from "../models/Income";
import {usePaginationStore} from '../stores/pagination'
import {useIncomeStore} from '../stores/admin/incomes'

const api = useApi()
const path = '/api/admin/incomes'
const store = useIncomeStore()
const pagination = usePaginationStore()

const mapIncomes = (data: Array<{ id: number, name: string, description: string, is_disabled: boolean, created_at: string }>): void => {
    data.forEach(function (income) {
        store.add(new Income(income.id, income.name, income.description, income.is_disabled, income.created_at))
    })
}

export const useIncomeApi = () => ({
    fetch: (): Promise<void | Income[]> => {
        return api.get(path, {})
            .then(response => {
                store.$reset()
                mapIncomes(response.incomes)
                pagination.set(Object.assign(response.meta, {items: store.total()}))
            })
    },
    store: (data: { name: string, description: string }): Promise<Income> => {
        return api.post(path, data)
            .then(response => new Income(response.data.id, response.data.name, response.data.description, response.data.is_disabled, response.data.created_at))
    }
})
