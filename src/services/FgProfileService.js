import {FgMember} from "../types/FgMember";

export class FgProfileService {

    createMember(member) {
        return fetch('http://localhost:5000/api/v1/profile/', {
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

    updateMember(member) {
        return fetch(`http://localhost:5000/profiles/${member.id}`, {
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
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log("YOYO", data);
                return data.id;
            })
            .catch( (error) => console.log(error.message));
    }


}