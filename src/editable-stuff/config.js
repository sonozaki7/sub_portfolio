// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "So",
  middleName: "",
  lastName: "Nozaki",
  message: " Motto : Leveraging technology to change society ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sonozaki7",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sonozaki7777",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sonozaki7/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sonozaki/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/So_Nozaki/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/sonozaki7.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./portfolio_profile_pic.jpeg"),
  imageSize: 375,
  message:
    "My name is So Nozaki. I am a 4th year Computer Engineering student at UBC. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  //resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  resume: "https://www.overleaf.com/read/hbhsbwbvgndr"
  //resume: require("../editable-stuff/resume.pdf")
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sonozaki7", //i.e."johnDoe12Gh"
  reposLength: 7,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Node.js", value: 85 },
    { name: "Data Structures", value: 80},
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 64 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Tech Assistant',// Here Add Company Name
      companylogo: require('../assets/img/UBCO.png'),
      date: 'May 2020 – August 2020',
    },
    {
      role: 'Game Test Intern, QA',
      companylogo: require('../assets/img/BSicon.png'),
      date: 'May 2021 – Nov 2021',
    },
  ]
}

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("./portfolio_profile_pic.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      //img: require("../editable-stuff/hashirshoaeb.png"), 
      img: require("./portfolio_profile_pic.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};



//Blog SECTION
const blog = {
  show: true,
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for summer 2023 internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sou.nozaki@gmail.com",
};



export { navBar, mainBody, about, repos, skills, experiences, leadership, blog
  , getInTouch
};
