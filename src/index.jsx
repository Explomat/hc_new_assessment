import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { getAccess } from './actions';
import thunk from 'redux-thunk';
import logMiddleware from './middleware/logMiddleware';
import AppContainer from './containers/AppContainer';
import AssessmentContainer from './containers/AssessmentContainer';
import { dom } from './config';

import 'classlist-polyfill';
import 'babel-polyfill';
import './styles';

const store = createStore(
  reducers,
  applyMiddleware(thunk, logMiddleware)
);

store.dispatch(getAccess());


ReactDOM.render(
	<Provider store={store}>
		<AppContainer>
			<AssessmentContainer />
		</AppContainer>
	</Provider>,
	document.getElementById(dom.appId)
);