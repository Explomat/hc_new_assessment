/* import { get } from '../utils/ajax';
import { url } from '../config';*/
import constants from '../constants';
import { normalize } from 'normalizr';
import uuid from '../utils/uuid';
// import { info } from './appCreators';
import {
	getMockAssessment
} from './mock';
import assessmentSchema from '../schemas';

export function getAssessment(){
	return dispatch => {
		dispatch({ type: constants.ASSESSMENT_GET_DATA });
		
		setTimeout(() => {
			const data = getMockAssessment();
			dispatch({
				type: constants.ASSESSMENT_GET_DATA_SUCCESS,
				...normalize(data, assessmentSchema)
			});
		}, 300);
		
		/* const path = config.url.createPath({
			server_name: 'mytests',
			action_name: 'Tests',
			search,
			page,
			order
		});
		get(path, true)
		.then(resp => JSON.parse(resp))
		.then(data => {
			if (data.error){
				dispatch(error(data.error));
			} else {
				dispatch({
					type: constants.TESTS_GET_TESTS_SUCCESS,
					...data,
					search,
					page,
					order
				});
			}
		})
		.catch(e => {
			dispatch(error(e.message));
		});*/
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

export function removeTask(paId, taskId){
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
				type: constants.ASSESSMENT_REMOVE_TASK_SUCCESS,
				task: getState().tasks[taskId],
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