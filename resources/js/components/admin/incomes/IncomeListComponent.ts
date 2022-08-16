import { useIncomeApi } from '../../../services/IncomeApi'
import {useIncomeStore} from '../../../stores/admin/incomes'
import {ref} from 'vue'

import BaseListComponent from '../../base/BaseListComponent'
import Income from "../../../models/Income";

export default {
    name: 'IncomeListComponent',
    extends: BaseListComponent,
    components: {
        BaseListComponent
    },
    computed: {
        items(): Income[] {
            return this.store.all()
        }
    },
    setup() {
        const loading = ref(false)
        const store = useIncomeStore()
        const service = useIncomeApi()

        return {loading, store, service}
    },
    template: BaseListComponent.template
}
