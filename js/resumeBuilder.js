var name = "José López";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

var work = {
	"jobs": [
		{
			"employer" : "Universidad de Jáen",
			"title" : "UJA Students virtual platform administrator",
			"dates" : "July 2012 - February 2013",
			"description" : "I was who create courses inside the platform and I help with technical support"
		},
		{
			"employer" : "Myself",
			"title" : "Android developer",
			"dates" : "July 2014 - July 2015",
			"description" : "I created PIAR, an Augmented Reality browser for Android devices"
		}
	]
}


var projects = {
	"projects": [
		{
			"title" : "PIAR (Augmented Reality)",
			"dates" : "July 2012 - February 2013",
			"description" : "PIAR is an Augmented Reality browser for Android devices",
			"url" : "https://play.google.com/store/apps/details?id=com.jmlb0003.piar"
		}
	]
}