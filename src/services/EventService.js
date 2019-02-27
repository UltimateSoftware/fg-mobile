import {FgEvent} from "../types/FgEvent";

export class EventService {

    async getEvents(date = null) {
      var append
      if(date === null) append = ''; //all dates
      else              append = '?exactDate=' + date; //exact date
        return new Promise(async (resolve) => {
          try {
              console.log(date1)
              var result = await fetch('localhost:5000/hangouts?', {
                  method: 'GET',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                  }
              })
              resolve(result.json())
          } catch (e) {
              console.log('error been caught')
              resolve(new FgEvent('', '', '', '', '', '', ['']))
          }
      })
    }
}
