import {status} from '../constants/Chapter';


export const updateChapter = store => {
    store.setState({ Status: status.init });
    // perform chapter update
    store.setState({ Status: status.ready });
}

export const loadChapter = async(store) => {
    store.setState({ Status: status.loading });
    // call Chapter API
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.loading });
        resolve();
    });

}