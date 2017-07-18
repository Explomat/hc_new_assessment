import constants from '../constants';

export default function competenceBlocks(state = {}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				...action.entities.competenceBlocks
			};
		}

		default:
			return state;
	}
}

