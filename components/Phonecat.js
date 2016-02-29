import React, { Component, PropTypes } from 'react'
import { filterPhone, sortPhone, fetchPhonesIfNeeded } from '../actions'
import { connect } from 'react-redux'

class Phonecat extends Component {
  constructor(props) {
    super(props)
    this.onQueryChange = this.onQueryChange.bind(this)
    this.onOrderChange = this.onOrderChange.bind(this)
  }

  componentWillMount() {
    console.log('[Phonecat] componentDidMount!!')
    this.props.onFetch(fetchPhonesIfNeeded())
  }

  componentWillReceiveProps(nextProps) {

    console.log('nextProps:')
    console.log(nextProps)

    if (!!nextProps.phones.phones && !nextProps.phones.order) {
      this.props.onOrderChange(sortPhone('name'));
    }
  }

  onQueryChange(e) {
    this.props.onQueryChange(filterPhone(this.refs.theQuery.value));
    this.props.onOrderChange(sortPhone(this.refs.theOrder.value));
  }

  onOrderChange(e) {
    this.props.onQueryChange(filterPhone(this.refs.theQuery.value));
    this.props.onOrderChange(sortPhone(this.refs.theOrder.value));
  }

  render() {
    const { phones, onQueryChange, onOrderChange } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
          Search: <input type="text" name="query" ref="theQuery" onChange={this.onQueryChange} />
          </div>

          Sort by:
          <select name="orderProp" ref="theOrder" onChange={this.onOrderChange} >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>


          <div className="col-md-10">
            <ul className="phones">
            { phones.processedPhones.map((phone) => {
              return <li className="thumbnail" key={phone.id}>
                <a href={'/#/phonecat/' + phone.id} className="thumb"><img src={phone.imageUrl} alt={phone.name} /></a>
                <a href={'/#/phonecat/' + phone.id}>{phone.name}</a>
                <p>{phone.snippet}</p>
                </li>
            })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Phonecat.propTypes = {
  phones: PropTypes.object.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired
}

export default connect(
    (state) => {
  return  {phones: state.phones}
},
(dispatch) => {
  return {
    dispatch: dispatch,
    onFetch: (action)  => dispatch(action),
    onQueryChange: (action)  => dispatch(action),
    onOrderChange : (action) => dispatch(action)
}
})(Phonecat);
