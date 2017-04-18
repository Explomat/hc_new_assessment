import constants from '../constants';

function _task(state = {
	id: null,
	name: '',
	unit: '',
	weight: '',
	min: '',
	targ: '',
	max: '',
	fact: '',
	percent: 0,
	comment: '',
	isEdit: false
}, action){
	switch (action.type) {
		case constants.ASSESSMENT_REMOVE_TASK_SUCCESS: {
			return {
				...state,
				isRemoved: true
			};
		}
		case constants.ASSESSMENT_ADD_TASK_SUCCESS: {
			const { task } = action;
			return {
				...task,
				isEdit: true,
				isNew: true
			};
		}
		default:
			return state;
	}
}

export default function tasks(state = {}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				...action.entities.tasks
			};
		}
		case constants.ASSESSMENT_REMOVE_TASK_SUCCESS:
		case constants.ASSESSMENT_ADD_TASK_SUCCESS: {
			const { task } = action;
			return {
				...state,
				[task.id]: _task(state[task.id], action)
			};
		}

		default:
			return state;
	}
}