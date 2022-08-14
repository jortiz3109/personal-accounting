import CardComponent from '../../common/CardComponent'
export default {
    name: 'IncomeCreateComponent',
    components: {
        CardComponent
    },
    data: () => ({
        name: null,
        description: null
    }),
    template: `
        <CardComponent></CardComponent>
    `
}
