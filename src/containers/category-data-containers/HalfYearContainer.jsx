import React from 'react';
import HalfContainer from './HalfContainer';
import { connect } from 'react-redux';

const HalfYearContainer = ({ halves }) => {
	return (
		<div className='half-year clearfix'>
			{halves.map(h => <HalfContainer key={h} id={h} />)}
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	const { id } = ownProps;
	return { ...state.changes[id] };
}

export default connect(mapStateToProps)(HalfYearContainer);