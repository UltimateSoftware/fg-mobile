import {Hangout} from "../types/Hangout";
// import console = require("console");

export class HangoutService {
    async getHangouts() {
        
        return new Promise(async (resolve, error) => {
            try {
                var request = await fetch("http://10.55.14.51:5000/hangouts");
                var response = await request.json();
                var data = response.map((response) => new Hangout(response.title, response.location, response.content, response.icebreakers, response.state));
                resolve(data);
            }
            catch (e) {
                console.log('ERRPR', e);
                error('NOPE')
            }
        });
    }

}