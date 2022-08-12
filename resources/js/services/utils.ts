import {useAppStore} from '../stores/app'
import pinia from '../store'
import qs from 'qs'

export const HTTP_UNPROCESSABLE_ENTITY = 422

const appStore = useAppStore(pinia)

export const evaluateResponse = (response) => {
    if (response.ok) {
        return response.json()
    }

    response.json().then(body => {
        if (HTTP_UNPROCESSABLE_ENTITY === response.status) {
            appStore.setErrorMessage(body.message)
            appStore.setValidationErrors(body.errors)
        }
    })

    const error = setError(response)
    return Promise.reject(error)
}

export const setError = (response) => {
    return Object.assign({}, {
        status: response.status,
        statusText: response.statusText
    })
}

export const makeRequest = (uri: string, params: object): Request => {
    const options = {
        headers: makeHeaders()
    }

    uri = uri.concat('?', makeURLSearchParams(params).toString())

    return new Request(uri, options)
}

export const makeHeaders = (): Headers => {
    const headers = new Headers()
    headers.append('accept', 'application/json')

    return headers
}

export const makeURLSearchParams = (params: Object): URLSearchParams => {
    Object.assign(params, {page: appStore.gotoPage}, {filters: appStore.searchParams})
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

