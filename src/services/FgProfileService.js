import {FgMember} from "../types/FgMember";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {MOCKED_CHAPTER_with_BANNER_and_AVATAR} from "../test/MockedTypes";

export class FgProfileService {

    createMember(member) {
        return fetch('http://localhost:5000/profiles/', {
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
            .then((response) =>  response.json())
            .then((data) => {
                console.log(data.id)
                return data.id;
            })
            .catch( (error) => console.log(error.message));
    }

    updateMember(member, id) {
        return fetch('http://localhost:5000/profiles/' + id, {
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
    async getMemberById(id) {
        return new Promise(async (resolve) => {
            try {
                console.log("inside try");
                var result = await fetch(`http://localhost:5000/profiles/${id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                var data = await result.json();
                console.log(data);
                resolve(new FgMember(data.firstName, data.lastName,
                    data.schoolName, data.gradYear, null, null, data.inspiration))
            }
            catch (e) {
                console.log(e);
                resolve(MOCKED_CHAPTER_with_BANNER_and_AVATAR);
            }
        })
    }

}