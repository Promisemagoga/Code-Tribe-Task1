const name = "Promise Tshegofatso Magoga";
document.getElementById("name").innerHTML = name;

const bio = "I am a young energetic individual, working my way up to be the female version of Mark Zuckernberg. I am a fullstack web developer and I have experience building full-stack web applications and Restful APIs using languages and frameworks including html/css/javaScript, Node.js/Express.js, Testing APIs using postman and mongodb."
document.getElementById("bio").innerHTML = bio;

const img = new Image(200,200);
img.src = "src/IMG_20220704_123351_340.webp";
document.getElementById("bioC").appendChild(img)

const video = document.createElement('video');
video.src = "src/1562009973860.mp4"
video.controls = true;
video.muted = false;
video.width = 1400;
document.getElementById("vid").appendChild(video)



/*var a = document.createElement('a')
var nav = document.createTextNode(["Home ", "About me", "Contact me"])
a.appendChild(nav);

[
a.title = "Home ",
a.title = "About me",
a.title = "Contact me"
]

[
a.href = "/index.html",
a.href = "./pages/about.html",
a.href = "./pages/contact.html"
]

document.getElementById("navigationBar").appendChild(a)*/

const address = "972 Block T <br> Sosganguve,<br> 0152, Pretoria, <br> Gauteng";
document.getElementById("adress").innerHTML = address;