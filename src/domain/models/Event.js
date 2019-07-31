import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/EventService'
import {status} from '../constants/Event';


const EventState = { // each of these define a state that can be pulled
    Event: {
        id: "",
        title: "",
        location: "",
        chapterId: "",
        date: "",
        description: ""
    },
    Status: status.init, // defines if the chapter is loaded
}

const useEvent = useGlobalHook(React, EventState, actions);

export default useEvent;