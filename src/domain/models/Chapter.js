import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/ChapterService'
import {status} from '../constants/Chapter';


const ChapterState = { // each of these define a state that can be pulled
    Chapter: { // defines a chapter DTO
        schoolName: "",
        chapter: "",
        bannerSource: "", // URIs to assests folder
        avatarSource: "", // URIs to assests folder
        history: "",
        studentAvatars: "",
        leadershipAvatars: ""
    },
    Status: status.init, // defines if the chapter is loaded
}

const useChapter = useGlobalHook(React, ChapterState, actions);

export default useChapter;
