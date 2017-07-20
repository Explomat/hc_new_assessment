import React from 'react';
import TypeContainer from './TypeContainer';
import CompetenceStageContainer from './CompetenceStageContainer';
import { DropInfo, DropInfoBody } from '../components/modules/dropinfo';
import { connect } from 'react-redux';

const PrevAssessmentContainer = ({ title, changes, competenceStages }) => {
	const header = (
		<strong className='category__title'>
			{title}
		</strong>
	);

	return (
		<div className='prev-assessment'>
			<DropInfo
				label={header}
				transitionTimeout={0.5}
				classNameBlock='prev-assessment__drop-title'
			>
				<DropInfoBody>
					<div className='prev-assessment__changes'>
						{changes.map(c => <TypeContainer key={c} id={c} />)}
					</div>
					<div className='prev-assessment__competences'>
						{competenceStages.map(c => <CompetenceStageContainer key={c} id={c} />)}
					</div>
				</DropInfoBody>
			</DropInfo>
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	return { 
		...state.assessments.items[ownProps.id]
	};
}

export default connect(mapStateToProps)(PrevAssessmentContainer);
