import _ from 'lodash'
export default {
    props: {
        error: {
            type: String,
            required: false
        },
        filters: {
            type: Object,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputId: {
            type: String,
            required: true
        },
        label: {
            required: true,
            type: String,
        },
        placeholder: {
            required: false,
            type: String,
            default: null
        }
    },
    template: `
        <label :for="inputId" class="form-label" v-text="label" />
        <input class="form-control" type="date" :name="inputName" :id="inputId" :class="{'is-invalid': error}" v-model="filters[inputName]">
        <div v-if="error" class="invalid-feedback" v-text="error" />
    `
}