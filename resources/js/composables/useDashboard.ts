import {onMounted, ref} from "vue";

export function useDashboard(service) {
    const loading = ref(false)

    const fetchModels = () => {
        loading.value = true
        service.get().then().finally(() => loading.value = false)
    }

    onMounted(() => fetchModels())

    return {loading, fetchModels}
}
