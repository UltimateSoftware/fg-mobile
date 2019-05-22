import {decode, encode} from 'base-64'
export class ProfileService {
	
    async getProfilePhoto(profileId) {
        try {
            var request = fetch(`http://localhost:8080/profiles/${profileId}/photo`);
            return await request.then(response => response.blob())
                          .then(images => {
                              // Then create a local URL for that image and print it 
                              return URL.createObjectURL(images)
                          })
        } catch(ex) {
            console.log("Exception getting photo for profileId: ", profileId)
            console.log(ex)
            return ex
        }
    }
}