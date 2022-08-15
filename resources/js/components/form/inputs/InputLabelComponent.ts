export default {
    name: 'InputLabelComponent',
    props: {
        inputId: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    template: `
        <label :for="inputId" class="form-label" v-text="label" />
    `
}
