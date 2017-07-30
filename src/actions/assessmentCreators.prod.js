import { get, post } from '../utils/ajax';
import { url } from '../config';
import constants from '../constants';
import { normalize } from 'normalizr';
import toArray from 'lodash/toArray';

import { error } from './appCreators';
import queryString from 'query-string';

import assessmentSchema from '../schemas';

export function getAssessments(){
	return dispatch => {
		dispatch({ type: constants.ASSESSMENT_GET_DATA });
		
		const uriParams = queryString.parse(location.search);
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'Assessment',
			pa_id: uriParams.pa_id
		});
		get(path)
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				dispatch({
					type: constants.ASSESSMENT_GET_DATA_SUCCESS,
					...normalize(data, assessmentSchema)
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function addTask(paId, type, category, task){
	return (dispatch, getState) => {
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'AddTask'
		});
		post(path, JSON.stringify({ pa_id: paId, type, category, task }))
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				const pa = getState().pas[paId];
				dispatch({
					type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
					pa: {
						...pa,
						calcs: data.calcs
					}
				});
				
				dispatch({
					type: constants.ASSESSMENT_ADD_TASK_SUCCESS,
					paId,
					task: data.task
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function editTask(paId, type, category, task){
	return (dispatch, getState) => {
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'EditTask'
		});
		post(path, JSON.stringify({ pa_id: paId, type, category, task }))
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				const pa = getState().pas[paId];
				dispatch({
					type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
					pa: {
						...pa,
						calcs: data.calcs
					}
				});
				
				dispatch({
					type: constants.ASSESSMENT_EDIT_TASK_SUCCESS,
					paId,
					task: data.task
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function removeTasks(paId, type, category){
	return (dispatch, getState) => {
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'RemoveTasks'
		});
		const { tasks } = getState();
		const checkedTasks = toArray(tasks).filter(t => t.checked).map(t => {
			return {
				...t,
				isRemoved: true
			};
		});
		
		post(path, JSON.stringify({ pa_id: paId, type, category, tasks: checkedTasks }))
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				const pa = getState().pas[paId];
				dispatch({
					type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
					pa: {
						...pa,
						calcs: data.calcs
					}
				});
				dispatch({
					type: constants.ASSESSMENT_REMOVE_TASKS_SUCCESS,
					removedTasks: checkedTasks.reduce((pv, cv) => {
						pv[cv.id] = cv;
						return pv;
					}, {})
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function activateTest(testId){
	return (dispatch) => {
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'ActivateTest'
		});
		post(path, JSON.stringify({ test_id: testId }))
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				dispatch({
					type: constants.ASSESSMENT_ACTIVATE_TEST_SUCCESS,
					test: data.test
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function saveCompetences(paId){
	return (dispatch, getState) => {
		dispatch({
			type: constants.ASSESSMENT_SAVE_COMPETENCES
		});

		const { competences } = getState();
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'SaveCompetences',
			pa_id: paId
		});
		post(path, JSON.stringify({ competences: Object.values(competences) }))
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				window.location.href = data.url;
				/*dispatch({
					type: constants.ASSESSMENT_SAVE_COMPETENCES_SUCCESS
				});
				dispatch({
					type: constants.ASSESSMENT_CHANGE_COMPETENCES_MESSAGE,
					message: data.message
				});*/
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});
	};
}

export function toggleSelectTask(taskId, val){
	return {
		type: constants.ASSESSMENT_TOGGLE_SELECT_TASK,
		taskId,
		val
	};
}

export function changeUserMarkInCompetence(competenceId, payload, text){
	return {
		type: constants.ASSESSMENT_CHANGE_USER_MARK_COMPETENCE,
		competenceId,
		payload,
		text
	};
}

export function changeBossMarkInCompetence(competenceId, payload, text){
	return {
		type: constants.ASSESSMENT_CHANGE_BOSS_MARK_COMPETENCE,
		competenceId,
		payload,
		text
	};
}

export function changeCommentInCompetence(competenceId, text){
	return {
		type: constants.ASSESSMENT_CHANGE_COMMENT_COMPETENCE,
		competenceId,
		text
	};
}

export function changeCompetencesMessage(message){
	return {
		type: constants.ASSESSMENT_CHANGE_COMPETENCES_MESSAGE,
		message
	};
}