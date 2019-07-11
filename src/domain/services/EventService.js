import {status} from '../constants/Event';
import {API_BASE} from '../../SharedConstants';
import { jsxNamespacedName, pipelinePrimaryTopicReference } from '@babel/types';
import { WSAETOOMANYREFS } from '../constants/Event';
import useEvent from '../constants/Event';
//These are the eventActions
export const updateEvent = async store => {
    store.setState({ Status: status.loading });
    // perform Event update (?)
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

let authToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjI4NjUzMDMsImV4cCI6MTU2Mjk1MTcwMywiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.dFGfhQQytFR2Q7lbhErrrX9tWiXPFkpNY1z55sjsvwGYw2DLc8iuqQ8eGgmwGyHKBTszBTaWnnzmOmOwZ66Kc3R5d_VppbFzb8T-i_4L7nrFSCsB3oKB-zihCpxHl-rHP60Z4paOsVrpgShtaZo_6v3FtzcYD6WIGOzPAEuDK_0AocDJxxFlnMLv95tMmBY726Kro6dvSFes_KFNoLrLiV-b4AhwXH0UQv6SEJcotIKfYnwdKs7w-_1yRQYCEoOGyG-kVQ8IoCtux37o5SppgtoNNYuVY6RKH3oYcdRRBFHll1gbX0RVDY-mlcV7xkQiE-KvlYZ4ZZfo6at-YDrY7w";

export const loadEvents = async store => {
    store.setState({ Status: status.loading });
    return new Promise(async (resolve, reject) => {
        // var event = {EventName: 'BBQ', EventCoordinator: 'JaNae', DateTime: 'June', Location: 'Cafeteria',
        //     Description: 'Food'};
        // console.log(store);
        try {
            const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: authToken
            },
            method: 'GET',
            })
            console.log(response);
            const json = await response.json();
            console.log(json);
            store.setState({Events: {Event: json}, Status: status.ready });
            console.log(store);
            resolve();
        } catch (error) {
            console.log(error);
            reject();
        }
    });

}

//async requires a Promise
export const addSingleEvent = async (store, event) => {
    
}