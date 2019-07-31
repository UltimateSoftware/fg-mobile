import {status} from '../constants/Event';
import {API_BASE} from '../../SharedConstants';

const auth="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiI3WHkyTGFGMmZreFMzTnZjZURJQ0NrNk9ZQ0NzVTJJVkBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjQ1MTEzMTcsImV4cCI6MTU2NDU5NzcxNywiYXpwIjoiN1h5MkxhRjJma3hTM052Y2VESUNDazZPWUNDc1UySVYiLCJzY29wZSI6Im9wZW5pZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.dx2ZyogJQyBZNXSFyzMK4h3sO2yEHN0u-n5eADXvAENHTpSyra2JOOgBgY2TboLnPkNLT6E_gKk8Jt7hohysykok8xS1fHtWgfZ5WOZmXXBg1HwqelWdcJFnORtNKn9s8jJTDB55OUGxMfIsq4nfdQG1RX3_PX6pCBFnZ8gyCrYh8b-bquaxvb778levIl4HajZtGx5xXRV-RHvKpWGFqD35xsWVVEG2tNx2pfP_LX-9nnbwNTO4NaNSPZBLCIuYQrgH_RWx9FsAOuSf6qHGa279sWW2aj9akAXBLiSQQTKIfzT-O2zRttudkO-RVfLCkowAQouz_pH81VAHvBBj1Q"

export const createEvent = async store => {
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
    return new Promise(async (resolve, reject) => {
        let request = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: authToken
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

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/events/', {
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
            store.setState({ Event: {Event: json}, Status: status.ready });
            console.log(store);
            resolve();
        } catch(error) {
            console.log(error)
            reject();
        }
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

// supported on API ???
// export const deleteEvent = async store => {
//     store.setState({ Status: status.loading });
//     // perform Event update (?)
//     return new Promise((resolve, reject) => {
//         store.setState({ Status: status.ready });
//         resolve();
//     });
// }
