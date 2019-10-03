import {status} from '../constants/Event';
import { AUTH_TOKEN, API_BASE} from '../../SharedConstants';

// ** for future backend interaction **

export const addSingleEvent = async (store, event ) => {
    
    store.setState({ Status: status.loading });
    // perform Event update (?)
    return new Promise(async (resolve, reject) => {
        try{
            console.log(`${API_BASE}/events`)
            console.log(JSON.stringify(event))
            const response = await fetch(`${API_BASE}/events`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: AUTH_TOKEN
                },
                method: 'POST',
                body: JSON.stringify(event)
            });
            console.log(response)
            const json = await response.json();
            await loadEvents(store);
            console.log(json);
            resolve();    
        } catch(error){
            console.log(error);
            reject();
        }
    })
}

export const loadEvents = async store => {
    store.setState({ Status: status.loading });
    return new Promise(async (resolve, reject) => {
        let request = await fetch(`${API_BASE}/events`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: AUTH_TOKEN
            },
            method: 'GET',
        });

        let json = await request.json()
        store.setState({ Events: json, Status: status.ready });


        resolve();
    });
    
    // return new Promise(async (resolve, reject) => {
    //     // var event = {EventName: 'BBQ', EventCoordinator: 'JaNae', DateTime: 'June', Location: 'Cafeteria',
    //     //     Description: 'Food'};
    //     // console.log(store);
    //     try {
    //         console.log("sending get events request");
    //         const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events', {
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization: authToken
    //         },
    //         method: 'GET',
    //         })
    //         console.log(response);
    //         const json = await response.json();
    //         console.log(json);
    //         store.setState({Events: {Event: json}, Status: status.ready });
    //         console.log(store);
    //         resolve();
    //     } catch (error) {
    //         console.log(error);
    //         reject();
    //     }
    // });

    // set state is gonna be an array ??

    // return new Promise(async (resolve, reject) => {
    //     try {
    //         const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events/', {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: auth
    //             },
    //             method: 'GET',
    //         })
    //         console.log(response);
    //         const json = await response.json(); 
    //         console.log(json);
    //         store.setState({ Event: {Event: json}, Status: status.ready });
    //         console.log(store);
    //         resolve();
    //     } catch(error) {
    //         console.log(error)
    //         reject();
    //     }
    // });
}

export const updateEvent = async store => {
    store.setState({ Event: {Event: json}, Status: status.loading });
    // perform Event update (?)
    return new Promise((resolve, reject) => {
        store.setState({ Event: {Event: json}, Status: status.ready });
        resolve();
    });
}

// supported on API ???
// export const deleteEvent = async store => {
//     store.setState({ Status: status.loading });
//     // perform Event update (?)
//     return new Promise((resolve, reject) => {
//         store.setState({ Status: status.ready });
//         resolve();
//     });
// }
