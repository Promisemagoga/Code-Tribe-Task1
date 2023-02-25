window.onload = function  () {
    //index.js

    const video = document.createElement('video');
    video.src = "assets/videos/1562009973860.mp4"
    video.controls = true;
    video.muted = false;
    video.width = 1400;
    const firstName = "Promise Tshegofatso";
    const lastName = "Magoga";
    const bio = "I am a young energetic individual, working my way up to be the female version of Mark Zuckernberg. I am a fullstack web developer and I have experience building full-stack web applications and Restful APIs using languages and frameworks including html/css/javaScript,Node.js/Express.js, Testing APIs using postman and mongodb."
    const img = new Image(200, 200);
    img.src = "assets/images//IMG_20220704_123351_340.webp";
    const p1 = "Made with";
    const address = "972 Block T <br> Sosganguve,<br> 0152, Pretoria, <br> Gauteng";
    const imgOne =  "<img src = './assets/icons/heart.png' alt='' width='16'>";
    const p2 = "by Promise Tshegofatso Magoga";

    // Render personal information onto HTML in index.js
    document.getElementById("vid").appendChild(video);
    document.getElementById("name").innerHTML = firstName + " " + lastName;
    document.getElementById("bio").innerHTML = bio;
    document.getElementById("bioC").appendChild(img);
    document.getElementById("adress").innerHTML = address;
    document.getElementById("owner").innerHTML = p1 + imgOne + p2;

   
     
}



