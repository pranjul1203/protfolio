const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  error.innerText = "";
  success.innerText = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Name validation
  if (name === "") {
    error.innerText = "Name is required";
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    error.innerText = "Email is required";
    return;
  } else if (!emailPattern.test(email)) {
    error.innerText = "Enter a valid email address";
    return;
  }

  // Message validation
  if (message === "") {
    error.innerText = "Message cannot be empty";
    return;
  }

  // If all validations pass
  success.innerText = "Form submitted successfully!";
  form.reset();
});
