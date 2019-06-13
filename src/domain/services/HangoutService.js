import {status} from '../constants/Hangout';


export const createHangout = store => {
    store.setState({ Status: status.init });
    // perform hangout creation
    store.setState({ Status: status.ready });
}

export const loadHangouts = async(store) => {
    store.setState({ Status: status.loading });
    // call Chapter API
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.loading });
        resolve();
    });

}