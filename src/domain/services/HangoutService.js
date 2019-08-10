import {status} from '../constants/Hangout';
import {API_BASE, AUTH_TOKEN} from '../../SharedConstants';

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

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${API_BASE}/hangouts`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: AUTH_TOKEN
          },
          method: 'GET',
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
        store.setState({ Hangouts: {Hangout: json}, Status: status.ready });
        console.log(store);
        resolve();
      } catch(error) {
        console.log(error)
        reject();
      }
    })
}

export const deleteHangout = async (store,id) => {
  store.setState({ Status: status.loading });

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_BASE}:5000/hangouts/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN
        },
        method: 'DELETE',
      })
      console.log(response);
      let status = response.status;
      if (status == 204){
        await loadHangouts(store)
      }
      resolve();
    } catch(error) {
      console.log(error)
      reject();
    }
  })
}