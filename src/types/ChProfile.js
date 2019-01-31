export function ChProfile (schoolName, chapter, bannerSource, avatarSource, history, studentAvatars, leadershipAvatars) {
    this.schoolName = schoolName;
    this.chapter = chapter;
    this.bannerSource = bannerSource;
    this.avatarSource = avatarSource;
    this.history = history;
    this.studentAvatars = studentAvatars;
    this.leadershipAvatars = leadershipAvatars;
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