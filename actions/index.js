import fetch from 'isomorphic-fetch'

export const filterPhone = (query) => {
    return {
        type: 'FILTER_PHONE',
        query
    }
}

export const sortPhone = (order) => {
    return {
        type: 'SORT_PHONE',
        order
    }
}

export const fetchPhonesIfNeeded = (order) => {
    return (dispatch, getState) => {
        if (shouldFetchPhones(getState().phones, order)) {
            return dispatch(fetchPhones(order))
        }
    }
}

function shouldFetchPhones(state, order) {
    const phones = state.phones
    if (!phones || phones.length == 0) {
        return true
    }
    if (phones.isFetching) {
        return false
    }
    return phones.didInvalidate
}

function fetchPhones(order) {
    return dispatch => {
        dispatch(requestPhones(order))
        return fetch(`http://localhost:3000/phones?order=${order}`)
            .then(response => response.json())
            .then(json => dispatch(receivePhones(order, json)))
    }
}

function requestPhones(order) {
    return {
        type: 'REQUEST_PHONES',
        order
    }
}

function receivePhones(order, json) {
    return {
        type: 'RECEIVE_PHONES',
        order: order,
        phones: json,
        receivedAt: Date.now()
    }
}

export function fetchPhone(id) {
    return dispatch => {
        dispatch(requestPhone(id))
        return fetch(`http://localhost:3000/phones/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receivePhone(json)))
    }
}

function requestPhone(id) {
    return {
        type: 'REQUEST_PHONE',
        id
    }
}

function receivePhone(json) {
    return {
        type: 'RECEIVE_PHONE',
        phone: json,
        receivedAt: Date.now()
    }
}

export function changeMainImage(imageUrl) {
    return {
        type: 'CHANGE_MAIN_IMAGE',
        imageUrl
    }
}
