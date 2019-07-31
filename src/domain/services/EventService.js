import {status} from '../constants/Event';
import {API_BASE} from '../../SharedConstants';

export const createEvent = async store => {
    store.setState({ Status: status.loading });
    // perform Event update (?)
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadEvent = async store => {
    store.setState({ Status: status.loading });
    // call Event API (?)
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });

}

export const updateEvent = async store => {
    store.setState({ Status: status.loading });
    // perform Event update (?)
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

// supported on API ?
// export const deleteEvent = async store => {
//     store.setState({ Status: status.loading });
//     // perform Event update (?)
//     return new Promise((resolve, reject) => {
//         store.setState({ Status: status.ready });
//         resolve();
//     });
// }