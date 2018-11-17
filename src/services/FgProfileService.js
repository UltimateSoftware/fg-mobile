import {FgMember} from "../types/FgMember";

export class FgProfileService {

    async createMember(member) {
        return fetch('http://localhost:5000/api/v1/profile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: member.firstName,
                lastName: member.lastName,
                schoolName: member.schoolName,
                gradYear: member.gradYear,
                inspiration: member.inspiration
            }) })
            .then(response => response.json())
            .then(responseJSON => {
                return responseJSON.id;
            })
            .catch(error => console.log('FgProfileService: ', error));
    }


}