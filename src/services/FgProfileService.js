import {FgMember} from "../types/FgMember";

export class FgProfileService {

    async createMember(member) {
        try {
            let response = await fetch('http://localhost:5000/api/v1/profile', {
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
                })
            });
            let responseJSON = await response.toJSON();
            return responseJSON.id;
        } catch(error) {
            console.log("[ERROR - FgProfileService]: ", error.message)
        }
    }

}