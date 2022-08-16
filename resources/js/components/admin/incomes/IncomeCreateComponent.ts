import BaseCreateComponent from '../../base/BaseCreateComponent'
import InputTextComponent from '../../form/inputs/InputTextComponent'
import inputDateComponent from '../../form/inputs/InputDateComponent'
import TextAreaComponent from '../../form/inputs/TextAreaComponent'

import {useIncomeApi} from '../../../services/IncomeApi'
import {provide} from 'vue'

export default {
    name: 'IncomeCreateComponent',
    extends: BaseCreateComponent,
    setup: () => {
        const incomeApi = useIncomeApi()
        const supportedFields = {
            name: { component: InputTextComponent},
            description: { component: TextAreaComponent},
            created_at: { component: inputDateComponent}
        }

        provide('supportedFields', supportedFields)
        provide('service', incomeApi)
    },
    components: {
        BaseCreateComponent
    },
    template: `
        <BaseCreateComponent v-bind="$props"/>
    `
}
