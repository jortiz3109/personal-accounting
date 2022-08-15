import { useUtils } from './utils'
const utils = useUtils()

export const useApi = () => ({
    get: async (uri: string, params: Object): Promise<any> => {
        const request = utils.makeGetRequest(uri, params)
        return utils.requestToApi(request)
    },

    post: async (uri: string, body: Object): Promise<any> => {
        const request = utils.makePostRequest(uri, body)
        return utils.requestToApi(request)
    }
})
