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
        },
        css: {
            type: Array,
            default: ['btn-primary']

        }
    },
    template: `
        <a class="btn" :class="css" :href="route" v-text="text" />
    `
}
