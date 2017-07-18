import React, { Component } from 'react';
import CompetenceContainer from './CompetenceContainer';
import { connect } from 'react-redux';

class CompetenceBlockContainer extends Component {

	render(){
		const { title, competences } = this.props;
		return (
			<div className='category-competence clearfix'>
				<div className='category-competence__title'>
					{title}
				</div>
				{competences.map(c => <CompetenceContainer key={c} id={c} />)}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		...state.competenceBlocks[ownProps.id]
	};
}

export default connect(mapStateToProps)(CompetenceBlockContainer);