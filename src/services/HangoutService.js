import {Hangout} from "../types/Hangout";

export class HangoutService {
    getHangouts() {
        return fetch("http://localhost:5000/hangouts")
        .then((response) => response.json())
        .then((responseJson) => {
            var data = responseJson.map((response) => new Hangout(response.title, response.location, response.description, response.icebreakers, response.state, response.icon));
            return data;
        })
        .catch(console.error);
    }

}
