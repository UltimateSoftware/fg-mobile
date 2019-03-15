import {FgMember} from "../types/FgMember";
import {DataManager, SIGNED_IN_MEMBER_ID} from "../DataManager";

export class FgProfileService {

  static createMember(member) {
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
    .catch( (error) => console.log("createMember ERROR: ", error.message));
  }

  //hardcoded chapter ids and profile ids for now
  static async getMemberById() {
    const id = await DataManager.getItemWithKey(SIGNED_IN_MEMBER_ID);
    console.log("this is id: ");
    console.log(id)
    return new Promise(async (resolve) => {
      try {
        const response = await fetch(`http://localhost:5000/profiles/${id.id}`, { // here the profile id would be concatanated
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })

        const data = await response.json();

        resolve(new FgMember(
          data.firstName ? data.firstName : null,
          data.lastName ? data.lastName : null,
          data.schoolName ? data.schoolName : null,
          data.gradYear ? data.gradYear : null,
          data.inspiration ? data.inspiration : null,
          data.bannerSource ? data.bannerSource : null,
          data.avatarSource ? data.avatarSource : null,
          data.chapterId ? data.chapterId : null // chapterId
        )
      )
    } catch(e) {
      console.log(e.message)
    }
  })
}
}
