import './bootstrap'
import {createApp} from "vue/dist/vue.esm-bundler.js"
import pinia from '@/store'
import mitt from 'mitt'
import i18n from "@/i18n";

import IncomeDashboardComponent from '@/components/admin/incomes/IncomeDashboardComponent.vue'
import IncomeCreateComponent from '@/components/admin/incomes/IncomeCreateComponent.vue'

const app = createApp({})
app.config.globalProperties.emitter = mitt()

app.component('income-dashboard-component', IncomeDashboardComponent)
app.component('income-create-component', IncomeCreateComponent)

app.use(i18n)
    .use(pinia)
    .mount('#app')
