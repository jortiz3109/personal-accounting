import InputSearchComponent from '../../../form/inputs/InputSearchComponent'

export default {
    name: 'DescriptionComponent',
    components: {
        InputSearchComponent
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
        <InputSearchComponent
            :label="label"
            :values="values"
            :placeholder="placeholder"
            :error="error"
            input-id="filters.description"
            input-name="description"/>
    `
}
