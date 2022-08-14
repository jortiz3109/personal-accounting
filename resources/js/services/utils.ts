import {useAppStore} from '../stores/app'
import pinia from '../store'
import qs from 'qs'

const HTTP_OK = 200
const HTTP_CREATED = 201
const HTTP_UNPROCESSABLE_ENTITY = 422

const appStore = useAppStore(pinia)

const setError = (response) => {
    return Object.assign({}, {
        status: response.status,
        statusText: response.statusText
    })
}

const makeRequest = (uri: string, options: Object = {}): Request => {
    Object.assign(options, {headers: makeHeaders()})

    return new Request(uri, options)
}
const evaluateAsSuccess = (response: Response): Promise<any> => {
    return response.json().then(body => {
        switch (response.status) {
            case HTTP_CREATED: {
                appStore.setSuccessMessage(body.message)
                break;
            }
        }

        return body
    })
}

const evaluateResponse = (response) => {
    if (response.ok) {
        return evaluateAsSuccess(response)
    }

    response.json().then(body => {
        switch (response.status) {
            case HTTP_UNPROCESSABLE_ENTITY: {
                appStore.setErrorMessage(body.message)
                appStore.setValidationErrors(body.errors)
            }
        }
    })

    const error = setError(response)
    return Promise.reject(error)
}

const makeURLSearchParams = (params: Object): URLSearchParams => {
    Object.assign(params, {page: appStore.gotoPage, filters: appStore.searchParams})
    Object.assign(params, JSON.parse(JSON.stringify(params), (key, value) => {
        if (value == '' || value == [] || value == {})
            return null;
        return value;
    }))

    const options = {
        skipNulls: true,
    }

    return new URLSearchParams(qs.stringify(params, options))
}

export const useUtils = () => ({
    requestToApi: async (request: Request): Promise<any> => {
        appStore.setValidationErrors({})
        return await fetch(request)
            .then((response: Response) => evaluateResponse(response))
            .then(response => response)
    },
    makeGetRequest: (uri: string, params: object): Request => {
        uri = uri.concat('?', makeURLSearchParams(params).toString())
        return makeRequest(uri)
    },

    makePostRequest: (uri: string, body: Object): Request => {
        const options = {method: 'post', body: JSON.stringify(body)}
        return makeRequest(uri, options);
    },

})

const makeHeaders = (): Headers => {
    const headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('content-type', 'application/json')

    return headers
}

