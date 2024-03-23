document.getElementById('launchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    document.body.classList.add('fadeout'); // Add the 'fadeout' class to the body

    setTimeout(function() {
        window.location.href = "https://precious-carbonell.github.io/Hogwarts/features-spellbook/newpage.html"; // Redirect to newPage.html after 6 seconds
    }, 6000); // Change 3000 to 6000
});
