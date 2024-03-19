var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function toLogin(){
  loadPartialView('login', document.querySelector('.page'))
}
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:

    document.getElementById("nextBtn").addEventListener("click", toLogin());
    // document.getElementById("regForm").submit();
    
    
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  var x, y, z, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
  
  // Check input fields
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].classList.add("invalid");
      valid = false;
    }
  }
  
  // Check select elements
  for (i = 0; i < z.length; i++) {
    if (z[i].value == "" || z[i].value == "Carreer" || z[i].value == "Area") {
      z[i].classList.add("invalid");
      valid = false;
    }
  }

  // Mark the step as finished and valid if all fields are valid
  if (valid) {
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
  }
  
  return valid;
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function togglePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(document).ready(function() {
  $('#loginlink').on('click', function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace
      loadPartialView('login', document.querySelector('.page'))
  });
});