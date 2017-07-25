import React, { Component } from 'react';
import PrevAssessmentContainer from './PrevAssessmentContainer';
import CurAssessmentContainer from './CurAssessmentContainer';
import { AlertDanger } from '../components/modules/alert';
import { ButtonDefault } from '../components/modules/button';
import getUrlParams from '../utils/url';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

class AssessmentContainer extends Component {

	constructor(props){
		super(props);

		this.handleSave = this.handleSave.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		this.state = {
			error: null
		};
	}

	componentDidMount(){
		this.props.getAssessments();
	}

	handleSave(){
		if (!this._isCompetencesFilled()){
			this.setState({
				error: 'Необходимо заполнить все компетенции!'
			});
		} else {
			const paId = getUrlParams(window.location.href, 'pa_id');
			this.setState({
				error: null
			});
			this.props.saveCompetences(paId);
		}
	}

	handleCloseError(){
		this.setState({ error: null });
	}
	
	_isCompetencesFilled(){
		const { competences } = this.props;
		return competences.filter(c => {
			return c.bossMark.value.selectedPayload.toString() !== '0' &&
				c.userMark.value.selectedPayload.toString() !== '0';
		}).length === competences.length;
	}
	
	render(){
		const { isFetching, items, step, isBoss, isCollaborator } = this.props;
		const { error } = this.state;
		return (
			<div className='assessment-container'>
				{isFetching ?
					<div className='overlay-loading overlay-loading--show' /> :
					<div className='assessment-container__wrapper'>
						<div className='assessments'>
							{items.map(as => {
								return as.type === 'prevAssessment' ?
									<PrevAssessmentContainer key={as.id} id={as.id}/> :
									<CurAssessmentContainer key={as.id} id={as.id}/>;
							})}
						</div>
						<div className='assessment-container__footer'>
							{error && <AlertDanger text={error} onClose={this.handleCloseError}/>}
							<div className='assessment-container__buttons'>
								{(isCollaborator && step === 'firstStep') &&
									<ButtonDefault text='Сохранить' className='assessment-container__button' onClick={this.handleSave} />}
								{(isBoss && step === 'secondStep') &&
									<ButtonDefault text='Сохранить' className='assessment-container__button' onClick={this.handleSave} />}
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { app, assessments, competences } = state;
	return {
		...assessments,
		competences: Object.values(competences),
		items: Object.values(assessments.items),
		step: app.step,
		isBoss: app.isBoss,
		isCollaborator: app.isCollaborator
	};
}

export default connect(mapStateToProps, actionCreators)(AssessmentContainer);
