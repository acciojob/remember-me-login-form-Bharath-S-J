//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Show "existing user" button if data exists
window.onload = () => {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "inline";
  }
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const remember = checkbox.checked;

  alert(`Logged in as ${username}`);

  if (remember) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show or hide "existing" button based on whether credentials are stored
  existingBtn.style.display =
    localStorage.getItem("username") && localStorage.getItem("password")
      ? "inline"
      : "none";
});

existingBtn.addEventListener("click", () => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
  }
});
