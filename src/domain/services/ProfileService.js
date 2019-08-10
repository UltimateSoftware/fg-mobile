import {status} from '../constants/Profile';
import {API_BASE, AUTH_TOKEN} from '../../SharedConstants';

export const updateProfile = async store => {
    store.setState({ Status: status.loading });
    // perform chapter update
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadProfile = async (store,id) => {
    store.setState({ Status: status.loading });
    
    return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${API_BASE}/profiles/${id}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: AUTH_TOKEN
            },
            method: 'GET',
          })
          const json = await response.json();
          store.setState({ Profile: {Profile: json}, Status: status.ready });
          console.log(json)
          resolve();
        } catch(error) {
          console.log(error)
          reject();
        }
      })
}