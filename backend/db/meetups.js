
const date = new Date;
const meetups = [
	{
		"id": 1,
		"createdOn": date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
		"location": "Lagos",
		"images": ["/img/meetup1a1.jpg", "/img/meetup1a2.jpg"],
		"topic": "Big Data",
		"happeningOn":  date.getMonth()+1 + '-' + (date.getDate() + 10) + '-' + date.getFullYear(),
		"time": "00:00",
		"tags": ["Big data", "Data science"],
		"description": "This is the description for this meetup...\
		This is the description for this meetup...This is the description for this meetup...\
		This is the description for this meetup...This is the description for this meetup...",
	},
	{
		"id": 2,
		"createdOn": date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
		"location": "Lagos",
		"images": ["/img/meetup2a1.jpg", "/img/meetup2a2.jpg"],
		"topic": "Devops",
		"happeningOn":  date.getMonth() + '-' + (date.getDate() + 10) + '-' + date.getFullYear(),
		"time": "00:00",
		"tags": ["Software", "Data science"],
		"description": "This is the description for this meetup...\
		This is the description for this meetup...This is the description for this meetup...\
		This is the description for this meetup...This is the description for this meetup...",
	}
];

export default meetups;