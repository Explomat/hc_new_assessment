import * as appCreators from './appCreators';

if (process.env.NODE_ENV === 'production') {
	module.exports = {
		...appCreators,
		...require('./assessmentCreators.prod')
	};
} else {
	module.exports = {
		...appCreators,
		...require('./assessmentCreators.dev')
	};
}