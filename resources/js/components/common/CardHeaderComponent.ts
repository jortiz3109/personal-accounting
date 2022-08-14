export default {
    name: 'CardHeaderComponent',
    props: {
        cardTitle: String
    },
    template: `
        <div class="card-header d-flex align-items-center justify-content-between">
          <h3 class="card-title mb-0">{{ cardTitle }}</h3>
        </div>
    `
}
