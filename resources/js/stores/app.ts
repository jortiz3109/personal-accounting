import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        errors: {
            validation: {}
        },
        message: {
            type: null,
            text: null
        },
        searchParams: {},
        gotoPage: null
    }),
    actions: {
        setValidationErrors(errors: any): void {
            this.errors.validation = errors
        },
        setErrorMessage(message: string): void {
            this.message.type = 'is-danger'
            this.message.text = message
        },
        setSuccessMessage(message: string): void {
            this.message.type = 'is-success'
            this.message.text = message
        },
        setSearchParams(params: Object): void {
            this.searchParams = params
        },
        setGotoPage(page?: number): void {
            this.gotoPage = page
        }
    }
})
