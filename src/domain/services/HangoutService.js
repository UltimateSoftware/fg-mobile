import {status} from '../constants/Hangout';
import {API_BASE} from '../../SharedConstants';

export const createHangout = async store => {
    store.setState({ Status: status.loading });
    // perform hangout creation
    return new Promise((resolve, reject) => {
        store.setState({ Status: status.ready });
        resolve();
    });
}

export const loadHangouts = async store => {
    store.setState({ Status: status.loading });

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/hangouts', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjIxNzAyMjEsImV4cCI6MTU2MjI1NjYyMSwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.bhBYb8esbr1nlvykR--NNXs4x58jAHHic2F_sBiAQeiBdRLK-SQsZzkvIEGL3rCNtwwXyQBvo-bRxtTKJpDLmNt4R2l0_6gU3VPv4sXvQ_Pa0sc7fsPb9_Fxgl4LCnyRlLMXNP0P52Bkj5D1XO7xo26T9k9zPlFN-bV-Z3mWksC9kK3XECPP4T4B5ffG6bslTOCa4H7HGmKMnBOFErH25QzVyAbmme3VOOtMwfsgVAYE2pUFOTlywkL77DweqhHxEXPE3d1d-Pwg2VtyMvLznc9bLI6m7TAl4a3d8JENd0nrshIvwHDC5eLKGb_QR1MUg0EOfTDNCzUybYKziTQZlA",
          },
          method: 'GET',
        })
        console.log(response);
        const json = await response.json();
        console.log(json);
        store.setState({ Hangouts: {Hangout: json}, Status: status.ready });
        console.log(store);
        resolve();
      } catch(error) {
        console.log(error)
        reject();
      }
    })
}
