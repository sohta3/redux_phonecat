import React, { Component, PropTypes } from 'react'
import { filterPhone, sortPhone } from '../actions'

class Phonecat extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onOrderChange = this.onOrderChange.bind(this)
  }

  componentWillMount() {
    console.log('componentDidMount!!')
    this.props.onOrderChange(sortPhone('name'));
  }

  incrementIfOdd() {
    //if (this.props.value % 2 !== 0) {
    //  this.props.onIncrement()
    //}
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  onSearchChange(e) {
    console.log(e.target.value)
    this.props.onSearchChange(filterPhone(e.target.value));
    //var newList = this.props.list.filter(function(v) {
    //  return v.indexOf(e.target.value) !== -1;
    //});
    //this.setState({list: newList});
  }

  onOrderChange(e) {
    console.log(e.target.value)
    this.props.onOrderChange(sortPhone(e.target.value));
    //var newList = this.props.list.filter(function(v) {
    //  return v.indexOf(e.target.value) !== -1;
    //});
    //this.setState({list: newList});
  }

  render() {
    const { phones, onIncrement, onDecrement } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
          Search: <input type="text" name="query" onChange={this.onSearchChange} />
          </div>

          Sort by:
          <select name="orderProp" onChange={this.onOrderChange} >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>


          <div className="col-md-10">
            <ul>
            { phones.filter((phone) => {
                return !!phone.visible
              }).map((phone) => {
              return <li><span>{ phone.name }</span></li>
            })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Phonecat.propTypes = {
  phones: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Phonecat
