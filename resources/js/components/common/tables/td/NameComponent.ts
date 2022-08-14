import TableColumnComponent from '../../../html/table/TableColumnComponent'
export default {
    name: 'NameComponent',
    components: {
        TableColumnComponent
    },
    props: {
        content: String
    },
    template: `
        <TableColumnComponent :content="content" />
    `
}
