import {defineStore} from 'pinia'
import {Income} from '../../classes/Income'

export const useIncomeStore = defineStore('incomes', {
    state: () => ({
        page: null,
        incomes: [] as Income[]
    }),
    actions: {
        all: function(): Income[] {
            return this.incomes
        },
        add: function(income: Income) {
            this.incomes.push(income)
        },
        total: function (): number {
            return this.incomes.length
        },
        reset: function (): void {
            this.$reset()
        }
    }
})
