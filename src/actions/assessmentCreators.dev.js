import constants from '../constants';
import { normalize } from 'normalizr';
import uuid from '../utils/uuid';

import {
	assessments
} from './mock2';
import assessmentSchema from '../schemas';

export function getAssessment(){
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
			const pa = getState().pas[paId];
			dispatch({
				type: constants.ASSESSMENT_UPDATE_CALCS_IN_PA,
				pa: {
					...pa,
					calcs: []
				}
			});
			dispatch({
				type: constants.ASSESSMENT_REMOVE_TASKS_SUCCESS,
				paId
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

export function toggleSelectTask(taskId, val){
	return {
		type: constants.ASSESSMENT_TOGGLE_SELECT_TASK,
		taskId,
		val
	};
}