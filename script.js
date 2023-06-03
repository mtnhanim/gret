//Home page name animation
var text = "SAlih Ahmad";   
var speed = 40; // Interval between each letter (in milliseconds)
var i = 0;
var typewriter = document.querySelector('.name');

function typeWriter() {
  
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
//Home page name animation END


//ABout Page Image animation
const imageUrls = [
  "pics/abt-pic.jpeg",
  "pics/mnke.jpeg",
  "pics/bgfinal.jpeg",
];

const ytUrls = [
  "https://www.youtube.com/embed/w8ZV24YzaCA?list=PLb7Iv7aPKEK6l5F45E3fE_SWiLgNTGOgg",
  "https://www.youtube.com/embed/w8ZV24YzaCA?list=PLb7Iv7aPKEK6l5F45E3fE_SWiLgNTGOgg",
  "https://www.youtube.com/embed/w8ZV24YzaCA?list=PLb7Iv7aPKEK6l5F45E3fE_SWiLgNTGOgg",
];



const imageElement = document.getElementById("image-frame");
const ytelement = document.getElementById("yt")

function displayImagesWithAnimation() {
  let index = 0;
  setInterval(() => {
    // Apply animation class to the image
    imageElement.classList.add("fade-in");
    
    // Set the image URL
    imageElement.src = imageUrls[index];
    
    // Increment index or reset to 0 if the last image is reached
    index = (index + 1) % imageUrls.length;
    
    // Remove the animation class after a certain time (adjust the duration as needed)
    setTimeout(() => {
      imageElement.classList.remove("fade-in");
    }, 2000); // Duration in milliseconds
  }, 5000); // Interval between image changes in milliseconds
}

displayImagesWithAnimation();



function displayytWithAnimation() {
  let index = 0;
  setInterval(() => {
    // Apply animation class to the image
    ytelement.classList.add("fade-in");
    
    // Set the image URL
    ytelement.src = ytUrls[index];
    
    // Increment index or reset to 0 if the last image is reached
    index = (index + 1) % ytUrls.length;
    
    // Remove the animation class after a certain time (adjust the duration as needed)
    setTimeout(() => {
      ytelement.classList.remove("fade-in");
    }, 2000); // Duration in milliseconds
  }, 5000); // Interval between image changes in milliseconds
}

displayytWithAnimation();


//ABout Page Image animation END


