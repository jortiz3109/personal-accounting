export default {
    props: {
        params: {
            type: Object,
            required: true,
        },
        label: {
            required: false,
            type: String,
            default: 'Description'
        },
        placeholder: {
            required: false,
            type: String,
            default: 'Description'
        }
    },
    template: `
        <label for="description" class="form-label" v-text="label" />
        <input class="form-control" type="search" name="description" id="description" :placeholder="placeholder" v-model="params.description">
    `
}
