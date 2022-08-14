export default {
    name: 'TextAreaComponent',
    props: {
        values: {
            type: Object,
            default: {}
        },
        error: {
            type: String,
            required: false,
            default: null
        },
        inputName: {
            type: String,
            required: true
        },
        inputId: {
            type: String,
            required: true
        },
        label: {
            required: true,
            type: String
        },
        placeholder: {
            required: false,
            type: String,
            default: null
        },
        rows: {
          type: Number,
          default: 8
        }
    },
    template: `
        <label :for="inputId" class="form-label" v-text="label" />
        <textarea
            class="form-control"
            :name="inputName"
            :id="inputId"
            :class="{'is-invalid': error}"
            :placeholder="placeholder"
            :rows="rows"
            v-model="values[inputName]"></textarea>
        <div v-if="error" class="invalid-feedback" v-text="error"/>
    `
}
