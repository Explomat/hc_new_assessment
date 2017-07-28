import React, { Component } from 'react';
import PaContainer from './PaContainer';
import { connect } from 'react-redux';

class QuarterContainer extends Component {
	render(){
		const {
			title,
			bossFullname,
			pas,
			type,
			category
		} = this.props;
		return (
			<div className='quarter'>
				<div className='quarter__header'>
					<strong className='quarter__title'>{title}</strong>
					<strong className='quarter__boss-fullname'>{bossFullname}</strong>
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


export default connect(mapStateToProps)(QuarterContainer);