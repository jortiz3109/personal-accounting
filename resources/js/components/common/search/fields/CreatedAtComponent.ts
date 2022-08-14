import InputDateComponent from '../../../form/inputs/InputDateComponent'

export default {
    name: 'CreatedAtComponent',
    components: {
        InputDateComponent
    },
    props: {
        error: String,
        values: {
            type: Object,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
    },
    template: `
        <InputDateComponent
            :label="label"
            :values="values"
            :error="error"
            input-id="filters.created_at"
            input-name="created_at"/>
    `
}
