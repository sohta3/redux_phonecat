/// <reference path='../typings/tsd.d.ts'/>

import { connect } from 'react-redux'
import Phonecat from '../components/Phonecat'
import { filterPhones, sortPhones, fetchPhonesIfNeeded } from '../actions'

const mapStateToProps = (state) => {
    return {phones: state.phones}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => dispatch(fetchPhonesIfNeeded('name')),
        onQueryChange: (query) => dispatch(filterPhones(query)),
        onOrderChange: (order) => dispatch(sortPhones(order))
    }
}

const PhonecatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Phonecat)

export default PhonecatContainer