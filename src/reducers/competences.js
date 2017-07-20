import constants from '../constants';

export default function competences(state = {}, action) {
	switch (action.type) {
		case constants.ASSESSMENT_GET_DATA_SUCCESS: {
			return {
				...action.entities.competences
			};
		}

		case constants.ASSESSMENT_CHANGE_USER_MARK_COMPETENCE: {
			const { competenceId, payload } = action;
			const competence = state[competenceId];
			return {
				...state,
				[competenceId]: {
					...competence,
					userMark: {
						...competence.userMark,
						value: {
							...competence.userMark.value,
							selectedPayload: payload
						}
					}
				}
			};
		}
		case constants.ASSESSMENT_CHANGE_BOSS_MARK_COMPETENCE: {
			const { competenceId, payload } = action;
			const competence = state[competenceId];
			return {
				...state,
				[competenceId]: {
					...competence,
					bossMark: {
						...competence.bossMark,
						value: {
							...competence.bossMark.value,
							selectedPayload: payload
						}
					}
				}
			};
		}
		case constants.ASSESSMENT_CHANGE_COMMENT_COMPETENCE: {
			const { competenceId, text } = action;
			const competence = state[competenceId];
			return {
				...state,
				[competenceId]: {
					...competence,
					comment: {
						...competence.comment,
						value: text
					}
				}
			};
		}

		default:
			return state;
	}
}

