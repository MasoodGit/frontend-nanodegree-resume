var work = {
  "jobs" : [
    {
      "employer":"Philips ",
      "title":"Technical Specialist",
      "location":"Bangalore",
      "datesWorked":"2013-Present",
      "description":"Who moved my cheese cheesy feet cauliflower cheese.Quesa telggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheescake  Hard cheese blue castello halloue psoaos df say shcees stinkgk snidld flskdfadf adfll"
    },
    {
      "employer":"Varian Medical Systems",
      "title":"Tech Lead",
      "location":"Pune",
      "datesWorked":"2007-2013",
      "description":"Who moved my cheese cheesy feet cauliflower cheese.Quesa telggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheescake  Hard cheese blue castello halloue psoaos df say shcees stinkgk snidld flskdfadf adfll"
    },
    {
      "employer":"Harvest Consultancy",
      "title":"Software Developer",
      "location":"Bangalore",
      "datesWorked":"2006-2007",
      "description":"Who moved my cheese cheesy feet cauliflower cheese.Quesa telggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheescake  Hard cheese blue castello halloue psoaos df say shcees stinkgk snidld flskdfadf adfll"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title":"Mockup Website",
      "datesWorked":"2014",
      "descriptoin":"Mockup from Udacity FED Nano Deg",
      "images" :["images/fry.jpg","images/197x148.gif"]
    },
   {
      "title":"Sample Project",
      "datesWorked":"2013",
      "descriptoin":"AngularJS and Asp.NET Web API",
      "images" :["images/fry.jpg","images/197x148.gif"]
    }
  ]
};

var  bio = {
  "name": "Mohamed Masood Alam",
  "role": "Web Developer",
  "WelComeMsg": "Hello world",
  "contacts":{
    "mobile": "123-987-55869",
    "email": "hello@gmail.com",
    "github" : "MasoodGit",
    "twitter" : "@mohdmasoodalam",
    "location": "Bangalore"
  },
  "skills" : ["js","css",".net","wpf","scrum", "UX/UI"],
  "bioPic" : "images/fry.jpg"
};

var education = {
  "schools" : [
    {
      "schoolName": "Ghousia College of Engineering",
      "location" : "Ramanagaram",
      "degree" : "Bachelor of Engineering",
      "majors" : ["CS"],
      "minors" : [],
      "dates" : 2002,
      "url" :"http://ghousia.com"
    },
    {
      "schoolName": "Al-Ameen College",
      "location" : "Bangalore",
      "degree" : "PUC",
      "majors" : ["PCMB"],
      "minors" : [],
      "dates" : 1996,
      "url" :"http://alameen.com"
    }
  ],
  "onlineCourses" : [
    {
      "title" :"Javascript Path",
      "school":"CodeSchool.com",
      "dates" : 2014,
      "url" : "http://www.CodeSchool.com"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.WelComeMsg);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedMsg);


if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills));
}

function displayWork()
{
  if(work.jobs.length > 0)
  {
    for(job in work.jobs)
    {
      $("#workExperience").append(HTMLworkStart);
      console.log(job);
      var employerName = HTMLworkEmployer.replace("%data%",work.jobs[job]["employer"]);
      var title = HTMLworkTitle.replace("%data%",work.jobs[job]["title"]);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job]["datesWorked"]);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job]["description"]);
      $(".work-entry:last").append(employerName + title);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

displayWork();


// var weirdObject = {
//     "property": "Time for an astronomy lesson!",
//     "property1": "(Cameron's minor in college was astronomy)",
//     "property-2": "The 4 Galilean (largest) moons of Jupiter are:",
//     "property 3": "Io, Ganymede, Callisto, Europa",
//     "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
//     " property": "The Sun contains 99.87% of the mass of the entire solar system",
//     "property()": "There are 5 dwarf planets in our solar system:",
//     "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
//     "8property": "Mars has two tiny moons: Phobos and Deimos"
// };

// // Use console.log() to figure out if dot and/or bracket notation
// // will work to access the properties below. Mark true if you can use dot/bracket
// // notation to access the property, otherwise mark false.


// // I'll give you the first answer. The rest are set to false. Try out each property and
// // if you can use dot or bracket notation to access it, change the answer to true!

// // property
// var dotNotation0 = true;
// var bracketNotation0 = true;
// console.log(weirdObject.property);
// console.log(weirdObject["property"]);

// // property1
// var dotNotation1 = true;
// var bracketNotation1 = true;
// console.log(weirdObject.property1);
// console.log(weirdObject["property1"]);

// // property-2
// var dotNotation2 = false;
// var bracketNotation2 = true;
// console.log(weirdObject.property-2);
// console.log(weirdObject["property-2"]);

// // property 3
// var dotNotation3 = false;
// var bracketNotation3 = true;
// //console.log(weirdObject.property 3);
// console.log(weirdObject["property 3"]);

// // property$
// var dotNotation4 = true;
// var bracketNotation4 = true;
// console.log(weirdObject.property$);
// console.log(weirdObject["property$"]);

// // *space*property
// var dotNotation5 = false;
// var bracketNotation5 = true;
// console.log(weirdObject. property);
// console.log(weirdObject[" property"]);

// // property()
// var dotNotation6 = false;
// var bracketNotation6 = true;
// //console.log(weirdObject.property());
// console.log(weirdObject["property()"]);


// // property[]
// var dotNotation7 = false;
// var bracketNotation7 = true;
// //console.log(weirdObject.property[]);
// console.log(weirdObject["property[]"]);

// // 8property
// var dotNotation8 = false;
// var bracketNotation8 = true;
// //console.log(weirdObject.8property);
// console.log(weirdObject["8property"]);