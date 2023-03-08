window.onload = function () {
  //about me
  const heading = "About Me";
  document.getElementById("heading1").innerHTML = heading
  const img = new Image();
  img.src = "assets/icons/female programmer.jpg";
  document.getElementById("about").appendChild(img);
  const bio = "I am a young energeting individual working my way up to be the female version of Mark Zuckernburg.<br>My journey as a geek started at mtn business app academy where I was studying mobile app development.<br>Right at that moment I knew that programming was my calling.From there I was accepted at Afica Agility,<br>for the girls in tech cohort 5 bootcamp.I took it as I am an international student representing my country.<br>And i did represent my country well as I brought back the tittle <em><Span style='color: #5FD1D4;'>backend web developer</Span></em> and I also brought back the <br>status as my team and I came second at the Africa Agility grand finale hackathon.I am also a<br> self-taught frontend web developer.My hobby it is also educational,I am a partime fundza reader<br>,I am also a fundza cover letter 2022 competition winner.For this story you can type in my full name on google."
  document.getElementById("P1").innerHTML = bio;

  //experience
  const heading1 = "Experience"
  document.getElementById("experience").innerHTML = heading1;
  const typo1 = "01"
  document.getElementById("h1").innerHTML = typo1;
  const designation1 = "<span style='color: #EC669F;'>IMO ICTS internet cafe</span>, Technical assistant volunteer"
  document.getElementById("designation1").innerHTML = designation1;
  const description1 = "I worked there for a year as a technical assistant, <br>doing basically everything that is done at at internet cafe."
  document.getElementById("description1").innerHTML = description1

  const typo2 = "02"
  document.getElementById("h2").innerHTML = typo2;
  const designation2 = "<span style='color: #7F5DF6;'>Africa Agility</span>, Backend developer student"
  document.getElementById("designation2").innerHTML = designation2;
  const description2 = "I have done several project as part of my school project and <br>my team and I came second at the grand finale hackathon of Africa Agility."
  document.getElementById("description2").innerHTML = description2;

  const typo3 = "03"
  document.getElementById("h3").innerHTML = typo3;
  const designation3 = "<span style='color: #FF5001;'>ADPList</span>, Webflow designer student";
  document.getElementById("designation3").innerHTML = designation3;
  const description3 = "In order to get certified we were required to build a project that meet a<br>specific minimum requirements, and I built a website for a website around where I stay."
  document.getElementById("description3").innerHTML = description3

  //education
  const heading2 = "Education"
  document.getElementById("education").innerHTML = heading2;

  const schoolName = "Kgadime matsepe secondary school";
  document.getElementById("school1").innerHTML = schoolName;
  const grade = "Matric(Grade 12)";
  document.getElementById("grade").innerHTML = grade;
  const date1 = "<i style='color: #EC669F;'>January 2020 - December 2020</i>";
  document.getElementById("date1").innerHTML = date1;

  const organisation1 = "Mtn business app academy";
  document.getElementById("organisation1").innerHTML = organisation1;
  const course1 = "Mobile app development";
  document.getElementById("course1").innerHTML = course1;
  const level = "NQF Level 5"
  document.getElementById("level").innerHTML = level
  const date2 = "<i style='color: #7F5DF6;'>April 2022 - September 2022</i>";
  document.getElementById("date2").innerHTML = date2;

  const organisation2 = "Afica Agility";
  document.getElementById("organisation2").innerHTML = organisation2;
  const course2 = "Backend web development";
  document.getElementById("course2").innerHTML = course2;
  const date3 = "<i style='color: #FF5001;'>24 october 2022 - 16 December 2022</i>";
  document.getElementById("date3").innerHTML = date3;

  const organisation3 = "ADPList";
  document.getElementById("organisation3").innerHTML = organisation3;
  const course3 = "Webflow design";
  document.getElementById("course3").innerHTML = course3;
  const date4 = "<i style='color: #5FD1D4;'>24 january 2023 - 17 February 2023</i>";
  document.getElementById("date4").innerHTML = date4;

  const img1 = "<img src = 'assets/images/diploma-1390785__340.webp' alt='graduation hat'  style='position: relative; left: 300px;bottom: 50%; '>";
  document.getElementById("edu").innerHTML = img1

  //skills
  const heading3 = "Skills"
  document.getElementById("skill").innerHTML = heading3;

  const htmlLogo = "<img src = 'assets/images/html-5.png' alt='html5' width='100' height='100'>";
  document.getElementById("html").innerHTML = htmlLogo;
  const typo4 = "Html"
  document.getElementById("typo4").innerHTML = typo4;

  const cssLogo = "<img src = 'assets/images/css.png' alt='Css3' width='100' height='100'>";
  document.getElementById("css").innerHTML = cssLogo;
  const typo5 = "Css"
  document.getElementById("typo5").innerHTML = typo5;

  const javaScriptLogo = "<img src = 'assets/images/js.png' alt='javaScript' width='100' height='100'>";
  document.getElementById("javaScript").innerHTML = javaScriptLogo;
  const typo6 = "javaSCript"
  document.getElementById("typo6").innerHTML = typo6;

  const flutter = "<img src = 'assets/images/framework.png' alt='flutter' width='100' height='100'>";
  document.getElementById("flutter").innerHTML = flutter;
  const typo7 = "Flutter"
  document.getElementById("typo7").innerHTML = typo7;

  const dart = "<img src = 'assets/images/coding.png' alt='dart' width='100' height='100'>";
  document.getElementById("dart").innerHTML = dart;
  const typo8 = "Dart"
  document.getElementById("typo8").innerHTML = typo8;

  const firebaseLogo = "<img src = 'assets/images/database-storage.png' alt='firebase' width='100' height='100'>";
  document.getElementById("firebase").innerHTML = firebaseLogo;
  const typo9 = "Firebase"
  document.getElementById("typo9").innerHTML = typo9;

  const figmaLogo = "<img src = 'assets/images/figma.png' alt='figma' width='100' height='100'>";
  document.getElementById("figma").innerHTML = figmaLogo;
  const typo10 = "Figma"
  document.getElementById("typo10").innerHTML = typo10;

  const webflowLogo = "<img src = 'assets/images/web-design.png' alt='webflow' width='100' height='100'>";
  document.getElementById("webflow").innerHTML = webflowLogo;
  const typo11 = "Webflow"
  document.getElementById("typo11").innerHTML = typo11;

  const wordLogo = "<img src = 'assets/images/word.png' alt='word' width='100' height='100'>";
  document.getElementById("word").innerHTML = wordLogo;
  const typo12 = "MS Word"
  document.getElementById("typo12").innerHTML = typo12;

  const reactLogo = "<img src = 'assets/images/atom.png' alt='react width='100' height='100'>";
  document.getElementById("react").innerHTML = reactLogo;
  const typo13 = "React Native"
  document.getElementById("typo13").innerHTML = typo13;

  const expressLogo = "<img src = 'assets/images/framework.png' alt='express width='100' height='100'>";
  document.getElementById("express").innerHTML = expressLogo;
  const typo14 = "Express.js"
  document.getElementById("typo14").innerHTML = typo14;

  const mongodbLogo = "<img src = 'assets/images/database-storage.png' alt='mongodb width='100' height='100'>";
  document.getElementById("mongo").innerHTML = mongodbLogo;
  const typo15 = "MongoDB"
  document.getElementById("typo15").innerHTML = typo15;

  const nodeLogo = "<img src = 'assets/images/code.png' alt='mongodb width='100' height='100'>";
  document.getElementById("node").innerHTML = nodeLogo;
  const typo16 = "Node.js"
  document.getElementById("typo16").innerHTML = typo16;

  const powerPointLogo = "<img src = 'assets/images/powerpoint.png' alt='node width='100' height='100'>";
  document.getElementById("power").innerHTML = powerPointLogo;
  const typo17 = "MS PowerPoint"
  document.getElementById("typo17").innerHTML = typo17;

  const apiLogo = "<img src = 'assets/images/browser.png' alt='node width='100' height='100'>";
  document.getElementById("api").innerHTML = apiLogo;
  const typo18 = "Rest APIs"
  document.getElementById("typo18").innerHTML = typo18;

  //projects

  //html and css projects
  const img2 = "'<img src = 'assets/images/csss.PNG' width='280' height='300' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img2").innerHTML = img2;
  const projectTypo1 = "Color Markers";
  document.getElementById("projectTypo1").innerHTML = projectTypo1;
  const projectTypoA = "I learnt colours by building a set of coloured markers";
  document.getElementById("projectTypoA").innerHTML = projectTypoA;


  const img3 = "'<img src = 'assets/images/PROMISE.PNG' width='280' height='300' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img3").innerHTML = img3;
  const projectTypo2 = " Portfolio Website";
  document.getElementById("projectTypo2").innerHTML = projectTypo2;
  const projectTypoB = "I combined all the html and css skills learnt to build this portfolio";
  document.getElementById("projectTypoB").innerHTML = projectTypoB;

  const img4 = "'<img src = 'assets/images/plug.PNG' width='280' height='300' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img4").innerHTML = img4;
  const projectTypo3 = "Plug";
  document.getElementById("projectTypo3").innerHTML = projectTypo3;
  const projectTypoC = "I larnt the basics of html by building this informative website";
  document.getElementById("projectTypoC").innerHTML = projectTypoC;

  const img5 = "'<img src = 'assets/images/Pet-shop.PNG' width='280' height='320' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img5").innerHTML = img5;
  const projectTypo4 = "Pet-shop";
  document.getElementById("projectTypo4").innerHTML = projectTypo4;
  const projectTypoD = "I learnt the basics of html by building this website";
  document.getElementById("projectTypoD").innerHTML = projectTypoD;

  const img6 = "'<img src = 'assets/images/Pro cafe.PNG' width='280' height='320' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img6").innerHTML = img6;
  const projectTypo5 = "Pro's cafe";
  document.getElementById("projectTypo5").innerHTML = projectTypo5;
  const projectTypoE = "Learnt basic of css by building pro's cafe";
  document.getElementById("projectTypoE").innerHTML = projectTypoE;



  const img7 = "'<img src = 'assets/images/Registration.PNG' width='280' height='320' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img7").innerHTML = img7;
  const projectTypo6 = "Registration Form";
  document.getElementById("projectTypo6").innerHTML = projectTypo6;
  const projectTypoF = "Learnt html form by building registration form";
  document.getElementById("projectTypoF").innerHTML = projectTypoF;


  //javaScript projects

  const video = "'<video src = 'assets/videos/Resolution1.mp4' width= '280' height= '320' controls style='border-radius: 10x; position: relative; left: 10px;''>"
  document.getElementById("video").innerHTML = video;
  const projectTypo7 = "New Year Resolution Manager";
  document.getElementById("projectTypo7").innerHTML = projectTypo7;
  const projectTypoG = "Gave the website some functionality with javaScript";
  document.getElementById("projectTypoG").innerHTML = projectTypoG;

  const img8 = "'<img src = 'assets/images/Calculator.PNG' width='280' height='320' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img8").innerHTML = img8;
  const projectTypo8 = "Calculator";
  document.getElementById("projectTypo8").innerHTML = projectTypo8;
  const projectTypoH = "Gave the website some functionality with javaScript";
  document.getElementById("projectTypoH").innerHTML = projectTypoH;

  const img9 = "'<img src = 'assets/images/Lets style.PNG' width='280' height='280' style='border-radius: 10px; position: relative;left: 10px;'>"
  document.getElementById("img9").innerHTML = img9;
  const projectTypo9 = "Let's Style It";
  document.getElementById("projectTypo9").innerHTML = projectTypo9;
  const projectTypoI = "With flutter I enjoy working on the frontend,playing around with app bars and design.I used firebase for authentication.";
  document.getElementById("projectTypoI").innerHTML = projectTypoI;

  const video1 = "'<video src = 'assets/videos/bandicam 2023-01-29 13-59-36-928.mp4' width= '280' height= '280' controls style='border-radius: 10x; position: relative; left: 10px;''>"
  document.getElementById("video1").innerHTML = video1;
  const projectTypo10 = "Nzululwazi";
  document.getElementById("projectTypo10").innerHTML = projectTypo10;
  const projectTypoJ = "With flutter I enjoy working on the frontend,playing around with app bars and design.I used firebase for authentication.";
  document.getElementById("projectTypoJ").innerHTML = projectTypoJ;

  const video2 = "'<video src = 'assets/videos/Survey Form.mp4' width= '280' height= '280' controls style='border-radius: 10x; position: relative; left: 10px;''>"
  document.getElementById("video2").innerHTML = video2;
  const projectTypo11 = "Survey Form";
  document.getElementById("projectTypo11").innerHTML = projectTypo11;
  const projectTypoK = "I built a survey form to collect data from users.Nodejs/Expressjs and mongodb was used to collect data";
  document.getElementById("projectTypoK").innerHTML = projectTypoK;

  const video3 = "'<video src = 'assets/videos/bandicam 2023-01-29 12-42-10-484.mp4' width= '280' height= '250' controls style='border-radius: 10x; position: relative; left: 10px;''>"
  document.getElementById("video3").innerHTML = video3;
  const projectTypo12 = "Free-Travel-Website";
  document.getElementById("projectTypo12").innerHTML = projectTypo12;
  const projectTypoL = "This is a bootstrap template and as a backend developer i was working with a contact form.I connected the contsct form to the mongoDB so that whenever a user fill in the form it get's saved to the data base.";
  document.getElementById("projectTypoL").innerHTML = projectTypoL;


  const address = "972 Block T <br> Sosganguve,<br> 0152, Pretoria, <br> Gauteng";
  const p1 = "Made with";
  const imgOne =  "<img src = './assets/icons/heart.png' alt='' width='16'>";
  const p2 = "by Promise Tshegofatso Magoga";

  document.getElementById("adress").innerHTML = address;
  document.getElementById("owner").innerHTML = p1 + imgOne + p2;


}
