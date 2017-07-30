import React, { Component } from 'react';
import PrevAssessmentContainer from './PrevAssessmentContainer';
import CurAssessmentContainer from './CurAssessmentContainer';
import { AlertDanger, AlertInfo } from '../components/modules/alert';
import { ButtonDefault } from '../components/modules/button';
import getUrlParams from '../utils/url';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

class AssessmentContainer extends Component {

	constructor(props){
		super(props);

		this.handleSave = this.handleSave.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		this.handleCloseMessageCompetences = this.handleCloseMessageCompetences.bind(this);
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
				error: 'Необходимо заполнить все компетенции'
			});
			return;
		}
		if (!this._isTasksFilled()){
			this.setState({
				error: 'Необходимо, чтобы суммарный вес индивидульных показателей был ровно 100%'
			});
			return;
		}
		const paId = getUrlParams(window.location.href, 'pa_id');
		this.setState({
			error: null
		});
		this.props.saveCompetences(paId);
	}

	handleCloseError(){
		this.setState({ error: null });
	}

	handleCloseMessageCompetences(){
		this.props.changeCompetencesMessage(null);
	}
	
	_isCompetencesFilled(){
		const { competences, isBoss, isCollaborator } = this.props;

		const editedCompetences = competences.filter(c => c.bossMark.isEdit || c.userMark.isEdit);

		const cc = competences.filter(c => {
			const bossPayload = c.bossMark.value.selectedPayload.toString();
			const userPayload = c.userMark.value.selectedPayload.toString();

			if (isBoss && isCollaborator) {
				return c.userMark.isEdit && userPayload !== '0';
			} else if (isBoss){
				return c.bossMark.isEdit && bossPayload !== '0';
			}
			return false;
		});
		return cc.length === editedCompetences.length;
	}

	_isTasksFilled(){
		const { pas, tasks } = this.props;
		return pas.filter(p => {
			if (!p.isEdit){
				return true;
			}
			const _tasks = p.tasks.map(t => tasks[t]);
			return _tasks
				.map(t => t.weight)
				.reduce((f, s) => {
					const fTask = /\d+\.?(\d+)?/.test(f) ? Number(f) : 0;
					const sTask = /\d+\.?(\d+)?/.test(s) ? Number(s) : 0;
					return fTask + sTask;
				}, 0) === 100;
		}).length === pas.length;
	}
	
	render(){
		const {
			isFetching,
			isFetchingCompetences,
			infoMessageCompetences,
			items,
			step,
			isBoss,
			isCollaborator
		} = this.props;
		const { error } = this.state;
		const isSaveButton =
			(isCollaborator && step === 'firstStep') ||
			(isBoss && step === 'secondStep');
		const saveButtonText = step === 'firstStep' ?
			'Сохранить и отправить на утверждение' :
			'Сохранить и завершить оценку';
		const isButtons = isSaveButton;
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
							{infoMessageCompetences && <AlertInfo text={infoMessageCompetences} onClose={this.handleCloseMessageCompetences}/>}
							{isButtons && 
								<div className='assessment-container__buttons'>
									{isSaveButton &&
										<ButtonDefault
											text={saveButtonText}
											className='assessment-container__button'
											onClick={this.handleSave}
											loading={isFetchingCompetences}
										/>
									}
								</div>
							}
						</div>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { app, assessments, competences, pas, tasks } = state;
	return {
		...assessments,
		competences: Object.values(competences),
		pas: Object.values(pas),
		tasks,
		items: Object.values(assessments.items),
		step: app.step,
		isBoss: app.isBoss,
		isCollaborator: app.isCollaborator
	};
}

export default connect(mapStateToProps, actionCreators)(AssessmentContainer);
