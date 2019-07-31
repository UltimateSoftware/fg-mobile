import {status} from '../constants/Profile';
import {API_BASE} from '../../SharedConstants';
const auth="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiI3WHkyTGFGMmZreFMzTnZjZURJQ0NrNk9ZQ0NzVTJJVkBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjQ1ODE2OTIsImV4cCI6MTU2NDY2ODA5MiwiYXpwIjoiN1h5MkxhRjJma3hTM052Y2VESUNDazZPWUNDc1UySVYiLCJzY29wZSI6Im9wZW5pZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Q8HiiqleVHTRppFRgRKBA_Nl9cmvFiASPgwhUUmvhaO4cc9SWD7s5tapYkYv-MhqVscPz25PohGvMzOYSSyGpmFLqnVN5UYBx0UBjGwplwf6HqKDUaSgGZVoDpIPIpjtrGiC1g7C6lnHMbyDBIjKMBFixobcuhldoykZvtNt5H9W-WyG8bHXXyuziPPDDMvmpcHaINuOPDZj4kA23bUDwhTRSHxkx8tU-fGEr00rEBnnw9db7WMmIhsKYQboON2TXoHhziecm1qjOzm2H8DPLiJvrqfGE6iExS8kD5JBhZUr9pbq5Xc_m4kO5qePHfXxN-W4zN23S2gzCOsO2xdeIg"

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