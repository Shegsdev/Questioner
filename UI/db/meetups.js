
const date = new Date;
const meetups = [
	{
		"id": 1,
		"createdOn": date.getDate() + ':' + date.getMonth() + ':' + date.getFullYear(),
		"location": "Lagos",
		"images": ["../img/meetup1a1.jpg", "../img/meetup1a2.jpg"],
		"topic": "Big Data",
		"happeningOn": date,
		"tags": ["Big data", "Data science"],
	},
	{
		"id": 2,
		"createdOn": date.getDate() + ':' + date.getMonth() + ':' + date.getFullYear(),
		"location": "Lagos",
		"images": ["../img/meetup1a1.jpg", "../img/meetup1a2.jpg"],
		"topic": "Big Data",
		"happeningOn": date,
		"tags": ["Big data", "Data science"],
	}
];

exports.default = meetups;