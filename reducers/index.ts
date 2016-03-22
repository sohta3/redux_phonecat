/// <reference path='../typings/tsd.d.ts'/>

export function phones(phones = {
	isFetching: false,
	didInvalidate: false,
	phones: [],
	query: '',
	order: 'name',
	processedPhones: []
}, action) {
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
				processedPhones: action.phones
			})
		case 'FILTER_PHONES':
			return Object.assign({}, phones, {
				isFetching: false,
				didInvalidate: false,
				phones: phones.phones,
				processedPhones: phones.phones.filter((phone) => {
					return (phone.name.toLowerCase()).indexOf((action.query.toLowerCase())) >= 0
				}),
				query: action.query
			})
		case 'SORT_PHONES':
			return Object.assign({}, phones, {
				isFetching: false,
				didInvalidate: false,
				phones: phones.phones,
				processedPhones: phones.processedPhones.sort((a, b) => {
					if (action.order == 'name') {
						if (a.name < b.name) {
							return -1;
						} else if (a.name > b.name) {
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
				order: action.order
			})
		default:
			return phones
	}
}


export function phone(phone = {isFetching: false, didInvalidate: false, phone: undefined}, action) {
	switch (action.type) {
		case 'REQUEST_PHONE':
			return Object.assign({}, phone, {
				isFetching: true,
				didInvalidate: false,
				phone: phone.phone
			})
		case 'RECEIVE_PHONE':
			return Object.assign({}, phone, {
				isFetching: false,
				didInvalidate: false,
				phone: action.phone,
				mainImageUrl: action.phone.images[0]
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
