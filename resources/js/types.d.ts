export interface IncomeInterface {
    id: number
    name: string
    description: string
    is_disabled: boolean
    created_at: Date
}

export type Pagination = {
    currentPage: number
    from: number
    path: string
    perPage: number
    to: number
    items: number
}

export type SearchFieldType = {
    type: string,
    inputName: string,
    inputId: string,
    label: string,
    placeholder: string | null
}
