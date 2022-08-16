import {usePaginationStore} from '../stores/pagination';
import {useAppStore} from '../stores/app'

export default {
    name: 'PaginationComponent',
    setup() {
        const appStore = useAppStore()
        const store = usePaginationStore()

        return {appStore, store}
    },
    template: `
        <nav aria-label="Index pagination" class="d-flex justify-items-center align-items-center justify-content-between">
            <ul class="pagination">
                <li class="page-item">
                    <button type="button" :class="{'disabled': !hasPreviousPage}" class="page-link" @click.prevent="gotoPage(store.current_page - 1)">&laquo; Previous</button>
                </li>
                <li class="page-item">
                    <button type="button" :class="{'disabled': !hasNextPage}" class="page-link" @click.prevent="gotoPage(store.current_page + 1)">Next &raquo;</button>
                </li>
            </ul>
            <div v-if="store.items">
                <p class="small text-muted">
                    showing from
                    <span class="fw-semibold">{{ store.from }}</span>
                    to
                    <span class="fw-semibold">{{ store.to }}</span>
                    on page
                    <span class="fw-semibold">{{ store.current_page }}</span>
                </p>
            </div>
        </nav>
    `,
    methods: {
        gotoPage(page: number) {
            this.appStore.setGotoPage(Number(page))
            this.emitter.emit('goto-page')
        }
    },
    computed: {
        hasNextPage: function() {
            return this.store.items && this.store.items === this.store.per_page
        },
        hasPreviousPage: function() {
            return this.store.items && this.store.current_page > 1
        }
    }

}
