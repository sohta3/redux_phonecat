import React, { Component, PropTypes } from 'react'
import { filterPhone, sortPhone, fetchPhonesIfNeeded } from '../actions'

class Phonecat extends Component {
  constructor(props) {
    super(props)
    this.onQueryChange = this.onQueryChange.bind(this)
    this.onOrderChange = this.onOrderChange.bind(this)
  }

  componentWillMount() {
    console.log('componentDidMount!!')
    this.props.dispatch(fetchPhonesIfNeeded())
    //this.props.onOrderChange(sortPhone('name'));
  }

  componentWillReceiveProps(nextProps) {

    console.log('=================================================')
    console.log(nextProps)

    if (!nextProps.states.order) {
      this.props.onOrderChange(sortPhone('name'));
    }
  }

  onQueryChange(e) {
    console.log(e.target.value)
    this.props.onQueryChange(filterPhone(e.target.value));
  }

  onOrderChange(e) {
    console.log(e.target.value)
    this.props.onOrderChange(sortPhone(e.target.value));
  }

  render() {
    const { states, onQueryChange, onOrderChange } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
          Search: <input type="text" name="query" onChange={this.onQueryChange} />
          </div>

          Sort by:
          <select name="orderProp" onChange={this.onOrderChange} >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>


          <div className="col-md-10">
            <ul>
            { states.processedPhones.map((phone) => {
              return <li key={phone.id}><span>{ phone.name }</span></li>
            })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Phonecat.propTypes = {
  states: PropTypes.object.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired
}

export default Phonecat
