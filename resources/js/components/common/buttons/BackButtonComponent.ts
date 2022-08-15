export default {
    name: 'BackButtonComponent',
    props: {
        route: {
            type: String,
            required: true
        },
        text: {
            type: String,
            default: 'Back'
        },
        css: {
            type: Array,
            default: ['btn-secondary']
        }
    },
    template: `
        <a class="btn ms-2" :class="css" :href="route" v-text="text" />
    `
}
