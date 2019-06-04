export class ChapterManager {
    static _chProfile = {} // private variable
    

    static createChProfile = function (chProfile){
        ChapterManager._chProfile = testDto(...chProfile)
    }

    static getChProfile = async function() {
        return new Promise((resolve, reject) => {
            try {
                if (Object.keys(ChapterManager._chProfile).length != 0) {
                    console.log('object already constructed')
                    resolve(ChapterManager._chProfile); 
                }
                // load chapter information if it doesnt exist

                console.log('calling ChProfile')
                this.createChProfile('my text')
                console.log(ChapterManager._chProfile)
                resolve(this._chProfile);
            } catch(e) {
                console.log(e)
                // load chapter information if it doesnt exist
                resolve({thisField: "didn't work"})
            }
            
            
        });
        
    }
}

function testDto(oneField) {
    return {
        thisField: oneField,
    }
}

function ChProfile (schoolName, 
    chapter, 
    bannerSource, 
    avatarSource, 
    history, 
    studentAvatars, 
    leadershipAvatars)
    {
        //TODO: perform validation on the profile object
        return {
            schoolName : schoolName,
            chapter : chapter,
            bannerSource : bannerSource,
            avatarSource : avatarSource,
            history : history,
            studentAvatars : studentAvatars,
            leadershipAvatars : leadershipAvatars,
        }
        
    }