export default {
    name: 'InputSearchComponent',
    props: {
        values: {
            type: Object,
            required: true
        },
        error: {
            type: String,
            required: false,
            default: null
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
            type: String
        },
        placeholder: {
            required: false,
            type: String,
            default: null
        }
    },
    template: `
        <label :for="inputId" class="form-label" v-text="label"/>
        <input
            :name="inputName"
            :id="inputId"
            :class="{'is-invalid': error}"
            :placeholder="placeholder"
            class="form-control"
            type="search"
            v-model="values[inputName]">
        <div v-if="error" class="invalid-feedback" v-text="error"/>
    `
}
