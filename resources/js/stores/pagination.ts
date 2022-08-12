import {defineStore} from 'pinia';
import {Pagination} from '../types';

const pagination: Pagination = {
    currentPage: 0,
    from: 0,
    path: '',
    perPage: 0,
    to: 0,
    items: 0
}

export const usePaginationStore = defineStore('pagination', {
    state: () => (pagination) as Pagination,
    actions: {
        set(data: {current_page: number, from: number, path: string, per_page: number, to: number, items: number}) {
            this.currentPage = data.current_page
            this.from = data.from
            this.path = data.path
            this.perPage = data.per_page
            this.to = data.to
            this.items = data.items
        }
    }
})
