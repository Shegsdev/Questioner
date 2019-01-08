
class Meetup {
    constructor(id, topic, location, image, createdOn, happeningOn, time, tags, description) {
        this.id = id;
        this.topic = topic;
        this.location = location;
        this.images = image;
        this.created = createdOn;
        this.happeningOn = happeningOn;
        this.time = time;
        this.tags = tags;
        this.description = description;
    }
}

export default Meetup
