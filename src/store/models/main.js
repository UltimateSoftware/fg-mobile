import moment from 'moment';
import { createReducer } from 'redux-immutablejs';
import { createAction } from 'redux-actions';
import createAsyncAction from '../lib/createAsyncAction';

const initialState = {
  newUser: true,
  member : {
    uuid: null,
    firstName: null,
    lastName: null,
    schoolName: null,
    gradYear: null,
    bannerSource: null,
    avatarSource: null,
    inspiration: null,
    profileProgress: 0,
    membershipStartDate: null,
  },
};

const actions = {
  createNewUser: createAsyncAction('CREATE_NEW_USER', (firstName, lastName, schoolName, gradYear, bannerSource, avatarSource, inspiration) => {
    return createNewUser(firstName, lastName, schoolName, gradYear, bannerSource, avatarSource, inspiration);
  })
};

const handlers = {
  
  [ actions.createNewUser ]: (state) => {
    let member = state.get('member').push({
      profileProgress: 1
    });
    return state.merge({ member });
  },
  
  
  [ actions.createNewUser.SUCCEED ]: (state, action) => {
    let member = state.get('member').toJS();
    return state.merge({
      newUser: false,
      member: member.push({
        membershipStartDate: new Date().getTime(),
        profileProgress: 2,
        uuid: action.payload.uuid,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        schoolName: action.payload.schoolName,
        gradYear: action.payload.gradYear,
        bannerSource: action.payload.bannerSource,
        avatarSource: action.payload.avatarSource,
        inspiration: action.payload.inspiration,
      })
    });
  }
};

const reducer = createReducer(
    initialState,
    handlers
);

const selectors = {
    getProfile (state) {
        return state.getIn(['main','member']).toJS();
    },
}

export {
  actions,
  reducer,
  selectors
}