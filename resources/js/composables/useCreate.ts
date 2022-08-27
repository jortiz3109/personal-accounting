import {computed, reactive, ref} from "vue";
import Model from "../models/Model";
import {useAppStore} from "../stores/app";

export function useCreate(service) {

    const submitting = ref(false)
    const model = reactive({} as Model)
    const appStore = useAppStore()

    const createNewOne = (): void => {
        Object.keys(model).forEach(key => delete model[key])
    }

    const handleSubmit = (formValues) => {
        console.log(formValues)
        submitting.value = true
        service.store(formValues)
            .then(response => {
                console.log(response)
                Object.keys(formValues).forEach(key => delete formValues[key])
                Object.assign(model, response)
            })
            .finally(() => submitting.value = false)
    }

    const errors = computed((): Object => appStore.errors.validation)

    return {submitting, model, errors, handleSubmit, createNewOne}
}
