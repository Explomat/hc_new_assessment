import React, { Component } from 'react';
import Assessment from '../components/Assessment';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

class AssessmentContainer extends Component {
	
	componentDidMount(){
		this.props.getAssessment();
	}
	
	render(){
		const { isFetching } = this.props;
		return (
			<div className='assessment-container'>
				{isFetching ? <div className='overlay-loading overlay-loading--show' /> : <Assessment {...this.props}/>}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.assessment };
}

export default connect(mapStateToProps, actionCreators)(AssessmentContainer);