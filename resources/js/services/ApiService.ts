import {evaluateResponse, makeHeaders, makeRequest, makeURLSearchParams} from './utils'

export const get = async (uri: string, params: Object): Promise<any> => {
    const searchParams = makeURLSearchParams(params)
    const request = makeRequest(uri, searchParams)
    const headers = makeHeaders()

    return await fetch(request, {headers: headers})
        .then((response: Response) => evaluateResponse(response))
        .then(response => response)
        .catch()
}
