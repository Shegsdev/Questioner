
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
            createdOn: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
            topic: data.topic,
            location: data.location,
            image: data.image,
            happeningOn:  data.happeningOn,
            time: data.time,
            tags: data.tags,
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
      return this.meetups.filter(meetup => meetup.happeningOn < Date.now())
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
  