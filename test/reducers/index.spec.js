import expect from 'expect'
import {phones, phone} from '../../reducers/index'

describe('phones reducer', () => {

	const phonesState = [
		{
			"age": 0,
			"id": "motorola-xoom-with-wi-fi",
			"imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
			"name": "Motorola XOOM\u2122 with Wi-Fi",
			"snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
		},
		{
			"age": 1,
			"id": "motorola-xoom",
			"imageUrl": "img/phones/motorola-xoom.0.jpg",
			"name": "MOTOROLA XOOM\u2122",
			"snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
		},
		{
			"age": 2,
			"carrier": "AT&T",
			"id": "motorola-atrix-4g",
			"imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
			"name": "MOTOROLA ATRIX\u2122 4G",
			"snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
		},
		{
			"age": 3,
			"id": "dell-streak-7",
			"imageUrl": "img/phones/dell-streak-7.0.jpg",
			"name": "Dell Streak 7",
			"snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
		}];

	const phoneState = {
		"additionalFeatures": "Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.",
		"android": {
			"os": "Android 3.0",
			"ui": "Android"
		},
		"availability": [
			"Verizon"
		],
		"battery": {
			"standbyTime": "336 hours",
			"talkTime": "24 hours",
			"type": "Other (3250 mAH)"
		},
		"camera": {
			"features": [
				"Flash",
				"Video"
			],
			"primary": "5.0 megapixels"
		},
		"connectivity": {
			"bluetooth": "Bluetooth 2.1",
			"cell": "CDMA 800 /1900 LTE 700, Rx diversity in all bands",
			"gps": true,
			"infrared": false,
			"wifi": "802.11 a/b/g/n"
		},
		"description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
		"display": {
			"screenResolution": "WXGA (1200 x 800)",
			"screenSize": "10.1 inches",
			"touchScreen": true
		},
		"hardware": {
			"accelerometer": true,
			"audioJack": "3.5mm",
			"cpu": "1 GHz Dual Core Tegra 2",
			"fmRadio": false,
			"physicalKeyboard": false,
			"usb": "USB 2.0"
		},
		"id": "motorola-xoom",
		"images": [
			"img/phones/motorola-xoom.0.jpg",
			"img/phones/motorola-xoom.1.jpg",
			"img/phones/motorola-xoom.2.jpg"
		],
		"name": "MOTOROLA XOOM\u2122",
		"sizeAndWeight": {
			"dimensions": [
				"249.0 mm (w)",
				"168.0 mm (h)",
				"12.7 mm (d)"
			],
			"weight": "726.0 grams"
		},
		"storage": {
			"flash": "32000MB",
			"ram": "1000MB"
		}
	};

	it('should handle initial state', () => {
		expect(
			phones(undefined, {})
		).toEqual({
			isFetching: false,
			didInvalidate: false,
			phones: [],
			query: '',
			order: 'name',
			processedPhones: []
		})
	})

	it('should handle INVALIDATE_ORDER', () => {
		expect(
			phones({}, {
				type: 'INVALIDATE_ORDER'
			})
		).toEqual({
			didInvalidate: true
		})
	})

	it('should handle REQUEST_PHONES', () => {
		expect(
			phones({}, {
				type: 'REQUEST_PHONES'
			})
		).toEqual({
			isFetching: true,
			didInvalidate: false,
			phones: [],
			processedPhones: []
		})
	})

	it('should handle RECEIVE_PHONES', () => {
		expect(
			phones({}, {
				type: 'RECEIVE_PHONES',
				phones: phonesState
			})
		).
		toEqual({
			isFetching: false,
			didInvalidate: false,
			phones: phonesState,
			processedPhones: phonesState
		})
	})

	it('should handle FILTER_PHONES', () => {
		expect(
			phones({
				isFetching: false,
				didInvalidate: false,
				phones: phonesState,
				query: '',
				order: 'name',
				processedPhones: phonesState
			},
			 {
				type: 'FILTER_PHONES',
				query: 'DELL'
			})
		).toEqual({
			isFetching: false,
			didInvalidate: false,
			phones: phonesState,
			query: 'DELL',
			order: 'name',
			processedPhones: [phonesState[3]]
		})
	})

	it('should handle SORT_PHONE', () => {
		expect(
			phones({
				isFetching: false,
				didInvalidate: false,
				phones: phonesState,
				query: '',
				order: 'age',
				processedPhones: phonesState
			}, {
				type: 'SORT_PHONES',
				order: 'name',
				query: ''
			})
		).toEqual({
			isFetching: false,
			didInvalidate: false,
			phones: phonesState,
			query: '',
			order: 'name',
			processedPhones: phonesState
		})
	})

	it('should handle initial state', () => {
		expect(
			phone(undefined, {})
		).toEqual({
			isFetching: false,
			didInvalidate: false,
			phone: undefined
		})
	})

	it('should handle REQUEST_PHONE', () => {
		expect(
			phone({
				isFetching: false,
				didInvalidate: false,
				phone: undefined
			}, {
				type: 'REQUEST_PHONE'
			})
		).toEqual({
			isFetching: true,
			didInvalidate: false,
			phone: undefined
		})
	})

	it('should handle RECEIVE_PHONE', () => {
		expect(
			phone({
				isFetching: true,
				didInvalidate: false,
				phone: undefined
			}, {
				type: 'RECEIVE_PHONE',
				phone: phoneState
			})
		).toEqual({
			isFetching: false,
			didInvalidate: false,
			phone: phoneState,
			mainImageUrl: phoneState.images[0]
		})
	})

	it('should handle CHANGE_MAIN_IMAGE', () => {
		expect(
			phone({
				isFetching: false,
				didInvalidate: false,
				phone: phoneState
			}, {
				type: 'CHANGE_MAIN_IMAGE',
				imageUrl: 'img/phones/motorola-xoom.1.jpg'
			})
		).
		toEqual({
			isFetching: false,
			didInvalidate: false,
			phone: phoneState,
			mainImageUrl: 'img/phones/motorola-xoom.1.jpg'
		})
	})
})
