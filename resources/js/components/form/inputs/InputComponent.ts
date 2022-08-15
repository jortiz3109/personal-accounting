import InputLabelComponent from './InputLabelComponent'
import FeedbackComponent from '../FeedbackComponent'
import {ref} from "vue";
export default {
    name: 'InputComponent',
    components: {
        InputLabelComponent,
        FeedbackComponent
    },
    setup() {
        const type = ref('text')
        return {type}
    },
    props: {
        values: {
            type: Object,
            required: true
        },
        errors: {
            type: Array,
            default: []
        },
        label: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputId: {
            type: String,
            required: true
        },
    },
    template: `
        <InputLabelComponent :label="label" :input-id="inputId" />
        <input class="form-control" :type="type" :name="inputName" :id="inputId" :class="{'is-invalid': errors.length}" v-bind="$attrs" v-model="values[inputName]">
        <FeedbackComponent v-for="error in errors" css="invalid-feedback" :feedback="error" />
    `,
}
