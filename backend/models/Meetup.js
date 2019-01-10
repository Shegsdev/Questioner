
class MeetupModel {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
      this.meetups = [];
    }
    // Create a new meetup record
    create(data) {
        const date = new Date;
        const newMeetup = {
            id: this.meetups.length+1,
            createdOn: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
            topic: data.topic,
            location: data.location,
            image: data.image,
            happeningOn: data.happeningOn,
            time: data.time,
            tags: data.tags.split(', '),
            description: data.description,
        };

        this.meetups.push(newMeetup);
        return newMeetup
    }
    // Get one meetup record
    findOne(id) {
      return this.meetups.find(meetup => meetup.id === id);
    }

    // Fetch all meetup records
    findAll() {
      return this.meetups;
    }

    // Get upcoming meetups
    findUpcoming() {
      const date = new Date;
      let format = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
      let now = format.split('-');
      const meetupDate = this.meetups.map(meetup => meetup.happeningOn);
      let then = meetupDate.map(meetup => meetup.split('-'));
      let upcoming = [];
      for (let i of then) {
          if (i[0] >= now[0] && (i[1] >= now[1] || i[1] <= now[1]) && (i[2] >= now[2] || i[2] <= now[2])) {
            upcoming.push(i);
          }
      }
      return upcoming;

    }

    // Delete a specific meetup
    delete(id) {
      const meetup = this.findOne(id);
      const index = this.meetups.indexOf(meetup);
      this.meetups.splice(index, 1);
      return {};
    }
  }

  export default new MeetupModel();
  