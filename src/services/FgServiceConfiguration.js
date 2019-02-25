export const baseUrl = 'http://localhost:5000'

const createProfile = '/profiles'

export function getCreateProfileUrl() {
    return baseUrl + createProfile;
}