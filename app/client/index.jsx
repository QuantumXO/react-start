
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ErrorBoundary from 'components/default/ErrorBoundary';
import AppContainer from 'containers/appContainer';

import configureStore from 'store/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <AppContainer />
        </ErrorBoundary>
    </Provider>,
    document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept();
}
