import {status} from '../constants/Chapter';
import {API_BASE} from '../../SharedConstants';

export const updateChapter = async store => {
    store.setState({ Status: status.loading });
    // perform chapter update
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadChapter = async store => {
    store.setState({ Status: status.loading });
    // call Chapter API
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });

}