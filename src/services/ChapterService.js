import {Chapter} from "../types/Chapter";
import {config} from "../config/index";

export class ChapterService {

    // async createChapter(chapter) {
    //     return new Promise(async (resolve) => {
    //         try {
    //             console.log(chapter)
    //             var endpoint = `http://${config.default.api.host}:${config.default.api.port}/chapters`
    //             var result = await fetch(endpoint, {
    //                 method: 'POST',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     chapterName: chapter.chapterName ? chapter.chapterName : 'null',
    //                     chapterSubtext: chapter.chapterSubtext ? chapter.chapterSubtext : 'null',
    //                     description: chapter.description ? chapter.description : 'null',
    //                     mission: chapter.mission ? chapter.mission : 'null',
    //                 })
    //             })
    //             resolve(result.json())
    //         } catch (e) {
    //             console.log('resolving error')
    //             resolve(new ChProfile(chapter.chapterName, chapter.chapterSubtext, 'https://en.wikipedia.org/wiki/School#/media/File:Larkmead_School,_Abingdon,_Oxfordshire.png', 'https://dw3jhbqsbya58.cloudfront.net/school-mascot/5/d/f/5df2a4f9-1148-4246-9bf0-1c085ebdc228.gif?version=636443555400000000', chapter.mission))
    //         }
    //     })
    // }

    async getChapter(chapterId) {
        return new Promise(async (resolve) => {
            try {
                var request = await fetch(`http://localhost:8080/chapters/${chapterId}`);
                var response = await request.json();
                resolve(new Chapter(response));
            } catch(ex) {
                console.log("Exception getting chapter for id: ", chapterId)
                console.log(ex)
                error(ex)
            }
        })
    }
}