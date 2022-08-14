import TableColumnComponent from "../../../html/table/TableColumnComponent";
export default {
    name: 'DescriptionComponent',
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
