import InputComponent from "./InputComponent";

export default {
    name: 'TextAreaComponent',
    extends: InputComponent,
    props: {
        rows: {
            type: Number,
            default: 8
        }
    },
    template: `
        <InputLabelComponent :label="label" :input-id="inputId"/>
        <textarea class="form-control" v-bind="$attrs" v-model="values[inputName]" :name="inputName" :id="inputId"
                  :class="{'is-invalid': errors.length}" :rows="rows"/>
        <FeedbackComponent v-for="error in errors" css="invalid-feedback" :feedback="error"/>
    `
}
