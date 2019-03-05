import {FgMember} from "../types/FgMember";
import {config} from "../config/index";

export class FgProfileService {

    createMember(member) {
        var endpoint = `http://${config.default.api.host}:${config.default.api.port}/api/v1/profile`
        return fetch(endpoint, {
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

}