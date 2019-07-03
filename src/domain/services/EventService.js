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

export const loadEvent = async store => {
    store.setState({ Status: status.loading });
    // call Event API (?)
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });

}

//async requires a Promise
export const addSingleEvent = async (store, event) => {
    store.setState({ Status: status.loading });
    return new Promise((resolve, reject) => {
        // var event = {EventName: 'BBQ', EventCoordinator: 'JaNae', DateTime: 'June', Location: 'Cafeteria',
        //     Description: 'Food'};
        // console.log(store);
        events = store.state.Events;
        events.Event.push(event)

        store.setState({Events: events});
        
        resolve();
    });
}