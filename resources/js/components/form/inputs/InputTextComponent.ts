import InputComponent from './InputComponent'
export default {
    name: 'InputTextComponent',
    extends: InputComponent,
    setup() {
        const type = 'text'
        return { type }
    },
    template: InputComponent.template
}
