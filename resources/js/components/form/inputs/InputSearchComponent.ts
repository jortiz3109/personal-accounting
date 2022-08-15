import InputComponent from './InputComponent'
export default {
    name: 'InputSearchComponent',
    extends: InputComponent,
    setup() {
        const type = 'search'
        return { type }
    },
    template: InputComponent.template
}
