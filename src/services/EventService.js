import {FgEvent} from "../types/FgEvent";

export class EventService {

    
    // async getEvents(date = null) {
    //   var append
    //   if(date === null) append = ''; //all dates
    //   else              append = '?exactDate=' + date; //exact date
    //     return new Promise(async (resolve) => {
    //       try {
    //           console.log('yeet')
    //           var result = await fetch('http://localhost:5000/hangouts' + append, {
    //               method: 'GET'
    //           })
    //           resolve(result.json())
    //       } catch (e) {
    //           console.log('error been caught')
            //   resolve(new FgEvent('', '', '2010-05-05', '', '', '', ['']))
    //       }
    //   })
    // }

    async getEvents() {
        return [
            new FgEvent('', 'Planning Committee Elections', '2019-04-25', '', 'Room 2021', '', ['']),
            new FgEvent('', 'Group Study Session', '2019-03-31', '', 'Palmetto Bay Library', '', ['']),
            new FgEvent('', 'After School Mural Painting', '2019-04-12', '', 'Senior Parking Lot', '', ['']),
            new FgEvent('', 'Beach Trip', '2019-04-06', '', 'Miami Beach', '', ['']),
            new FgEvent('', 'FearlesslyGirl April Meeting', '2019-04-04', '', 'Room 310', '', [''])
        ]
    }
}