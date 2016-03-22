/// <reference path='../typings/tsd.d.ts'/>

import * as React from 'react'
import { filterPhones, sortPhones, fetchPhonesIfNeeded } from '../actions'
import * as CSSTransitionGroup from 'react-addons-css-transition-group'

interface PhonecatProps {
	params: any;
	phones: any;
	onFetch: () => any;
	onQueryChange: (query: string) => any;
	onOrderChange: (query: string) => any;
}

export default class Phonecat extends React.Component<PhonecatProps,any> {
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
		this.props.onQueryChange(e.target.value);
		this.props.onOrderChange(e.target.value);
	}

	onOrderChange(e) {
		this.props.onQueryChange(e.target.value);
		this.props.onOrderChange(e.target.value);
	}

	render() {
		const { phones, onQueryChange, onOrderChange } = this.props
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						Search:
						<input type="text" name="query" onChange={this.onQueryChange}/>
						Sort by:
						<select name="orderProp" onChange={this.onOrderChange}>
							<option value="name">Alphabetical</option>
							<option value="age">Newest</option>
						</select>
					</div>


					<div className="col-md-10">
						<ul className="phones view-container">
							{ phones.processedPhones.map((phone) => {
								return <li className="thumbnail" key={phone.id}>
									<a href={'/#/phonecat/' + phone.id} className="thumb">
										<img src={phone.imageUrl}
											 alt={phone.name}/>
									</a>
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


//Phonecat.propTypes = {
//    phones: React.PropTypes.object.isRequired,
//    onQueryChange: React.PropTypes.func.isRequired,
//    onOrderChange: React.PropTypes.func.isRequired
//}

