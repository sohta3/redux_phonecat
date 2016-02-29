export function phones(phones = { isFetching: false, didInvalidate: false, phones: [], query: '', sort: 'name', processedPhones: [] }, action) {
    switch (action.type) {
        case 'INVALIDATE_ORDER':
            return Object.assign({}, phones, {
                didInvalidate: true
            })
        case 'REQUEST_PHONES':
            return Object.assign({}, phones, {
                isFetching: true,
                didInvalidate: false,
                phones: [],
                processedPhones: []
            })
        case 'RECEIVE_PHONES':
            return Object.assign({}, phones, {
                isFetching: false,
                didInvalidate: false,
                phones: action.phones,
                processedPhones: action.phones,
                lastUpdated: action.receivedAt
            })
        case 'FILTER_PHONE':
            return Object.assign({}, phones, {
                isFetching: false,
                didInvalidate: false,
                phones: phones.phones,
                processedPhones: phones.phones.filter((phone) => {
                    return (phone.name.toLowerCase()).indexOf((action.query.toLowerCase())) >= 0
                }),
                query: action.query,
                order: phones.order,
                lastUpdated: action.receivedAt
            });
        case 'SORT_PHONE':
            return Object.assign({}, phones, {
                isFetching: false,
                didInvalidate: false,
                phones: phones.phones,
                processedPhones: phones.processedPhones.sort((a, b) => {
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
            return phones
    }
}


export function phone(phone = { isFetching: false, didInvalidate: false, phone: undefined }, action) {
    switch (action.type) {
        case 'REQUEST_PHONE':
            return Object.assign({}, phone, {
                isFetching: true,
                didInvalidate: false,
                phone
            })
        case 'RECEIVE_PHONE':
            return Object.assign({}, phone, {
                isFetching: false,
                didInvalidate: false,
                phone: action.phone,
                mainImageUrl: action.phone.images[0],
                lastUpdated: action.receivedAt
            })
        case 'CHANGE_MAIN_IMAGE':
            return Object.assign({}, phone, {
                isFetching: false,
                didInvalidate: false,
                phone: phone.phone,
                mainImageUrl: action.imageUrl
            })
        default:
            return phone
    }
}
