import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/EventService'
import {status} from '../constants/Event';


const EventState = { // each of these define a state that can be pulled
    Event: { // defines a chapter DTO
        // schoolName: "",
        // chapter: "",
        // bannerSource: "", // URIs to assests folder
        // avatarSource: "", // URIs to assests folder
        // history: "",
        // studentAvatars: "",
        // leadershipAvatars: ""


        // start date + end date?
        // start time + end time
        // location
        // creator info + guest list info + chapter(s) info?
        // description



    },
    Status: status.init, // defines if the chapter is loaded
}

const useEvent = useGlobalHook(React, EventState, actions);

export default useEvent;