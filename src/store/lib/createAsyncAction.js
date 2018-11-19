import { createAction } from 'redux-actions';

/**
 * Creates an async action creator
 *
 * @param  {String} TYPE            the type of the action
 * @param  {Function} executeAsync  the function to be called async
 * @return {Funtion}                the action creator
 */
export default function createAsyncAction(TYPE, executeAsync) {

    const TYPE_STARTED = TYPE + '_STARTED';
    const TYPE_FAILED  = TYPE + '_FAILED';
    const TYPE_SUCCEED = TYPE + '_SUCCEED';
    const TYPE_ENDED   = TYPE + '_ENDED';

    let actionCreators = {
        [ TYPE_STARTED ]: createAction(TYPE_STARTED),
        [ TYPE_FAILED  ]: createAction(TYPE_FAILED),
        [ TYPE_SUCCEED ]: createAction(TYPE_SUCCEED),
        [ TYPE_ENDED   ]: createAction(TYPE_ENDED)
    };

    function create(...args) {

        return async (dispatch, getState) => {

            let result;
            let startedAt = (new Date()).getTime();
            dispatch(actionCreators[TYPE_STARTED]({ startedAt, ...args }));
            try {
                result = await executeAsync(...args, dispatch, getState);
                dispatch(actionCreators[TYPE_SUCCEED](result));
            }
            catch (error) {
                dispatch(actionCreators[TYPE_FAILED]({
                    errorMessage: error.message
                }));
                throw error;
            }
            let endedAt = (new Date()).getTime();
            dispatch(actionCreators[TYPE_ENDED]({
                endedAt: endedAt,
                elapsed: endedAt - startedAt
            }));
            return result;
        };
    }

    Object.assign(create, {
        TYPE,
        STARTED: TYPE_STARTED,
        FAILED: TYPE_FAILED,
        SUCCEED: TYPE_SUCCEED,
        ENDED: TYPE_ENDED
    });

    return create;
}