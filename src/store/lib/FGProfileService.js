import qs from 'qs';


function stringifyRequestData(data) {
  return qs.stringify(data, {arrayFormat: 'brackets'});
}

async function createMember(member) {
  const url = 'http://localhost:5000/api/v1/profile/';
  const requestData = JSON.stringify({
    firstName: member.firstName ? member.firstName : null,
    lastName: member.lastName ? member.lastName : null,
    schoolName: member.schoolName ? member.schoolName : null,
    gradYear: member.gradYear ? member.gradYear : null,
    inspiration: member.inspiration ? member.inspiration : null
  });
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    const result = await fetch(url, {
      method: 'post',
      headers,
      body: requestData
    });
    const payload = await result.json();
    if (payload.error) {
      throw Error(payload.error.message);
    }
    return payload;
  }
  catch (e) {
    console.log('could not get member token', e); // eslint-disable-line
    throw e;
  }
}

export {
    createMember
};