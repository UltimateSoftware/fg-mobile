import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/EventService'
import {status} from '../constants/Event';


const EventState = {
    Events: {
        Event: []
    },
    Status: status.init,
}

const useEvent = useGlobalHook(React, EventState, actions);

export default useEvent;