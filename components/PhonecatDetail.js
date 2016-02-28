import React, { Component, PropTypes } from 'react'
import { fetchPhone } from '../actions'
import { connect } from 'react-redux'

class PhonecatDetail extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        props.onLoad(fetchPhone(props.params.id));
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        console.log('[PhonecatDetail]')
        console.log(nextProps)
    }

    render() {
        const { phone } = this.props
        return (
            <h1>{phone.phone.name}</h1>
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
