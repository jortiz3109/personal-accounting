import InputComponent from './InputComponent'
export default {
    name: 'InputDateComponent',
    extends: InputComponent,
    setup() {
        const type = 'date'
        return { type }
    },
    template: InputComponent.template
}
