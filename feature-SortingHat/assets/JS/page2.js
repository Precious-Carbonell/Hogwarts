var sound = new Audio('../sounds/music.mp3'); 

// Define houses with their respective colors
var houses = {
  "Hufflepuff": " #ffcc00",
  "Gryffindor": " #990000",
  "Slytherin": " #009933",
  "Ravenclaw": " #0066cc"
};

var randomhouse = Math.floor(Math.random() * Object.keys(houses).length);
var houseName = Object.keys(houses)[randomhouse];
var houseColor = houses[houseName];

var audio = new Audio('../sounds/' + houseName + 'before.mp3');
var audioafter = new Audio('../sounds/' + houseName + 'after.mp3');

document.querySelector(".house a").addEventListener("click", housetext);

function housetext() {
  document.querySelector(".house a").remove();

  sound.pause();
  sound.currentTime = 0;
  sound.play();

  audio.pause();
  audio.currentTime = 0;
  audio.play();

  document.querySelector(".house").textContent = "Hmmm...";

  audio.onended = function() {
    audioafter.play();
    document.querySelector(".house").textContent = houseName;
    document.querySelector(".housename").textContent = houseName;
    document.querySelector(".housename").style.color = houseColor; 
  };

  audioafter.onended = function() {
    setTimeout(function() {
      document.querySelector(".page2").style.backgroundImage = "url('../images/" + houseName + ".jpg')";
      document.getElementById("eighth").remove();
      document.querySelector("#over").classList.remove("overlay");
      document.querySelector("#cont").classList.remove("container");
      document.querySelector("#over").classList.add("overlayactive");
      document.querySelector("#cont").classList.add("containeractive");

      // Show house logo
      document.querySelectorAll('.house-logo').forEach(function(el) {
          el.style.display = 'none'; // Hide all logos first
      });
      document.getElementById(houseName + "-logo").style.display = 'block'; // Show specific house logo
    }, 500);
  };
}

document.getElementById('exitButton').addEventListener('click', function() {
  window.location.href = 'page1.html';});
