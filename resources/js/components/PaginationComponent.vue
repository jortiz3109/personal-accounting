<script lang="ts" setup>
import {usePaginationStore} from '../stores/pagination';
import {useAppStore} from '../stores/app'
import {computed} from "vue";

const appStore = useAppStore()
const store = usePaginationStore()
const emit = defineEmits(['goto:page'])

const hasNextPage = computed(() => store.items && store.items === store.per_page)
const hasPreviousPage = computed(() => store.items && store.current_page > 1)

const gotoPage = (page: number): void => {
    appStore.setGotoPage(Number(page))
    emit('goto:page')
}

</script>
<template>
    <nav aria-label="Index pagination" class="d-flex justify-items-center align-items-center justify-content-between">
        <ul class="pagination">
            <li class="page-item">
                <button :class="{'disabled': !hasPreviousPage}" class="page-link" type="button"
                        v-text="`&laquo; ${$t('pagination.back')}`" @click.prevent="gotoPage(store.current_page - 1)" />
            </li>
            <li class="page-item">
                <button :class="{'disabled': !hasNextPage}" class="page-link" type="button" v-text="`${$t('pagination.next')} &raquo;`"
                        @click.prevent="gotoPage(store.current_page + 1)" />
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
</template>
