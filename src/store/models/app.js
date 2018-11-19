import { NetInfo }       from 'react-native';
import { createAction }  from 'redux-actions';
import createAsyncAction from '../lib/createAsyncAction';
import { createReducer } from 'redux-immutablejs';
// import storage           from '../lib/storage';

// const appStorage = storage('app');

const initialState = {
  initialized: false,
  online: false
};

// actions
const networkChanged = createAction('APP_NETWORK_CHANGED');
const init = createAsyncAction('APP_INIT', (dispatch) => {
  let handleIsConnected = (isConnected) => dispatch(networkChanged({online: !!isConnected}));
  NetInfo.isConnected.addEventListener('change', handleIsConnected);
  // return appStorage.get();
});
const actions = {
  init,
  networkChanged
};

// handlers
const handlers = {
  [ init.SUCCEED ]   : (state, action) => state.merge(action.payload, {
    initialized: true
  }),
  [ networkChanged ] : (state, action) => state.merge(action.payload)
};

const reducer = createReducer(initialState, handlers);

export {
  actions,
  reducer
};