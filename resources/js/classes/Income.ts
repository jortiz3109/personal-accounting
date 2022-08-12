import type { IncomeInterface } from "../types"

export class Income implements IncomeInterface {
    id: number
    name: string
    description: string
    is_disabled: boolean
    created_at: Date

    constructor(id: number, name: string, description: string, is_disabled: boolean, created_at: Date) {
        this.id = id
        this.name = name
        this.description = description
        this.is_disabled = is_disabled
        this.created_at = created_at
    }

    public isDisabled(): boolean {
        return this.is_disabled
    }

    public isEnabled(): boolean {
        return !this.isDisabled()
    }

    static map(data): Income[] {
        return data.map(function (income) {
            return new Income(income.id, income.name, income.description, income.is_disabled, new Date(income.created_at))
        })
    }
}
