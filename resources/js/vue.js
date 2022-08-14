import {createApp} from 'vue/dist/vue.esm-bundler'
import pinia from './store'
import mitt from 'mitt'

import IncomesDashboardComponent from './components/admin/incomes/DashboardComponent'
import IncomeCreateComponent from './components/admin/incomes/CreateComponent'

const app = createApp({
    components: {
        IncomesDashboardComponent,
        IncomeCreateComponent
    }
})

app.config.globalProperties.emitter = mitt()
app.use(pinia).mount('#app')
