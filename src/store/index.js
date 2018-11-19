import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist-immutable'

import composedEnhacers from './enhancers';
import { reducer as appReducer } from './models/app';
import { reducer as configReducer} from './models/config';
import { reducer as mainReducer } from './models/main';
import { reducer as RouterReducer } from '../router';

const initialState = Immutable.fromJS({ /* initial state */ });

const combinedReducers = combineReducers({
  app:    appReducer,
  config: configReducer,
  main:   mainReducer,
  nav:    RouterReducer
});

const store = createStore(
  combinedReducers,
  initialState,
  composedEnhacers
);
persistStore(store, {
  blacklist: ['nav'],
  storage: AsyncStorage
});

export default {store, initial};