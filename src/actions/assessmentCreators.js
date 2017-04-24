import { get, post } from '../utils/ajax';
import { url } from '../config';
import constants from '../constants';
import { normalize } from 'normalizr';
//import uuid from '../utils/uuid';
import { error } from './appCreators';
import queryString from 'query-string';

/*import {
	getMockAssessment
} from './mock';*/
import assessmentSchema from '../schemas';

export function getAssessment(){
	return dispatch => {
		dispatch({ type: constants.ASSESSMENT_GET_DATA });
		
		/*setTimeout(() => {
			const data = getMockAssessment();
			dispatch({
				type: constants.ASSESSMENT_GET_DATA_SUCCESS,
				...normalize(data, assessmentSchema)
			});
		}, 300);*/
		
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

export function addTask(paId, task){
	return (dispatch, getState) => {
		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'AddTask'
		});
		post(path, JSON.stringify({ task, pa_id: paId }))
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
		/*setTimeout(() => {
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
		}, 300);*/
	};
}

export function removeTask(paId, taskId){
	return (dispatch, getState) => {
		/*setTimeout(() => {
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
		}, 300);*/

		const path = url.createPath({
			server_name: 'assessment',
			action_name: 'RemoveTask'
		});
		post(path, JSON.stringify({ pa_id: paId, task_id: taskId }))
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
					type: constants.ASSESSMENT_REMOVE_TASK_SUCCESS,
					task: getState().tasks[taskId],
					paId
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
		/*setTimeout(() => {
			const { tests } = getState();
			dispatch({
				type: constants.ASSESSMENT_ACTIVATE_TEST_SUCCESS,
				test: {
					...tests[testId],
					isAssignTest: true,
					message: 'Тест назначен. Для его прохождения перейдите по ссылке, отправленной вам на почту.'
				}
			});
		}, 300);*/
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