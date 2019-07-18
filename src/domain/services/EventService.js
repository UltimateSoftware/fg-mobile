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

let authToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjMzODgwODUsImV4cCI6MTU2MzQ3NDQ4NSwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.NkyG9Up911im3dkfjY0JEoa0MU3UfpZ7ErSL4MtyoCh17DFkyCPoK4qm6fh8gV1TOWm9mjRmYcqhnwYUpq9vkxzzzIlFIlEGzfH4AcRZpTNJBHgVXiXQdGNP7_RZ9MYEz7ukgPbqlRy1dJSjx53KWPfMgoG1dfLyCQy0LDybMyCAgqGht93qu2i14WkjXgz8_SwrFvMhDAv862uUtNz3AfnyIQQiAogb0GFvRvEqxgvLG6YfFkP90LifmAfV3TvP3tWFXR2GK9ZefIZP0kDeJub1xWQ8rn31zVXbNMc9ppuUsPH8GGtt1Z0jxE31r18fzL7VbFHd4IUuunH0AMM0wg";

export const loadEvents = async store => {
    store.setState({ Status: status.loading });
    return fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authToken
        },
        method: 'GET',
    }).then(response => response.json())
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

}

//async requires a Promise
export const addSingleEvent = async (store, event) => {
    
}