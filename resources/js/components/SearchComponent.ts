import {useAppStore} from '../stores/app'

export default {
    setup() {
        const appStore = useAppStore()
        return {appStore}
    },
    template: `
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="submit">
                    <slot name="inputs" :params="this.params"></slot>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <button type="submit" class="btn btn-secondary" :class="{'disabled': this.disableButton}">Search</button>
                            <button type="button" class="btn btn-secondary ms-2" :class="{'disabled': this.disableButton}" @click="clear">Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            params: {}
        }
    },
    computed: {
      disableButton: function (): boolean {
          return Object.keys(this.params).length === 0
      }
    },
    methods: {
        submit() {
            this.appStore.setSearchParams(this.params)
            this.appStore.setGotoPage(null)
            this.emitter.emit('search')
        },
        clear() {
            this.params = {}
            this.appStore.setSearchParams(this.params)
            this.appStore.setGotoPage(null)
            this.emitter.emit('search:refresh')
        }
    }
}
