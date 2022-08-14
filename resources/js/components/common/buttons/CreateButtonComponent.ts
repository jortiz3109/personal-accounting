export default {
    name: 'CreateButtonComponent',
    props: {
        route: {
            type: String,
            required: true
        },
        text: {
            type: String,
            default: 'Create'
        }
    },
    template: `
        <a class="btn btn-secondary" :href="route" v-text="text" />
    `
}
