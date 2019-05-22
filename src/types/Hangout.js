// export function Hangout (title, location, content, icebreakers, state) {
//     this.title = title;
//     this.location = location;
//     this.content = content;
//     this.icebreakers = icebreakers;
//     this.state = state;
// }

export function Hangout(hangout) {
	this.title = hangout.title;
	this.location = hangout.location;
	this.content = hangout.content;
	this.icebreakers = hangout.icebreakers;
	this.chapterId = hangout.chapterId
	this.state = hangout.state
	this.date = hangout.date
}