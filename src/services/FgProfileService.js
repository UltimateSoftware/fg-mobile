import {FgMember} from "../types/FgMember";

export class FgProfileService {

    async createMember(member) {
        return fetch('localhost:5000/api/v1/profile/create', {
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
            }),
        }).catch((error) => console.error(error));
    }

    async getMemberById(id) {
        return fetch(('localhost:5000/api/v1/profile/' + id))
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }

}