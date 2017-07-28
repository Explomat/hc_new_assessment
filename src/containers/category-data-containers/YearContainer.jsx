import React, { Component } from 'react';
import PaContainer from './PaContainer';
import { connect } from 'react-redux';

class YearContainer extends Component {
	render(){
		const {
			title,
			bossFullname,
			pas,
			type,
			category
		} = this.props;
		return (
			<div className='year'>
				<div className='year__header'>
					<strong className='year__title'>{title}</strong>
					<strong className='year__boss-fullname'>{bossFullname}</strong>
				</div>
				<div className='pas'>
					{pas.map((p, index) =>
						<PaContainer
							key={index}
							id={p}
							type={type}
							category={category}
						/>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps;
	return { ...state.changes[id] };
}


export default connect(mapStateToProps)(YearContainer);