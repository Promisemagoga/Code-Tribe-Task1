
const aboutParagraph = "<p>I am a young energeting individual working my way up to be the female version of Mark Zuckernburg.<br>My journey as a geek started at mtn business app academy where I was studying mobile app development.<br>Right at that moment I knew that programming was my calling.From there I was accepted at Afica Agility,<br>for the girls in tech cohort 5 bootcamp.I took it as I am an international student representing my country.<br>And i did represent my country well as I brought back the tittle <em>backend web developer</em> and I also brought back the <br>status as my team and I came second at the Africa Agility grand finale hackathon.I am also a<br> self-taught frontend web developer.My hobby it is also educational,I am a partime fundza reader<br>,I am also a fundza cover letter 2022 competition winner. For this story you can type in my full name on google.</p>";
const address = "972 Block T <br> Sosganguve,<br> 0152, Pretoria, <br> Gauteng";

// declaring contact form variables
const img = new Image(50,50);
img.src = "src/9624482.png";
const typo1 = "Email"
const email = "tshegofatsopromise362@gmail.com"


// Render personal information onto HTML
document.getElementById("about").innerHTML = aboutParagraph;
document.getElementById("adress").innerHTML = address;
document.getElementById("education").innerHTML = education;
document.getElementById("typo1").innerHTML = typo1;
document.getElementById("email").innerHTML = email;

const projects = [
  { title: "Project 1", description: "Lorem ipsum dolor sit amet" },
  { title: "Project 2", description: "Consectetur adipiscing elit" },
  {
    title: "Project 3",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
const education = "Bachelor's Degree in Computer Science, University of XYZ";

// Render personal information onto HTML


document.getElementById("email").innerHTML = email;

// Render projects onto HTML
const projectList = document.getElementById("projectList");
projects.forEach((project) => {
  const projectItem = document.createElement("li");
  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = project.title;
  const projectDescription = document.createElement("p");
  projectDescription.innerHTML = project.description;
  projectItem.appendChild(projectTitle);
  projectItem.appendChild(projectDescription);
  projectList.appendChild(projectItem);
});
