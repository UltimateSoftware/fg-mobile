export function FgMember (id, firstName, lastName, schoolName, gradYear, bannerSource, avatarSource, inspiration, chapterId) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.schoolName = schoolName;
    this.gradYear = gradYear;
    this.bannerSource = bannerSource;
    this.avatarSource = avatarSource;
    this.inspiration = inspiration;
    this.chapterId = chapterId;

    this.fullName = function() {
        return firstName + ' ' + lastName;
    }
}