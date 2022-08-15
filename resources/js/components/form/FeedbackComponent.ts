export default {
    name: 'FeedbackComponent',
    props: {
        css: {
            type: String,
            default: 'invalid-feedback'
        },
        feedback: String
    },
    template: `
        <div :class="css" v-text="feedback" />
    `
}
