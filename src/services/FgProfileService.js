import {AsyncStorage} from 'react-native';
import React from 'react';
import jwtDecoder from 'jwt-decode';
import config from '../../constants/config'

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
}