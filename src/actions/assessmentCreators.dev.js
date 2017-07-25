import constants from '../constants';
import { normalize } from 'normalizr';
import uuid from '../utils/uuid';
import toArray from 'lodash/toArray';

import {
	assessments
} from './mock3';
import assessmentSchema from '../schemas';

export function getAssessments(){
	return dispatch => {
		dispatch({ type: constants.ASSESSMENT_GET_DATA });
		
		setTimeout(() => {
			const data = assessments();
			const ndata = normalize(data, assessmentSchema);
			dispatch({
				type: constants.ASSESSMENT_GET_DATA_SUCCESS,
				...ndata
			});
		}, 300);
	};
}

export function addTask(paId, task){
	return (dispatch, getState) => {
		setTimeout(() => {
			const pa = getState().pas[paId];
			dispatch({
				type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
				pa: {
					...pa,
					calcs: []
				}
			});
			
			dispatch({
				type: constants.ASSESSMENT_ADD_TASK_SUCCESS,
				paId,
				task: {
					...task,
					id: uuid(),
					percent: 1000
				}
			});
		}, 300);
	};
}

export function editTask(paId, task){
	return (dispatch, getState) => {
		setTimeout(() => {
			const pa = getState().pas[paId];
			dispatch({
				type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
				pa: {
					...pa,
					calcs: []
				}
			});
			
			dispatch({
				type: constants.ASSESSMENT_EDIT_TASK_SUCCESS,
				paId,
				task
			});
		}, 300);
	};
}

export function removeTasks(paId){
	return (dispatch, getState) => {
		setTimeout(() => {
			const state = getState();
			const pa = state.pas[paId];


			const { tasks } = state;
			const checkedTasks = toArray(tasks).filter(t => t.checked).map(t => {
				return {
					...t,
					isRemoved: true
				};
			});

			dispatch({
				type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
				pa: {
					...pa,
					calcs: []
				}
			});
			dispatch({
				type: constants.ASSESSMENT_REMOVE_TASKS_SUCCESS,
				removedTasks: checkedTasks.reduce((pv, cv) => {
					pv[cv.id] = cv;
					return pv;
				}, {})
			});
		}, 300);
	};
}

export function activateTest(testId){
	return (dispatch, getState) => {
		setTimeout(() => {
			const { tests } = getState();
			dispatch({
				type: constants.ASSESSMENT_ACTIVATE_TEST_SUCCESS,
				test: {
					...tests[testId],
					isAssignTest: true,
					message: 'Тест назначен. Для его прохождения перейдите по ссылке, отправленной вам на почту.'
				}
			});
		}, 300);
	};
}

export function saveCompetences(paId){
	return (dispatch) => {
		setTimeout(() => {
			dispatch({
				type: constants.ASSESSMENT_SAVE_COMPETENCES_SUCCESS,
				paId
			});
		}, 300);
	};
}

export function toggleSelectTask(taskId, val){
	return {
		type: constants.ASSESSMENT_TOGGLE_SELECT_TASK,
		taskId,
		val
	};
}

export function changeUserMarkInCompetence(competenceId, payload){
	return {
		type: constants.ASSESSMENT_CHANGE_USER_MARK_COMPETENCE,
		competenceId,
		payload
	};
}

export function changeBossMarkInCompetence(competenceId, payload){
	return {
		type: constants.ASSESSMENT_CHANGE_BOSS_MARK_COMPETENCE,
		competenceId,
		payload
	};
}

export function changeCommentInCompetence(competenceId, text){
	return {
		type: constants.ASSESSMENT_CHANGE_COMMENT_COMPETENCE,
		competenceId,
		text
	};
}