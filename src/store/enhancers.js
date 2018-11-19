import {
    applyMiddleware,
    compose
  } from 'redux';
  import createLoggerMiddleware from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { autoRehydrate } from 'redux-persist-immutable';
  import createActionBuffer from 'redux-action-buffer'
  import { REHYDRATE } from 'redux-persist/constants'
  
  let middlewares = [ thunkMiddleware, createActionBuffer(REHYDRATE) ];
  let enhacers = [ autoRehydrate() ];
  
  if (__DEV__ === true) {
    middlewares.push(createLoggerMiddleware({
      predicate: (getState, action) => !action.type.endsWith('_ENDED'),
      stateTransformer(state) {
        return state.toJS();
      }
    }));
  }
  
  export default compose(
    applyMiddleware(...middlewares),
    ...enhacers
  );