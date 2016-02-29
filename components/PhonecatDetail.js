import React, { Component, PropTypes } from 'react'
import { fetchPhone } from '../actions'
import { connect } from 'react-redux'

class PhonecatDetail extends Component {
    constructor(props) {
        super(props)
        props.onLoad(fetchPhone(props.params.id));
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        console.log('[PhonecatDetail]')
        console.log(nextProps)
    }

	checkmark(val) {
		return val ? '\u2713' : '\u2718';
	}

    render() {
        const phone = this.props.phone.phone
        console.log('====================================================================')
        console.log(this.props)
        console.log(this.props.phone.isFetching)
        if (this.props.phone.isFetching) {
            return (<div>loading...</div>)
        }

        return (
            <div>
            <img src={phone.images[0]} className="phone" />

            <h1>{ phone.name }</h1>
            <p>{phone.description}</p>

            <ul className="phone-thumbs">
                { phone.images.map((img) => {
                    return <li><img src={img}/></li>
                })}
            </ul>

            <ul className="specs">
                <li>
                    <span>Availability and Networks</span>
                <dl>
                    <dt>Availability</dt>
                        { phone.availability.map((av) => {
                            <dd>{av}</dd>
                        })}
                    </dl>
            </li>
            <li>
            <span>Battery</span>
            <dl>
            <dt>Type</dt>
            <dd>{phone.battery.type}</dd>
            <dt>Talk Time</dt>
            <dd>{phone.battery.talkTime}</dd>
            <dt>Standby time (max)</dt>
            <dd>{phone.battery.standbyTime}</dd>
            </dl>
            </li>
            <li>
            <span>Storage and Memory</span>
            <dl>
            <dt>RAM</dt>
            <dd>{phone.storage.ram}</dd>
            <dt>Internal Storage</dt>
            <dd>{phone.storage.flash}</dd>
            </dl>
            </li>
            <li>
            <span>Connectivity</span>
            <dl>
            <dt>Network Support</dt>
            <dd>{phone.connectivity.cell}</dd>
            <dt>WiFi</dt>
            <dd>{phone.connectivity.wifi}</dd>
            <dt>Bluetooth</dt>
            <dd>{phone.connectivity.bluetooth}</dd>
            <dt>Infrared</dt>

            <dd>{ (() => {
                return this.checkmark(phone.connectivity.infrared)
            })()}</dd>

            <dt>GPS</dt>
            <dd>{phone.connectivity.gps}</dd>
            </dl>
            </li>
            <li>
            <span>Android</span>
            <dl>
            <dt>OS Version</dt>
            <dd>{phone.android.os}</dd>
            <dt>UI</dt>
            <dd>{phone.android.ui}</dd>
            </dl>
            </li>
            <li>
            <span>Size and Weight</span>
            <dl>

            <dt>Dimensions</dt>
            { phone.sizeAndWeight.dimensions.map((dim) => {
                return <dd>{dim}</dd>
            })}

            <dt>Weight</dt>
            <dd>{phone.sizeAndWeight.weight}</dd>
            </dl>
            </li>
            <li>
            <span>Display</span>
            <dl>
            <dt>Screen size</dt>
            <dd>{phone.display.screenSize}</dd>
            <dt>Screen resolution</dt>
            <dd>{phone.display.screenResolution}</dd>
            <dt>Touch screen</dt>
            <dd>{phone.display.touchScreen}</dd>
            </dl>
            </li>
            <li>
            <span>Hardware</span>
            <dl>
            <dt>CPU</dt>
            <dd>{phone.hardware.cpu}</dd>
            <dt>USB</dt>
            <dd>{phone.hardware.usb}</dd>
            <dt>Audio / headphone jack</dt>
            <dd>{phone.hardware.audioJack}</dd>
            <dt>FM Radio</dt>
            <dd>{phone.hardware.fmRadio}</dd>
            <dt>Accelerometer</dt>
            <dd>{phone.hardware.accelerometer}</dd>
            </dl>
            </li>
            <li>
            <span>Camera</span>
            <dl>
            <dt>Primary</dt>
            <dd>{phone.camera.primary}</dd>
            <dt>Features</dt>
            <dd>{phone.camera.features.join(', ')}</dd>
            </dl>
            </li>
            <li>
            <span>Additional Features</span>
            <dd>{phone.additionalFeatures}</dd>
            </li>
            </ul>
            </div>
        )
    }
}

PhonecatDetail.propTypes = {
    onLoad: PropTypes.func.isRequired
}

export default connect(
(state) => {
    return  {phone: state.phone}
},
(dispatch) => {
    return {
        onLoad: (action) => dispatch(action)
    }
})(PhonecatDetail);
