import {defineStore} from 'pinia/dist/pinia'

export const useIncomeStore = defineStore('incomes', {
    state: () => ({
        incomes: [],
        meta: {}
    }),
    actions: {
        setIncomes(incomes) {
            this.incomes = incomes
        }
    }
})
