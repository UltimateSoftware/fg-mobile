export function ChProfile (schoolName, chapter, bannerSource, avatarSource, history, studentAvatars, leadershipAvatars) {
    this.schoolName = schoolName;
    this.chapter = chapter;
    this.bannerSource = bannerSource;
    this.avatarSource = avatarSource;
    this.history = history;
    this.studentAvatars = studentAvatars;
    this.leadershipAvatars = leadershipAvatars;
}

export function Chapter(chapter) {
    this.advisor = chapter.advisor;
    this.members = chapter.members;
    this.name = chapter.name;
    this.description = chapter.description;
    this.chapterNumber = chapter.chapterNumber;
    this.id = chapter.id;
    this.schoolName = chapter.schoolName;
    this.officers = chapter.officers
    this.bannerSource = 'https://3o15h033zmpwracwx2i00rqx-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Ben-Hill.jpg';
    this.avatarSource = 'https://www.poolmosaics.com/images/thumbnails/600/600/detailed/2/university-florida-mascot-tile-mosaic.jpg';
}

export function ChapterLeader (name, title, avatarSource) {
    this.name = name;
    this.title = title;
    this.avatarSource = avatarSource;
}

export function chapterMember(name, avatarSource) {
    this.name = name;
    this.avatarSource = avatarSource;
}