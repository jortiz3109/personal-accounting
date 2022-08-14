export default {
    name: 'CardComponent',
    template: `
        <div class="card mb-2">
        <slot name="card-header"></slot>
        <div class="card-body">
            <slot></slot>
        </div>
        </div>
    `
}
