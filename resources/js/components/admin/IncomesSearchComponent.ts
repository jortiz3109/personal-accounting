import SearchComponent from '../SearchComponent'
export default {
    components: {
        SearchComponent
    },
    data() {
        return {
            fields: [
                {type: 'text', inputName: 'name', inputId: 'filters.name', placeholder: 'Name', label: 'Name'},
                {type: 'text', inputName: 'description', inputId: 'filters.description', placeholder: 'Description', label: 'Description'},
                {type: 'date', inputName: 'created_at', inputId: 'filters.created_at', label: 'Created at', placeholder: 'Created at'}
            ]
        }
    },
    template: `
        <search-component :fields="fields" />
    `
}
