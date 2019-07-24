import {status} from '../constants/Profile';
import {API_BASE} from '../../SharedConstants';
const auth="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjM5NzQ1NDksImV4cCI6MTU2NDA2MDk0OSwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.C9zptIA4bNOhynqCsLd0IuJwkKLAl2Zdm3J233-d9-kkYsjZwGz0T58Ng4_dziZWV7VSA-FE-EVYQ3c01N-PL8dvNhMglKq59NTQdKbnK0LHVfzmhuraUh-0Fd_9idakEL1YK8hRVjrFPtvIaO6Bruct51AlqWeScfGW0sRPvcCpvJV3IJnffTLKlEQWAG2n7SdpeZHl57_gwmCsZB0JOSLegl_2t3HeDt8b2quQIaEs58JcyzGf3OoEeNVtcq9zl4wjts0DWBVtMTzfGr55HeV9agk0QIgaccr8lQMkJ7Yp0EXakoOZFxW28Im8nheUr7cgEJd5mI6-aLuSIxNBHw"

export const updateProfile = async store => {
    store.setState({ Status: status.loading });
    // perform chapter update
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadProfile = async (store,id) => {
    store.setState({ Status: status.loading });
    
    return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/profiles/' + id, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: auth
            },
            method: 'GET',
          })
          const json = await response.json();
          store.setState({ Profile: {Profile: json}, Status: status.ready });
          console.log(json)
          resolve();
        } catch(error) {
          console.log(error)
          reject();
        }
      })
}