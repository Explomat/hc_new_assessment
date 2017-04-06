import constants from '../constants';

export default function assessment(state = {
	assId: null,
	paId: null,
	halves: [],
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
				...action.response,
				isFetching: false
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_0_QUARTERS: {
			const { halves } = state;
			const { halfIndex, quarterIndex, taskIndex } = action;
			const half = halves.quarters[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_1: {
			const { halves } = state;
			const { halfIndex, taskIndex } = action;
			
			const half = halves[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_2_YEAR: {
			const { halves } = state;
			const { halfIndex, taskIndex } = action;
			
			const half = halves[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_2_MONTH: {
			const { halves } = state;
			const { halfIndex, monthIndex, taskIndex } = action;
			
			const half = halves[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_3_HALFYEAR: {
			const { halves } = state;
			const { halfIndex, taskIndex } = action;
			
			const half = halves[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}
		
		case constants.ASSESSMENT_REMOVE_TASK_3_MONTH: {
			const { halves } = state;
			const { halfIndex, monthIndex, taskIndex } = action;
			
			const half = halves[halfIndex];
			
			try {
				const quarter = half[quarterIndex];
				const tasks = quarter.tasks.body;
				quarter.tasks.body = tasks.filter((t, index) => index !== taskIndex);
			} catch (e){
				return state;
			}
			
			return {
				...state,
				halves: [].concat(state.halves, [ half ])
			};
		}

		default:
			return state;
	}
}

