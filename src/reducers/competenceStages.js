import constants from '../constants';

export default function competenceStages(state = {}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				...action.entities.competenceStages
			};
		}

		default:
			return state;
	}
}

