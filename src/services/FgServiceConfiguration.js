export const baseUrl = 'http://localhost:5000'

const createProfile = '/profiles'
const createChapter = '/chapter'

export function getCreateProfileUrl() {
    return baseUrl + createProfile;
}

export function getCreateChapterUrl() {
    return baseUrl + createChapter
}