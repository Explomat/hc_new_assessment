import React, { Component } from 'react';
import PrevAssessmentContainer from './PrevAssessmentContainer';
import CurAssessmentContainer from './CurAssessmentContainer';
//import WrapAssessmentContainer from './WrapAssessmentContainer';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

class AssessmentContainer extends Component {
	
	componentDidMount(){
		this.props.getAssessments();
	}
	
	render(){
		const { isFetching, items } = this.props;
		return (
			<div className='assessment-container'>
				{isFetching ?
					<div className='overlay-loading overlay-loading--show' /> :
					<div className='assessments'>
						{items.map(as => {
							return as.type === 'prevAssessment' ?
								<PrevAssessmentContainer key={as.id} id={as.id}/> :
								<CurAssessmentContainer key={as.id} id={as.id}/>;
						})}
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { assessments } = state;
	return {
		...assessments,
		items: Object.values(assessments.items)
	};
}

export default connect(mapStateToProps, actionCreators)(AssessmentContainer);
