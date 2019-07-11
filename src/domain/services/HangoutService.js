import {status} from '../constants/Hangout';
import {API_BASE} from '../../SharedConstants';
const auth = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjI4NjAzNTksImV4cCI6MTU2Mjk0Njc1OSwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.da_dZmympb8CS2Vk517GofWIOGv73g1bu_LGgYsEeuRFOx_DIbE2nZ4tBdmljhvqZ3wvbo7Yki0yvFSwMyRp2eTotjMuHMffvJApwi4uohBXZmCgpSnJV6M6c84MgTvYEnVTcHvkDtuovGw-L73GGy6zQrt8aZ7SKnPMBrgKOetd5M4knEXMZQOlY-SouXS5UeGpbG7k3Uo2pMc8GPuZIg-JZwbDjDpi_0z2qBO6ArAuu6W3L_ME-nOaI__hsLYygThOOWz_9h_FwGXs57VPSN0beNGcM36fMU_USVDCY8lc_NYWN_6tteES-s_2eMXZO_LMbweR6sDePxR48ChIng";
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
        const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/hangouts', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: auth
          },
          method: 'GET',
        })
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
      const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/hangouts/'+id, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: auth
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