import React from 'react';
import TypeContainer from './TypeContainer';
import CompetenceStageContainer from './CompetenceStageContainer';
import { DropInfo, DropInfoBody } from '../components/modules/dropinfo';
import { connect } from 'react-redux';

const Label = ({ title, className }) => (
	<strong className={className}>
		{title}
	</strong>
);

const CurAssessmentContainer = ({ title, changes, competenceStages }) => {
	return (
		<div className='cur-assessment'>
			<DropInfo
				expanded
				label={<Label title={title} className='category__title'/>}
				transitionTimeout={0.5}
				classNameBlock='prev-assessment__drop-title'
			>
				<DropInfoBody>
					<div className='cur-assessment__changes'>
						{changes.map((c, index) => {
							if (index < changes.length - 1){
								return (
									<DropInfo
										key={c.id}
										label={<Label title={c.title}/>}
										transitionTimeout={0.5}
										className='prev-assessment__type-container'
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
				</DropInfoBody>
			</DropInfo>
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
				title: state.changes[c].title
			};
		})
	};
}

export default connect(mapStateToProps)(CurAssessmentContainer);
