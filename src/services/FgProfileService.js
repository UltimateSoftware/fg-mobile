import {FgMember} from "../types/FgMember";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";

export class FgProfileService {

    createMember(member) {
        return fetch('http://localhost:5000/api/v1/profiles/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: member.firstName ? member.firstName : null,
                lastName: member.lastName ? member.lastName : null,
                schoolName: member.schoolName ? member.schoolName : null,
                gradYear: member.gradYear ? member.gradYear : null,
                inspiration: member.inspiration ? member.inspiration : null
            })
        })
            .then((response) => response.json())
            .then((data) => {
                return data.id;
            })
            .catch( (error) => console.log(error.message));
    }

    updateMember(member, id) {
        return fetch('http://localhost:5000/api/v1/profiles/' + id, {
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
                inspiration: member.inspiration ? member.inspiration : null
            })
        })
            .then((response) => response.json())
            .then((data) => {
                return data.id;
            })
            .catch( (error) => console.log(error.message));
    }

}