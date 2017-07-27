import constants from '../constants';

export default function assessments(state = {
	items: {},
	isFetching: true,
	isFetchingCompetences: false,
	infoMessageCompetences: null
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

		case constants.ASSESSMENT_SAVE_COMPETENCES: {
			return {
				...state,
				isFetchingCompetences: true
			};
		}

		case constants.ASSESSMENT_SAVE_COMPETENCES_SUCCESS: {
			return {
				...state,
				isFetchingCompetences: false
			};
		}

		case constants.ASSESSMENT_CHANGE_COMPETENCES_MESSAGE: {
			return {
				...state,
				isFetchingCompetences: false,
				infoMessageCompetences: action.message
			};
		}

		default:
			return state;
	}
}

