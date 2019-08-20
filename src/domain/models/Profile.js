import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/ProfileService'
import {status} from '../constants/Profile';


const ProfileState = { // each of these define a state that can be pulled
    Profile: { // defines a chapter DTO
        schoolName: "Test School",
        firstName: "Test First Name",
        lastName: "Test Last Name", // URIs to assests folder
        gradYear: "", // URIs to assests folder
        inspiration: "",
    },
    Status: status.init, // defines if the chapter is loaded
}

const useProfile = useGlobalHook(React, ProfileState, actions);

export default useProfile;