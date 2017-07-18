import constants from '../constants';

export default function assessments(state = {
	items: {},
	isFetching: true
}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA:
			return {
				...state,
				isFetching: true
			};
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				items: action.entities.assessments,
				isFetching: false
			};
		}

		default:
			return state;
	}
}

