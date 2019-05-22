import {AsyncStorage} from 'react-native';
import React from 'react';
import jwtDecoder from 'jwt-decode';
import config from '../../constants/config';
import {AuthSession} from 'expo';
import {Profile} from '../types/FgMember'

export class FgProfileService extends React.Component{

    constructor(props) {
        super(props);
    }
 
    createMember = async (member) => {
        const token = await AsyncStorage.getItem('token');
        const decoded = jwtDecoder(token)
        const createProfile = await fetch(`${config.apiUrl}/profiles`, {
            method: 'POST',
            'async': true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                   },
                body: JSON.stringify({
                    userId: decoded.sub,
                    firstName: member.firstName ? member.firstName : null,
                    lastName: member.lastName ? member.lastName : null,
                    schoolName: member.schoolName ? member.schoolName : null,
                    gradYear: member.gradYear ? member.gradYear : null,
                    inspiration: member.inspiration ? member.inspiration : null
                })
            })
            .then(res => res.json())
            .catch(e => console.log('problem submitting profile: ' + e));
    }

    logout = async () => {
        await AsyncStorage.clear();
        AuthSession.dismiss();
    };

    deleteMember = async () => {
        console.log('deleting account..')
        const token = await AsyncStorage.getItem('token');
        const decoded = jwtDecoder(token);
        const removeProfile = await fetch(`${config.apiUrl}/profiles/${decoded.sub}`, {
            method: 'DELETE',
            'async': true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                   }
            })
            .then(AsyncStorage.clear()).then(AuthSession.dismiss())
            .catch(e => console.log('problem deleting profile: ' + e));
    }

    getProfilePhoto = async (profileId) => {
        try {
            var request = fetch(`http://localhost:8080/profiles/${profileId}/photo`);
            return await request.then(response => response.blob())
                          .then(images => {
                              // Then create a local URL for that image and print it 
                              return URL.createObjectURL(images)
                          })
        } catch(ex) {
            console.log("Exception getting photo for profileId: ", profileId)
            console.log(ex)
            return ex
        }
    }

    getBannerPhoto = async (profileId) => {
        try {
            var request = fetch(`http://localhost:8080/profiles/${profileId}/banner`);
            return await request.then(response => response.blob())
                          .then(images => {
                              // Then create a local URL for that image and print it 
                              return URL.createObjectURL(images)
                          })
        } catch(ex) {
            console.log("Exception getting banner photo for profileId: ", profileId)
            console.log(ex)
            return ex
        }
    }

    getProfile = async (profileId) => {
        return new Promise(async (resolve) => {
            try {
                var request = await fetch(`http://localhost:8080/profiles/${profileId}`);
                var response = await request.json();
                resolve(new Profile(response));
            } catch(ex) {
                console.log("Exception getting profile for id: ", profileId)
                console.log(ex)
                error(ex)
            }
        })
    }
}