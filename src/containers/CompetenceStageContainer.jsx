import React, { Component } from 'react';
import CompetenceBlockContainer from './CompetenceBlockContainer';
import { connect } from 'react-redux';

class CompetenceStageContainer extends Component {
	
	render(){
		const { title, tasksHeader, competenceBlocks } = this.props;
		return (
			<div className='competence-block clearfix'>
				<div className='competence-block__header'>
					<strong>{title}</strong>
				</div>
				<div className='competence-table'>
					<div className='competence-table__header'>
						{tasksHeader.map((th, index) =>
							<span
								key={index}
								className='competence-table__th-name'
							>
								{th}
							</span>
						)}
					</div>
					<div className='competence-table__body'>
						{competenceBlocks.map(cc =>
							<CompetenceBlockContainer key={cc} id={cc} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		...state.competenceStages[ownProps.id]
	};
}

export default connect(mapStateToProps)(CompetenceStageContainer);
