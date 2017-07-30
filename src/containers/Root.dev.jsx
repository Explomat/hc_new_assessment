import React from 'react';
import AppContainer from './AppContainer';
import AssessmentContainer from './AssessmentContainer';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

const Root = ({ store }) => (
	<Provider store={store}>
		<AppContainer>
			<AssessmentContainer />
			<DevTools />
		</AppContainer>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
