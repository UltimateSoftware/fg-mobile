import {ChProfile} from "../types/ChProfile";

export class ChapterService {

    async createChapter(chapter) {
        return new Promise(async (resolve) => {
            try {
                console.log(chapter)
                var result = await fetch('http://localhost:5000/api/v1/profile/', {
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
                resolve(new ChProfile(chapter.chapterName, chapter.chapterSubtext, 'https://en.wikipedia.org/wiki/School#/media/File:Larkmead_School,_Abingdon,_Oxfordshire.png', 'https://dw3jhbqsbya58.cloudfront.net/school-mascot/5/d/f/5df2a4f9-1148-4246-9bf0-1c085ebdc228.gif?version=636443555400000000', chapter.mission))
            }
        })
    }

    async joinChapter(chapter) {
        return new Promise(async (resolve) => {
            resolve(null);
        })
    }

}