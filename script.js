var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n){
showSlide(slideIndex += n);
}

function dotslide(n){
showSlide(slideIndex = n);
}

function showSlide(n) {
var i;
var slides = document.getElementsByClassName("imgslide");
var dot = document.getElementsByClassName("dot");

if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length;
}
for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";
}

for (i = 0; i < slides.length; i++) {
    
    dot[i].className = dot[i].className.replace(" active", "");
}

slides[slideIndex - 1].style.display = "block";

dot[slideIndex - 1].className += " active";

}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
      nameError.textContent = "This field needs to be filled";
      nameError.style.color = "red";
      event.preventDefault();
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "This field needs to be filled";
      emailError.style.color = "red";
      event.preventDefault();
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "This field needs to be filled";
      messageError.style.color = "red";
      event.preventDefault();
    }
  });