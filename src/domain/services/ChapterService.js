import {status} from '../constants/Chapter';
import { AUTH_TOKEN, API_BASE} from '../../SharedConstants';

export const updateChapter = async store => {
    store.setState({ Status: status.loading });
    // perform chapter update
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadChapter = async (store, id) => {
    store.setState({ Status: status.loading });
    
    // call Chapter API
    return new Promise(async (resolve, reject) => {
        try {
            headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: AUTH_TOKEN,
            }

            console.log("Headers are:");
            console.log(headers);

            const response = await fetch(`${API_BASE}/chapters/${id}`, {
                headers: headers,
                method: 'GET',
            });
            console.log(response)
            
            const json = await response.json()
            console.log(json)

            store.setState({ Chapter: json, Status: status.ready})
            console.log(store);
            
            resolve();
        } catch(error) {
            console.log(error)
            reject();
        }
    });

}