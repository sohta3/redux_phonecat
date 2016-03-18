import React, { Component, PropTypes } from 'react'
import { filterPhones, sortPhones, fetchPhonesIfNeeded } from '../actions'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Phonecat extends Component {
    constructor(props) {
        super(props)
        this.onQueryChange = this.onQueryChange.bind(this)
        this.onOrderChange = this.onOrderChange.bind(this)
    }

    componentWillMount() {
        this.props.onFetch()
    }

    componentWillReceiveProps(nextProps) {
        //if (nextProps.phones.phones.length > 0 && !nextProps.phones.order) {
        //    this.props.onOrderChange('name');
        //}
    }

    onQueryChange(e) {
        this.props.onQueryChange(this.refs.theQuery.value);
        this.props.onOrderChange(this.refs.theOrder.value);
    }

    onOrderChange(e) {
        this.props.onQueryChange(this.refs.theQuery.value);
        this.props.onOrderChange(this.refs.theOrder.value);
    }

    render() {
        const { phones, onQueryChange, onOrderChange } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        Search: <input type="text" name="query" ref="theQuery" onChange={this.onQueryChange}/>
                        Sort by:
                        <select name="orderProp" ref="theOrder" onChange={this.onOrderChange}>
                            <option value="name">Alphabetical</option>
                            <option value="age">Newest</option>
                        </select>
                    </div>


                    <div className="col-md-10">
                        <ul className="phones view-container">
                            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500}
                                                     transitionLeaveTimeout={300}>
                                { phones.processedPhones.map((phone) => {
                                    return <li className="thumbnail" key={phone.id}>
                                        <a href={'/#/phonecat/' + phone.id} className="thumb"><img src={phone.imageUrl}
                                                                                                   alt={phone.name}/></a>
                                        <a href={'/#/phonecat/' + phone.id}>{phone.name}</a>
                                        <p>{phone.snippet}</p>
                                    </li>
                                })}
                            </ReactCSSTransitionGroup>
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

export default Phonecat
