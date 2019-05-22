import {Hangout} from "../types/Hangout";
// import console = require("console");

export class HangoutService {
    async getHangouts() {
        
        return new Promise(async (resolve, error) => {
            try {
                var request = await fetch("http://localhost:8080/hangouts");
                var response = await request.json();
                var data = response.map((res) => new Hangout(res));
                resolve(data);
            }
            catch (e) {
                console.log('ERRPR', e);
                error('NOPE')
            }
        });
    }

}
