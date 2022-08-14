export default {
    name: 'TableCellTextComponent',
    props: {
        content: {
            required: true
        }
    },
    template: `
        <td v-text="content" />
    `
}
