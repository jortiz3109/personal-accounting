import {evaluateResponse, makeHeaders, makeRequest} from './utils'

export const get = async (uri: string, params: any): Promise<any> => {
    const request = makeRequest(uri, params)
    const headers = makeHeaders()

    return await fetch(request, {headers: headers})
        .then((response: Response) => evaluateResponse(response))
        .then(response => response)
        .catch()
}
