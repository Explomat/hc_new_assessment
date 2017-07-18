import React from 'react';
import QuarterContainer from './category-data-containers/QuarterContainer';
import YearContainer from './category-data-containers/YearContainer';
import HalfYearContainer from './category-data-containers/HalfYearContainer';
import { connect } from 'react-redux';

const views = {
	'quarter': QuarterContainer,
	'year': YearContainer,
	'halfYear': HalfYearContainer
};

const TypeContainer = ({ id, type }) => {
	const DataContainer = views[type];
	return (
		<div className='type'>
			{DataContainer && <DataContainer id={id}/>} 
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	const { id } = ownProps;
	return { ...state.changes[id] };
}


export default connect(mapStateToProps)(TypeContainer);