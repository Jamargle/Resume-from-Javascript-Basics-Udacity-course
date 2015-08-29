$("#main").append("Jose López");

var awesomeThoughts = "I am Jose and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);
/*
var formattedName = HTMLheadername.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	"name" : "Jose López",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "650-55-55-55",
		"email" : "jmlb0003@jemail.com",
		"github" : "jamargle",
		"twitter" : "jmlb0003",
		"location" : "Cambil"
	},
	"welcomeMessage" : "lorem ipsum dolor sit....",
	"skills" : [
		"awesomeness", "delivering things", "etc"
	],
	"bioPic" : "images/fry.jpg"
};

var work = {};
work.position = "Searching a Job";
work.employer = "Nowhere";
work.years = 0;

var education = {
	"schools": [
		{
			"name" : "Universidad de Jáen",
			"location" : "Jaén",
			"degree" : "engineer",
			"majors" : ["CS"],
			"dates" : 2015,
			"url" : "http://ujaen.es"
		},
		{
			"name" : "Universidad de Jáen",
			"location" : "Jaén",
			"degree" : "technical engineer",
			"majors" : ["CS"],
			"dates" : 2012,
			"url" : "http://ujaen.es"
		}
	]
	,
	"onlineCourses": [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}

$("#main").append(work["position"]);
$("#main").append(education.name);
