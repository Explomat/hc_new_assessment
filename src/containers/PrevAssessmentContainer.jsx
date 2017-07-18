import React, { Component } from 'react';
import TypeContainer from './TypeContainer';
import CompetenceStageContainer from './CompetenceStageContainer';
import { connect } from 'react-redux';

class PrevAssessmentContainer extends Component {
	
	render(){
		const { title, changes, competenceStages } = this.props;
		return (
			<div className='prev-assessment'>
				<div className='prev-assessment__header'>
					<span className='category__title'>
						<h1>Карьерная лестница</h1>
						{title}
					</span>
				</div>
				<div className='prev-assessment__changes'>
					{changes.map(c => <TypeContainer key={c} id={c} />)}
				</div>
				<div className='prev-assessment__competences'>
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

export default connect(mapStateToProps)(PrevAssessmentContainer);
