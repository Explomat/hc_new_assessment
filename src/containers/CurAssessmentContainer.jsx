import React from 'react';
import TypeContainer from './TypeContainer';
import CompetenceStageContainer from './CompetenceStageContainer';
import { DropInfo, DropInfoBody } from '../components/modules/dropinfo';
import { connect } from 'react-redux';

const Label = ({ title }) => (
	<div className='cur-assessment__root-title'>
		{title}
	</div>
);

const TypeLabel = ({ title, bossFullname }) => (
	<span className='cur-assessment__title'>
		<strong className='cur-assessment__title--left col-lg-6 col-md-6 col-sm-6 col-xs-6'>
			{title}
		</strong>
		<strong className='cur-assessment__title--right col-lg-6 col-md-6 col-sm-6 col-xs-6'>
			{bossFullname}
		</strong>
	</span>
);

const CurAssessmentContainer = ({ title, changes, competenceStages }) => {
	return (
		<div className='cur-assessment'>
			<Label title={title}/>
			<div className='cur-assessment__changes'>
				{changes.map((c, index) => {
					if (index < changes.length - 1){
						return (
							<DropInfo
								key={c.id}
								label={<TypeLabel {...c}/>}
								transitionTimeout={0.5}
								className='cur-assessment__type-container'
							>
								<DropInfoBody>
									<TypeContainer key={c.id} id={c.id} />
								</DropInfoBody>
							</DropInfo>
						);
					}
					return <TypeContainer key={c.id} id={c.id} />;
				})}
			</div>
			<div className='cur-assessment__competences'>
				{competenceStages.map(c => <CompetenceStageContainer key={c} id={c} />)}
			</div>
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	const assessment = state.assessments.items[ownProps.id];
	return { 
		...assessment,
		changes: assessment.changes.map(c => {
			return {
				id: state.changes[c].id,
				type: state.changes[c].type,
				title: state.changes[c].title,
				bossFullname: state.changes[c].bossFullname
			};
		})
	};
}

export default connect(mapStateToProps)(CurAssessmentContainer);
