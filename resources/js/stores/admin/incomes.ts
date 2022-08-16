import {defineStore} from 'pinia'
import Income from '../../models/Income'

export const useIncomeStore = defineStore('incomes', {
    state: () => ({
        page: null,
        incomes: [] as Income[]
    }),
    actions: {
        all(): Income[] {
            return this.incomes
        },
        add(income: Income): void {
            this.incomes.push(income)
        },
        total(): number {
            return this.incomes.length
        },
        reset: function (): void {
            this.$reset()
        }
    }
})
