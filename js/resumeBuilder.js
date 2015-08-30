
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

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

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
}


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

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

	$('#education').append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);	

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
		$('.education-entry:last').append(formattedOnlineTitle);

		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
		$('.education-entry:last').append(formattedonlineSchool);

		var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
		$('.education-entry:last').append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
		$('.education-entry:last').append(formattedonlineURL);
	}
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

work.display = function() {
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


var projects = {
	"projects": [
		{
			"title" : "PIAR (Augmented Reality)",
			"dates" : "July 2012 - February 2013",
			"description" : "PIAR is an Augmented Reality browser for Android devices",
			"url" : "https://play.google.com/store/apps/details?id=com.jmlb0003.piar",
			"images" : ""
		}
	]
}

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



bio.display();
work.display();
projects.display();
education.display();


function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
