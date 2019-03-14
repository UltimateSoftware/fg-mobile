import {Hangout} from "../types/Hangout";

export class HangoutService {
    async getHangouts() {
        
        return new Promise((resolve, error) => {
            try {
                var request = await fetch("http://localhost:5000/hangouts");
                var response = await response.json();
                var data = responseJson.map((response) => new Hangout(response.title, response.location, response.content, response.icebreakers, response.state));
                resolve(data);
            }
            catch (e) {
                resolve(e);
            }
        });
    }

}
