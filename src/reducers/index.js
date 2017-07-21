import { combineReducers } from 'redux';
import app from './app';
import assessments from './assessments';
import changes from './changes';
import competenceBlocks from './competenceBlocks';
import competenceStages from './competenceStages';
import competences from './competences';
import halves from './halves';
import pas from './pas';
import tasks from './tasks';

export default combineReducers({
	app,
	assessments,
	changes,
	competenceStages,
	competenceBlocks,
	competences,
	halves,
	pas,
	tasks
});

/*export default function reducer(state = {}, action) {
	return {
		app: app(state.app, action),
		assessment: assessment(state.assessment, action),
		categories: categories(state.categories, action),
		categoryData: categoryData(state.categoryData, action),
		halves: halves(state.halves, action),
		months: months(state.months, action),
		pas: pas(state.pas, action),
		tasks: tasks(state.tasks, action),
		tests: tests(state.tests, action)
	};
}*/