
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

/*******************LESSON 2*************************/

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}

function displayWork() {
	for (job in work.jobs) {
		//Div para work experiences
		$("#workExperience").append(HTMLworkStart);
		//Unir el employer y el nombre del trabajo
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
				$(".project-entry:last").append(formattedImage);
			}
		}		
	}
}

projects.display();


function iName(name) {
  name = name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
