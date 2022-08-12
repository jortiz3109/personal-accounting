export default {
    props: {
        params: {
            type: Object,
            required: true,
        },
        label: {
            required: false,
            type: String,
            default: 'Name'
        },
        placeholder: {
            required: false,
            type: String,
            default: 'Name'
        }
    },
    template: `
        <label for="name" class="form-label" v-text="label" />
        <input class="form-control" type="search" name="name" id="name" :placeholder="placeholder" v-model="params.name">
    `
}
