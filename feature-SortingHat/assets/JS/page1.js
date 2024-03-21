  function toggleMute() {
    var audio = document.getElementById("backgroundMusic");
    if (audio.paused) {
      audio.play();
      document.getElementById("soundIcon").src = "../images/sound-icon.png";
    } else {
      audio.pause();
      document.getElementById("soundIcon").src = "../images/sound-muted.png";
    }
  }

  function toggleHelp() {
    var popup = document.getElementById('helpPopup');
    if (!popup) {
      createHelpPopup();
    } else if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
      popup.classList.add('slideIn');
    } else {
      popup.classList.remove('slideIn');
      popup.classList.add('slideOut');
      // Remove slideOut class after animation completes
      setTimeout(function() {
        popup.style.display = 'none';
        popup.classList.remove('slideOut');
      }, 500); // Adjust according to the animation duration
    }
  }

  // Function to create the help popup dynamically
  function createHelpPopup() {
    var helpPopup = document.createElement('div');
    helpPopup.id = 'helpPopup';
    helpPopup.classList.add('popup-card');
    helpPopup.innerHTML = `
      <div class="popup-header">
        <h2 style="color:rgb(225, 187, 48);">HOW TO PLAY</h2>
        <span class="popup-close" onclick="toggleHelp()">X</span>
      </div>  
      <h3>Sorting Hat House Selection</h3>
      <ul>
        <li><strong class="highlight">Click to Begin:</strong> Click "Start Sorting".</li>
        <li><strong class="highlight">Discover Your House:</strong> The Sorting Hat will randomly assign you to Gryffindor, Hufflepuff, Ravenclaw, or Slytherin.</li>
        <li><strong class="highlight">Learn Traits:</strong> Explore your house's traits and values.</li>
        <li><strong class="highlight">Share & Enjoy:</strong> Share your result and embrace your house's spirit!</li>
        <li><strong class="highlight">Repeat as Desired:</strong> Re-sort to explore all houses.</li>
      </ul>`;
    document.body.appendChild(helpPopup);
    helpPopup.classList.add('slideIn');
  }

  // Close the popup when clicking outside of it
  window.onclick = function(event) {
    var popup = document.getElementById('helpPopup');
    var closeButton = document.querySelector('.popup-close');
    if (event.target == popup && event.target !== closeButton) {
      popup.classList.remove('slideIn');
      popup.classList.add('slideOut');
      // Remove slideOut class after animation completes
      setTimeout(function() {
        popup.style.display = 'none';
        popup.classList.remove('slideOut');
      }, 500); // Adjust according to the animation duration
    }
  }

  function playClickSound() {
    var clickSound = document.getElementById('clickSound');
    clickSound.playbackRate = 5; // Adjust the playback rate as needed (2x faster in this case)
    clickSound.play();
  }
