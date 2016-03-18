import { connect } from 'react-redux'
import PhonecatDetail from '../components/PhonecatDetail'
import { fetchPhone, changeMainImage } from '../actions'

const mapStateToProps = (state) => {
    return {phone: state.phone}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (id) => dispatch(fetchPhone(id)),
        onClickImage: (imageUrl) => dispatch(changeMainImage(imageUrl))
    }
}

const PhonecatDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhonecatDetail)

export default PhonecatDetailContainer
