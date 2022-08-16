import type { IncomeInterface } from '../types'
import Model from './Model'

export default class Income extends Model implements IncomeInterface {
    id: number
    name: string
    description: string
    is_disabled: boolean

    constructor(id: number, name: string, description: string, is_disabled: boolean, created_at: string) {
        super(created_at);
        this.id = id
        this.name = name
        this.description = description
        this.is_disabled = is_disabled
    }

    public isDisabled(): boolean {
        return this.is_disabled
    }

    public isEnabled(): boolean {
        return !this.isDisabled()
    }

    static map(data): Income[] {
        return data.map(function (income) {
            return new Income(income.id, income.name, income.description, income.is_disabled, income.created_at)
        })
    }
}
