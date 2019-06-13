import {status} from '../constants/Profile';


export const updateProfile = store => {
    store.setState({ Status: status.init });
    // perform chapter update
    store.setState({ Status: status.ready });
}

export const loadProfile = async(store) => {
    store.setState({ Status: status.loading });
    // call Chapter API
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.loading });
        resolve();
    });

}