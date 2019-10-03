import React, {createContext, useReducer} from 'react'

let UserContext = createContext();

let initialState = {
    userId: '99999999-ffff-4a96-b827-fa80954d9cff',
    chapterId: '99999999-cccc-4a96-b827-fa80954d9cff',
    authToken: 'boop'
};

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setUserId":
            return {...state, userId: action.payload};
        case "setChapterId":
            return {...state, chapterId: action.payload};
        case "setAuthToken":
            return {...state, authToken: action.payload};
    };
}

function UserContextProvider(props) {
    let [state, dispatch] = useReducer(reducer, initialState);
    let value = {state, dispatch};

    return(
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    );
}

let UserContextConsumer = UserContext.Consumer;

export {UserContext, UserContextProvider, UserContextConsumer};