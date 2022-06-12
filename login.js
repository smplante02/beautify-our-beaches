// for login form
function openForm() {
  document.getElementById("login").style.display = "block";
}

function closeForm() {
  document.getElementById("login").style.display = "none";
}

// for my account page
function openAccount(){
  document.getElementById("account").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function closeAccount(){
  document.getElementById("account").style.display = "none";
}
