import {status} from '../constants/Profile';
import {API_BASE} from '../../SharedConstants';
const auth="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjQwNjE1MzAsImV4cCI6MTU2NDE0NzkzMCwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJzY29wZSI6ImFkbWluIHJlYWQ6Z3JvdXBzIGNyZWF0ZTpncm91cHMgZGVsZXRlOmdyb3VwcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.ZMfchm58VhOI6fhaly3rPkK-6h24RI4sEVSbTUXhpzN1jmVwoVjWULCDNx_ANUr04ZTxbPkVYrjYNbG1pPym_bx-ts48Qnbvsmv7UXpCUcn9GsYJt3HXlonFNSrrD6fZCgm9yzEaxjZ1q4oSCIAL8zF3Pl4yI7bRuZ8cr-eIV1RdiukSfPhMkRKV25vDMJQ2JGPm3yqztPHekK3UuN77cVUiXJFRJFo8Kcsh9rPs0OPViMQMv3HqI_8E2eg5qOWvdUHh2UG9KmRFwgfS5LLJ9eplGDPaJQqFsP0JAn-EDURfNJ4Wcm3gWqXi2onSN7h0KUnDi3Yi7fCJiLiYvoA4hg"

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