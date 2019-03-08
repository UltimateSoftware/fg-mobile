import {FgEvent} from "../types/FgEvent";

export class EventService {

    /*
    async getEvents(month = null) {
      var append
      if(date === null) append = ''; //all dates
      else              append = '?exactDate=' + date; //exact date
        return new Promise(async (resolve) => {
          try {
              var result = await fetch('http://localhost:5000/hangouts' + append, {
                  method: 'GET'
              })
              resolve(result.json())
          } catch (e) {
              console.log('error been caught')
              resolve(new FgEvent('', '', '', '', '', '', ['']))
          }
      })
    }
    */

    async getEvents(date = null) {
        return (
            [
                {
                    "date": "2019-03-10",
                    "chapterId": "17cbecac-dc59-46b1-93ad-faf89cda7268",
                    "description": "Description of the hangout and all its fun stuff.",
                    "location": "Phase 10",
                    "id": "d998ded4-0efc-437e-a3f9-1ef07bdbe0ef",
                    "state": "Unpublished",
                    "title": "test Hangout",
                    "icebreakers": [
                        "Icebreaker Numero Uno"
                    ]
                },{
                    "date": "2019-03-11",
                    "chapterId": "17cbecac-dc59-46b1-93ad-faf89cda7268",
                    "description": "Description of the hangout and all its fun stuff.",
                    "location": "Phase 10",
                    "id": "d998ded4-0efc-437e-a3f9-1ef07bdbe0ef",
                    "state": "Unpublished",
                    "title": "test Hangout",
                    "icebreakers": [
                        "Icebreaker Numero Uno"
                    ]
                },{
                    "date": "2019-03-14",
                    "chapterId": "17cbecac-dc59-46b1-93ad-faf89cda7268",
                    "description": "Description of the hangout and all its fun stuff.",
                    "location": "Phase 10",
                    "id": "d998ded4-0efc-437e-a3f9-1ef07bdbe0ef",
                    "state": "Unpublished",
                    "title": "test Hangout",
                    "icebreakers": [
                        "Icebreaker Numero Uno"
                    ]
                },{
                    "date": "2019-03-20",
                    "chapterId": "17cbecac-dc59-46b1-93ad-faf89cda7268",
                    "description": "Description of the hangout and all its fun stuff.",
                    "location": "Phase 10",
                    "id": "d998ded4-0efc-437e-a3f9-1ef07bdbe0ef",
                    "state": "Unpublished",
                    "title": "test Hangout",
                    "icebreakers": [
                        "Icebreaker Numero Uno"
                    ]
                },{
                    "date": "2019-03-20",
                    "chapterId": "17cbecac-dc59-46b1-93ad-faf89cda7268",
                    "description": "Description of the hangout and all its fun stuff.",
                    "location": "Phase 10",
                    "id": "d998ded4-0efc-437e-a3f9-1ef07bdbe0ef",
                    "state": "Unpublished",
                    "title": "test Hangout",
                    "icebreakers": [
                        "Icebreaker Numero Uno"
                    ]
                },
            ]
        )
    }
}
