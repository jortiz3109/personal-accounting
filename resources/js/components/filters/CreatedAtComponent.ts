export default {
    props: {
        params: {
            type: Object,
            required: true,
        },
        label: {
            required: false,
            type: String,
            default: 'Created at'
        },
        placeholder: {
            required: false,
            type: String,
            default: 'Created at'
        }
    },
    template: `
        <label for="created_at" class="form-label" v-text="label" />
        <input class="form-control" type="date" name="created_at" id="created_at" :placeholder="placeholder" v-model="params.created_at">
    `
}
