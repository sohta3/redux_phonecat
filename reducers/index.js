export default function phones(state = { isFetching: false, didInvalidate: false, phones: [], query: '', sort: 'name', processedPhones: [] }, action) {
    switch (action.type) {
        case 'INVALIDATE_ORDER':
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case 'REQUEST_PHONES':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                processedPhones: []
            })
        case 'RECEIVE_PHONES':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                phones: action.phones,
                processedPhones: action.phones,
                lastUpdated: action.receivedAt
            })
        case 'FILTER_PHONE':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                phones: state.phones,
                processedPhones: state.phones.filter((phone) => {
                    return (phone.name.toLowerCase()).indexOf((action.query.toLowerCase())) >= 0
                }),
                query: action.query,
                order: state.order,
                lastUpdated: action.receivedAt
            });
        case 'SORT_PHONE':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                phones: state.phones,
                processedPhones: state.phones.sort((a, b) => {
                    if (action.order == 'name') {
                        if (a.name < b.name) {
                            return -1;
                        } else if (a.name > b.name ){
                            return 1;
                        } else {
                            return 0;
                        }
                    } else if (action.order == 'age') {
                        return a.age - b.age;
                    } else {
                        return 0;
                    }
                }),
                query: action.query,
                order: action.order,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

