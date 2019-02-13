import {AsyncStorage} from 'react-native';
import React from 'react';
import jwtDecoder from 'jwt-decode';
import config from '../../constants/config';
import {AuthSession} from 'expo';

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

    async updateMember(member) {
        return new Promise(async (accept, reject) => {
            try {
                let response = await fetch(`http://localhost:5000/profiles/${member.id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: member.firstName ? member.firstName : null,
                        lastName: member.lastName ? member.lastName : null,
                        schoolName: member.schoolName ? member.schoolName : null,
                        gradYear: member.gradYear ? member.gradYear : null,
                        inspiration: member.inspiration ? member.inspiration : null,
                        chapterId: member.chapterId ? member.chapterId : null
                    })
                });

                
                try {
                    var data = await response.json();
                    if (!data.id) {
                        console.log("Error parsing data id from response")
                        reject('NO ID MEMBER ON DATA');
                    }
                    accept(data.id);
                } catch (error) {
                    reject('JSON PARSE ERROR');
                }

            } catch (error) {
                reject('HTTP REQUEST ERROR');
            }     
        })
    }


}