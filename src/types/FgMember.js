export function FgMember (firstName, lastName, schoolName, gradYear, bannerSource, avatarSource, inspiration) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.schoolName = schoolName;
    this.gradYear = gradYear;
    this.bannerSource = bannerSource;
    this.avatarSource = avatarSource;
    this.inspiration = inspiration;

    this.fullName = function() {
        return firstName + ' ' + lastName;
    }
}