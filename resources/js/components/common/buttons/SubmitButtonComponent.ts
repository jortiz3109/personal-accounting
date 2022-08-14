export default {
    name: 'SubmitButtonComponent',
    props: {
        disable: Boolean,
        text: {
            type: String,
            default: 'Submit'
        },
        css: {
            type: Array,
            default: ['btn-success']
        }
    },
    template: `
        <button type="submit" class="btn ms-2" :class="css" v-text="text" :disabled="disable"/>
    `
}
