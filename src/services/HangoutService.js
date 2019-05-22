import {Hangout} from "../types/Hangout";
// import console = require("console");

export class HangoutService {
    async getHangouts() {
        
        return new Promise(async (resolve, error) => {
            console.log("About to get hangouts")
            try {
                var request = await fetch("http://localhost:8080/hangouts");
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
