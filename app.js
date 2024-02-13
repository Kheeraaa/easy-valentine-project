// Get the button and modal
var button = document.getElementById("messageButton");
var modal = document.getElementById("messageModal");

// When the button is clicked, display the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the button and the content element
const toggleButton = document.getElementById("toggleButton");
const contentElement = document.getElementById("content");

// Add event listener to the button
toggleButton.addEventListener("click", function() {
  // Toggle the visibility of the content element
  if (contentElement.style.display === "none") {
    contentElement.style.display = "block";
  } else {
    contentElement.style.display = "none";
  }
});
