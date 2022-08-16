import {createApp} from 'vue/dist/vue.esm-bundler'
import pinia from './store'
import mitt from 'mitt'

import IncomeDashboardComponent from './components/admin/incomes/IncomeDashboardComponent'
import IncomeCreateComponent from './components/admin/incomes/IncomeCreateComponent'

const app = createApp({
    components: {
        IncomeDashboardComponent,
        IncomeCreateComponent
    }
})

app.config.globalProperties.emitter = mitt()
app.use(pinia).mount('#app')
