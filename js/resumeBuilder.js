var work = {
	"jobs": [{
		"title": "Experience Specialist",
		"employer": "Verizon Wireless",
		"dates": "December 2014-October 2015",
		"location": "Helena, MT",
		"description": ("<b>⋅</b> Diagnose and repair client devices ranging from mobile devices to laptops."+"<br>"+
		"<b>⋅</b> Multi-task with several people or groups of people at the same time with varying issues or needs."+"<br>"+
		"<b>⋅</b> Explain complex issues in a simple way for the customer to understand."+"<br>"+
		"<b>⋅</b> Manage conflict resolution with frustrated customers.")
	}, {
		"title": "Baker/Manager",
		"employer": "Sweetgrass Bakery",
		"dates": "November 2009-August 2012",
		"location": "Helena, MT",
		"description": ("<b>⋅</b> Manage start and finish times of shifts."+"<br>"+
		"<b>⋅</b> Instruct and monitor individuals on proper baking/mixing procedure."+"<br>"+
		"<b>⋅</b> Maintain and assure product quality standards."+"<br>"+
		"<b>⋅</b> Monitor and adjust production based on sales and current inventory.")
	}, {
		"title": "Customer Service Representative",
		"employer": "Albertsons Inc.",
		"dates": "September 2007-November 2009",
		"location": "Helena, MT",
		"description": ("<b>⋅</b> Interact with customers and attempt to help them with their varying needs."+"<br>"+
		"<b>⋅</b> Produce goods to be packaged and sold on customer facing displays."+"<br>"+
		"<b>⋅</b> Place and check in orders for bakery goods."+"<br>"+
		"<b>⋅</b> Clean work areas continually to maintain an appealing outward appearance.")
	}, {
		"title": "Intern: Network Repair and Maintenance",
		"employer": "Jefferson High School",
		"dates": "August 2005-April 2007",
		"location": "Boulder, MT",
		"description": ("<b>⋅</b> Help with client problem resolution."+"<br>"+
		"<b>⋅</b> Interact with and manage user and email databases."+"<br>"+
		"<b>⋅</b> Run new network components such as switches or new desktops."+"<br>"+
		"<b>⋅</b> Maintain and repair current hardware: building computers, replacing components within the computer,replacing network switches."+"<br>"+
		"<b>⋅</b> Integrate new operating systems for use in database management such as migration from Windows server to Linux server and vice versa.")
	}]
};

work.display = function() {

	for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedJob);
	}

};

var projects = {
	"projects": [{
		"title": "Create a Movie Website",
		"dates": "January 2016",
		"description": "A simple movie website built with HTML, CSS, and Python that displays images and movie trailers with descriptions for each item.",
		"images": ["images/movie2.jpg",
		],
		"link": ""
	}, {
		"title": "Code Your Own Quiz",
		"dates": "December 2015",
		"description": "A fill in the blanks quiz/game that leverages the power of functions in Python and automates repetitive tasks that can be done on a computer.",
		"images": ["images/quiz2.jpg"
		]
		"link": "http://cristianathompson.github.io/PythonQuiz/"
	}]
};
projects.display = function() {

	for (var project = 0; project < projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProTitle);
		var formattedProDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProDates);
		var formattedProDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProDescription);
		if (projects.projects[project].images.length > 0) {
			for (var image = 0; image < projects.projects[project].images.length; image++) {
				var formattedProImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProImage);
			}
		}
		var formattedProLink = HTMLprojectLink.replace("%data%", projects.projects[project].link);
		$(".project-entry:last").append(formattedProLink);

	}

};


var education = {
	"schools": [{
		"name": "Gastronomicom",
		"location": "Cap D'Agde, France",
		"majors": ["French Language", "Michelin Level Pastry"],
		"degree": "Letter of Completion",
		"dates": "2013-2014",
		"url": "http://gastronomicom.fr/"
	}],

	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "March 2016-",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"date": "December 2015-March 2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	}, {
		"title": "Java Programming",
		"school": "O'Reilly School of Technology",
		"date": "December 2014-September 2015",
		"url": "http://archive.oreilly.com/oreillyschool/courses/programs.html"
	}, {
		"title": "Introduction to Object-Oriented Programming",
		"school": "O'Reilly School of Technology",
		"date": "October 2014-December 2014",
		"url": "http://archive.oreilly.com/oreillyschool/courses/java/index.html"
	}]
};


education.display = function() {

	for (var school = 0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates + formattedSchoolMajor;

		$(".education-entry:last").prepend(formattedSchool);
	}

	$("#education").append(HTMLonlineCourses);
	$("#education").append(HTMLschoolStart);
	for (var online = 0; online < education.onlineCourses.length; online++) {
	    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
	    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
	    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
	    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
	    var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
	    $(".education-entry:last").append(formattedOnline);
	}
};

var bio = {
	"name": "Cristian Thompson",
	"role": "Web Developer",
	"contacts": {
		"email": "Thompsonacristian@gmail.com",
		"mobile": "1-902-978-0722",
		"github": "CristianAThompson",
		"location": "35 Orchard Drive, Stratford PE C1B 1K7"
	},
	"biopic": "https://scontent-lga3-1.xx.fbcdn.net/hphotos-frc1/v/t1.0-9/10888703_407644209391248_5781748332896288379_n.jpg?oh=1c4dfadc7b94e3af7ed1d2d25b9a2c05&oe=57929EC3",
	"welcomeMessage": "Please contact me with any questions or if you would be interested in discussing a job proposal.",
	"skills": ["Ability to adapt and learn in new situations.",
		"Knowledgable in Python, HTML, CSS, and JS.",
		"Strong communication skills.",
		"Ability to work with others.",
		"Trained on interaction and conflict resolution."
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedAddress = HTMLlocation.replace("%data%", bio.contacts.location);


	$("#header").append(formattedName + "<br>", formattedRole + "<br>", formattedPicture + "<br>", formattedWelcome + "<br>", formattedGitHub, formattedEmail, formattedMobile, formattedAddress);
	$("#footerContacts").append(formattedMobile, formattedEmail);




	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}

};

bio.display();


work.display();



projects.display();



education.display();


$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});