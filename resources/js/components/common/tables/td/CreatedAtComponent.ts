import TableColumnComponent from '../../../html/table/TableColumnComponent'
export default {
    name: 'CreatedAtComponent',
    components: {
        TableColumnComponent
    },
    props: {
        content: Date
    },
    template: `
        <TableColumnComponent :content="content.toLocaleDateString()" />
    `
}
