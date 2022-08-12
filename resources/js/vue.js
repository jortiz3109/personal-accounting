import {createApp} from 'vue/dist/vue.esm-bundler'
import pinia from './store'
import mitt from 'mitt'

import PaginationComponent from './components/PaginationComponent.ts'
import IncomesIndexComponent from './components/admin/IncomesIndexComponent.ts'
import IncomesSearchComponent from './components/admin/IncomesSearchComponent.ts'

const app = createApp({
    components: {
        PaginationComponent,
        IncomesIndexComponent,
        IncomesSearchComponent
    }
})

app.config.globalProperties.emitter = mitt()
app.use(pinia).mount('#app')
