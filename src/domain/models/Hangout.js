import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/HangoutService'
import {status} from '../constants/Hangout';


const HangoutState = { // each of these define a state that can be pulled
  Hangouts: {
    Hangout: [{ // defines a Hangout DTO
        title: "",
        location: "",
        content: undefined,
        icebreakers: [], // List of objects to be displayed
        date: "",
        id: ""
    }]
  },
  Icebreakers: [{ // defines an Icebreaker DTO
    name: "",
    descriptions: "",
    id: ""
  }], 
  Templates: [{ //Template DTO
    title: "",
    id: ""
  }],
  CurrentTemplate: {
    title: "",
    content: {
      discussions: [],
      description: "",
      activity: {
        bonusActivity: "",
        content: "",
        trip: ""
      },
      leaderNotes: []
    },
    id: ""
  },
  Status: status.init, // defines if the hangouts are loaded
  
}

const useHangouts = useGlobalHook(React, HangoutState, actions);

export default useHangouts;
