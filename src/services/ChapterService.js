import {ChProfile} from "../types/ChProfile";
import { DataManager, CHAPTER} from '../DataManager'
import config from '../config';

export class ChapterService {

    async createChapter(chapter) {
        return new Promise(async (resolve) => {
            try {
                console.log(chapter)
                var result = await fetch(`http://${config.api.host}:${config.api.port}/api/v1/profile/`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chapterName: chapter.chapterName ? chapter.chapterName : 'null',
                        chapterSubtext: chapter.chapterSubtext ? chapter.chapterSubtext : 'null',
                        description: chapter.description ? chapter.description : 'null',
                        mission: chapter.mission ? chapter.mission : 'null',
                    })
                })
                resolve(result.json())
            } catch (e) {
                console.log('resolving error')
                resolve(new ChProfile(chapter.chapterId, chapter.chapterName, chapter.chapterSubtext, 'https://en.wikipedia.org/wiki/School#/media/File:Larkmead_School,_Abingdon,_Oxfordshire.png', 'https://dw3jhbqsbya58.cloudfront.net/school-mascot/5/d/f/5df2a4f9-1148-4246-9bf0-1c085ebdc228.gif?version=636443555400000000', chapter.mission))
            }
        })
    }

    async joinChapter(chapterId) {
        return new Promise(async(resolve, reject) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: chapterId })
            };
            try {
                var request = await fetch(`http://${config.api.host}:${config.api.port}/chapters/`, requestOptions);
                var response = await this.handleJoinChapterResponse(request)
                DataManager.setItemForKey(CHAPTER, response)
                resolve(response)
            } catch(e) {
                // Returning true for now
                // DataManager.setItemForKey(CHAPTER, response) Model needs to be defined
                console.log('Chapter not in system? maybe?')
                // Normally you would reject but until implemented will always resolve
                var response = JSON.stringify({ 
                    chapterId: "cypressb",
                    schoolName: "Cypress Bay",
                    chapter: "",
                    bannerSource: "",
                    avatarSource: "",
                    history: "",
                    studentAvatars: "",
                    leadershipAvatars: ""
                })
                response = await this.handleJoinChapterResponse(response)
                DataManager.setItemForKey(CHAPTER, response)
                resolve(response)
                // reject(e)
            }
        })
    }

    async handleJoinChapterResponse(response) {
        return new Promise(async (resolve, reject) => {
            let {chapterId, schoolName, chapter, bannerSource, avatarSource, history, studentAvatars, leadershipAvatars} = JSON.parse(response)
            resolve(new ChProfile(chapterId, schoolName, chapter, bannerSource, avatarSource, history, studentAvatars, leadershipAvatars))
        });
    }

}