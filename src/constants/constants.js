import keyMirror from 'keyMirror';
import createRemoteActions from './utils/createRemoteActions';
import merge from 'lodash/merge';

const remoteConstants = createRemoteActions([
	'APP_GET_ACCESS',
	'ASSESSMENT_GET_DATA'
]);

const constants = keyMirror({
	'ASSESSMENT_REMOVE_TASK_0_QUARTERS': null,
	'ASSESSMENT_REMOVE_TASK_1': null,
	'ASSESSMENT_REMOVE_TASK_2_YEAR': null,
	'ASSESSMENT_REMOVE_TASK_2_MONTH': null,
	'ASSESSMENT_REMOVE_TASK_3_HALFYEAR': null,
	'ASSESSMENT_REMOVE_TASK_3_MONTH': null
});

export default merge(remoteConstants, constants);