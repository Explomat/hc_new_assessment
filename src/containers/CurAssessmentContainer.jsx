import React, { Component } from 'react';
import TypeContainer from './TypeContainer';
import CompetenceStageContainer from './CompetenceStageContainer';
import { connect } from 'react-redux';

class CurAssessmentContainer extends Component {
	
	render(){
		const { title, changes, competenceStages } = this.props;
		return (
			<div className='cur-assessment'>
				<div className='cur-assessment__header'>
					<span className='category__title'>
						<h1>Текущая оценка</h1>
						{title}
					</span>
				</div>
				<div className='cur-assessment__changes'>
					{changes.map(c => <TypeContainer key={c} id={c} />)}
				</div>
				<div className='cur-assessment__competences'>
					{competenceStages.map(c => <CompetenceStageContainer key={c} id={c} />)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		...state.assessments.items[ownProps.id]
	};
}

export default connect(mapStateToProps)(CurAssessmentContainer);
