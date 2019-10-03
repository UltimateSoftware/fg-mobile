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

          console.log("[GET Profile] Server response: ")
          console.log(response)

          const json = await response.json();

          console.log("[GET Profile] json parsing result: ")
          console.log(json)

          store.setState({ Profile: {Profile: json}, Status: status.ready });
          resolve();

        } catch(error) {
          console.log("[GET Profile] ")
          console.log(error)
          reject();
        }
      })
}