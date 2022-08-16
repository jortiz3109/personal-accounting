export interface ModelInterface {
    created_at: Date | null,
    updated_at: Date | null
}

export interface IncomeInterface {
    id: number
    name: string
    description: string
    is_disabled: boolean
}

export type Pagination = {
    current_page: number
    from: number
    path: string
    per_page: number
    to: number
    items: number
}
