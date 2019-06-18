import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/EventService'
import {status} from '../constants/Event';


const EventState = { // each of these define a state that can be pulled
<<<<<<< HEAD
    Events: { // defines a chapter DTO
=======
    Event: { // defines a chapter DTO
>>>>>>> a785f30b... working agenda components to events landing page
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
<<<<<<< HEAD
        Event: []
=======

>>>>>>> a785f30b... working agenda components to events landing page


    },
    Status: status.init, // defines if the chapter is loaded
}

const useEvent = useGlobalHook(React, EventState, actions);

export default useEvent;