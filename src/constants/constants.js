import keyMirror from 'keymirror';
import createRemoteActions from './utils/createRemoteActions';
import merge from 'lodash/merge';

const remoteConstants = createRemoteActions([
	'APP_ERROR_MESSAGE',
	'APP_INFO_MESSAGE',
	'APP_GET_ACCESS',
	'ASSESSMENT_GET_DATA',
	'ASSESSMENT_REMOVE_TASKS',
	'ASSESSMENT_ADD_TASK',
	'ASSESSMENT_EDIT_TASK',
	'ASSESSMENT_ACTIVATE_TEST',
	'ASSESSMENT_SAVE_COMPETENCES'
]);

const constants = keyMirror({
	'ASSESSMENT_UPDATE_CALCS_IN_PA': null,
	'ASSESSMENT_TOGGLE_SELECT_TASK': null,
	'ASSESSMENT_CHANGE_USER_MARK_COMPETENCE': null,
	'ASSESSMENT_CHANGE_BOSS_MARK_COMPETENCE': null,
	'ASSESSMENT_CHANGE_COMMENT_COMPETENCE': null,
	'ASSESSMENT_CHANGE_COMPETENCES_MESSAGE': null
});

export default merge(remoteConstants, constants);