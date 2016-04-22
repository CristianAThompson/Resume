var work = {
	"jobs": [{
		"title": "Experience Specialist",
		"employer": "Verizon Wireless",
		"dates": "December 2014-October 2015",
		"location": "Helena, MT",
		"description": "Diagnose and repair client devices ranging from mobile devices to laptops, \
		 multi-task with several people or groups of people at the same time with varying issues or needs. \
		  Explain complex issues in a simple way for the customer to understand. \
		  Manage conflict resolution with frustrated customers."
	}, {
		"title": "Baker/Manager",
		"employer": "Sweetgrass Bakery",
		"dates": "November 2009-August 2012",
		"location": "Helena, MT",
		"description": "Manage start and finish times of shifts. \
		Instruct and monitor individuals on proper baking/mixing procedure. \
		Maintain and assure product quality standards.  \
		Monitor and adjust production based on sales and current inventory."
	}, {
		"title": "Customer Service Representetive",
		"employer": "Albertsons Inc.",
		"dates": "September 2007-November 2009",
		"location": "Helena, MT",
		"description": "Interact with customers and attempt to help them with their varying needs. \
		Produce goods to be packaged and sold on customer facing displays.  \
		Place and check in orders for bakery goods.  \
		Clean work areas continually to maintain an appealing outward appearance."
	}, {
		"title": "Intern: Network Repair and Maintenance",
		"employer": "Jefferson High School",
		"dates": "August 2005-April 2007",
		"location": "Boulder, MT",
		"description": "Help with client problem resolution. \
		Interact with and manage user and email databases. \
		Run new network components such as switches or new desktops. \
		Maintain and repair current hardware: building computers, replacing components within the computer,replacing network switches. \
		Integrate new operating systems for use in database management such as migration from windows server to linux server and vice versa."
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
		"images": ["https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/s2048x2048/10287017_581425225346478_6702322605863626704_o.jpg",
			"https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/s2048x2048/1933611_581427418679592_7753455580423753752_o.jpg",
			"https://scontent-lga3-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/s2048x2048/12829426_581427422012925_3678505561065937478_o.jpg"
		]
	}, {
		"title": "Code Your Own Quiz",
		"dates": "December 2015",
		"description": "A fill in the blanks quiz/game that leverages the power of functions in Python and automates repetitive tasks that can be done on a computer.",
		"images": ["https://scontent-lga3-1.xx.fbcdn.net/hphotos-xla1/t31.0-8/s2048x2048/12828376_581431825345818_5127600873965910527_o.jpg",
			"https://scontent-lga3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/s2048x2048/12828456_581431815345819_8904512670715877367_o.jpg",
			"https://scontent-lga3-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/s2048x2048/1933625_581431822012485_3237718145067864364_o.jpg"
		]
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
				var formattedProImage = HTMLprojectImage.replace(/"%data%"/g, projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProImage);
			}
		}

	}

};


var education = {
	"schools": [{
		"name": "Jefferson High School",
		"location": "Boulder, MT",
		"majors": ["General Studies", "High School Graduate"],
		"degree": "High School Certificate",
		"dates": "2003-2007",
		"url": "http://www.jhs.k12.mt.us/"
	}, {
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
		var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

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