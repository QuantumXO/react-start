
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'reducers/rootReducer';

export default function configureStore(initialState) {

    const middleWares = [thunk];

    if(process.env.NODE_ENV != 'production'){
        const logger = createLogger();
        middleWares.push(logger)
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleWares)
        )
    );

    return store
}
