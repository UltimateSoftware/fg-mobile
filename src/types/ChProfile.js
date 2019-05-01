export function ChProfile (chapterId, schoolName, chapterName, bannerSource, avatarSource, history, studentAvatars, leadershipAvatars, advisor, members, chapterNumber, officers) {
    this.id = chapterId;
    this.schoolName = schoolName;
    this.name = chapterName;
    this.bannerSource = bannerSource;
    this.avatarSource = avatarSource;
    this.history = history;
    this.studentAvatars = studentAvatars;
    this.leadershipAvatars = leadershipAvatars;
    this.advisor = advisor;
    this.members = members;
    this.chapterNumber = chapterNumber;
    this.officers = officers;
}

export function ChLeadership (name, title, avatarSource) {
    this.name = name;
    this.title = title;
    this.avatarSource = avatarSource;
}

export function ChMembers(name, avatarSource) {
    this.name = name;
    this.avatarSource = avatarSource;
}