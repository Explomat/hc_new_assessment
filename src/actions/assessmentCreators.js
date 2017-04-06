/* import { get } from '../utils/ajax';
import { url } from '../config';*/
import constants from '../constants';
// import { info } from './appCreators';
import {
	getMockAssessment
} from './mock';

export function getAssessment(){
	return dispatch => {
		dispatch({ type: constants.ASSESSMENT_GET_DATA });
		
		setTimeout(() => {
			const data = getMockAssessment();
			dispatch({
				type: constants.ASSESSMENT_GET_DATA_SUCCESS,
				response: data
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

export function removeTask0Quarters(halfIndex, quarterIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_0_QUARTERS',
		halfIndex,
		quarterIndex,
		taskIndex
	};
}

export function removeTask1(halfIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_1',
		halfIndex,
		taskIndex
	};
}

export function removeTask2Year(halfIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_2_YEAR',
		halfIndex,
		taskIndex
	};
}

export function removeTask2Month(halfIndex, monthIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_2_MONTH',
		halfIndex,
		monthIndex,
		taskIndex
	};
}

export function removeTask3HalfYear(halfIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_3_HALFYEAR',
		halfIndex,
		taskIndex
	};
}

export function removeTask3Month(halfIndex, monthIndex, taskIndex){
	return {
		type: 'ASSESSMENT_REMOVE_TASK_3_MONTH',
		halfIndex,
		monthIndex,
		taskIndex
	};
}

/* export function addNewQuestion(testId, sectionId){
	return dispatch => {
		dispatch({
			type: constants.TESTS_ADD_NEW_QUESTION
		});
		
		setTimeout(() => {
			const question = getMockQuestionTemplate();
			dispatch({
				type: constants.TESTS_ADD_NEW_QUESTION_SUCCESS,
				question
			});
			window.location.href = `#questions/new/${testId}/${sectionId}`;
		}, 300);
	};
}

export function addNewAnswer(){
	return {
		type: constants.TESTS_ADD_NEW_ANSWER
	};
}*/