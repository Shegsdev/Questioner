
class Meetup {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
      this.meetups = [];
    }
    /**
     * 
     * @returns {object} meetup object
    */
    create(data) {
        const date = new Date;
        const newMeetup = {
            id: this.meetups.length+1,
            createdOn: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
            location: data.location,
            image: data.image,
            topic: data.topic,
            happeningOn:  data.happeningOn,
            time: data.time,
            tags: data.tags,
            description: data.description,
        };
        this.meetups.push(newMeetup);
        return newMeetup
    }
    /**
     * 
     * @param id
     * @returns {object} meetup object
     */
    findOne(id) {
      return this.meetups.find(reflect => reflect.id === id);
    }
    /**
     * @returns {object} returns all meetups
     */
    findAll() {
      return this.meetups;
    }
    /**
     * 
     * @param id 
     */
    delete(id) {
      const meetup = this.findOne(id);
      const index = this.meetups.indexOf(meetup);
      this.meetups.splice(index, 1);
      return {};
    }
  }
  export default new Meetup();
  