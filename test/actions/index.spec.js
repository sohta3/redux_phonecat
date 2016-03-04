import expect from 'expect'
import * as actions from '../../actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('filterPhone should create FILTER_PHONE action', () => {
    expect(actions.filterPhone('nexus')).toEqual({
      type: 'FILTER_PHONE',
      query: 'nexus'
    })
  })

  // Async Action
  it('fetchPhonesIfNeeded should create RECEIVE_PHONES action', (done) => {
    const phones = [{ "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."}]
    const order = 'name';

    nock('http://localhost:3000/')
      .get('/phones?order=name')
      .reply(200, phones)

    const expectedActions = [
      { type: 'REQUEST_PHONES', order: order },
      { type: 'RECEIVE_PHONES', order: order, phones: phones }
    ]
    const store = mockStore({ phones: [] }, expectedActions, done)
    store.dispatch(actions.fetchPhonesIfNeeded(order))
  })

  // Async Action
  it('fetchPhone should create RECEIVE_PHONE action', (done) => {
    const phone = {
      "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
      "android": {
        "os": "Android 3.0",
        "ui": "Honeycomb"
      },
      "availability": [
        ""
      ],
      "battery": {
        "standbyTime": "336 hours",
        "talkTime": "24 hours",
        "type": "Other ( mAH)"
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
        "cell": "",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 b/g/n"
      },
      "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
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
      "id": "motorola-xoom-with-wi-fi",
      "images": [
        "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "img/phones/motorola-xoom-with-wi-fi.1.jpg",
        "img/phones/motorola-xoom-with-wi-fi.2.jpg",
        "img/phones/motorola-xoom-with-wi-fi.3.jpg",
        "img/phones/motorola-xoom-with-wi-fi.4.jpg",
        "img/phones/motorola-xoom-with-wi-fi.5.jpg"
      ],
      "name": "Motorola XOOM\u2122 with Wi-Fi",
      "sizeAndWeight": {
        "dimensions": [
          "249.1 mm (w)",
          "167.8 mm (h)",
          "12.9 mm (d)"
        ],
        "weight": "708.0 grams"
      },
      "storage": {
        "flash": "32000MB",
        "ram": "1000MB"
      }
    }

    const id = 'motorola-xoom-with-wi-fi'

    nock('http://localhost:3000/')
        .get('/phones/' + id)
        .reply(200, phone)

    const expectedActions = [
      { type: 'REQUEST_PHONE', id: id },
      { type: 'RECEIVE_PHONE', phone: phone }
    ]
    const store = mockStore({}, expectedActions, done)
    store.dispatch(actions.fetchPhone(id))
  })

  it('changeMainImage should create CHANGE_MAIN_IMAGE action', () => {
    expect(actions.changeMainImage('/img/phones/droid-2-global-by-motorola.2.jpg')).toEqual({
      type: 'CHANGE_MAIN_IMAGE',
      imageUrl: '/img/phones/droid-2-global-by-motorola.2.jpg'
    })
  })
})
