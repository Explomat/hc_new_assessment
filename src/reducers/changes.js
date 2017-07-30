import constants from '../constants';

export default function changes(state = {}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				...action.entities.changes
			};
		}

		default:
			return state;
	}
}