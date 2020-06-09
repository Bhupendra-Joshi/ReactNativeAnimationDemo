import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../config/ReactotronConfig'

import rootReducer from '.';

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk
        ), Reactotron.createEnhancer())
);

export default store;