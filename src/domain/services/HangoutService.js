import {status} from '../constants/Hangout';
import {API_BASE} from '../../SharedConstants';

export const createHangout = async store => {
    store.setState({ Status: status.loading });
    // perform hangout creation
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadHangouts = async store => {
    store.setState({ Status: status.loading });
    // call Chapter API
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });

}