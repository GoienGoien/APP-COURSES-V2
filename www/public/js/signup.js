var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

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
    document.getElementById("nextBtn").classList.add("btn-login-form");
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").addEventListener('click', validateAndExecute);

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
    // Check if input is student ID and its length is greater than 10
    if (y[i].id === "user-studentId" && y[i].value.length > 10) {
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
  var x = document.getElementById("user-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function toggleNewPassword() {
  var x = document.getElementById("user-password-edit");
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

function validateAndExecute() {
  var emailInput = document.getElementById('user-email').value.trim();
  var passwordInput = document.getElementById('user-password').value.trim();

  if (emailInput !== '' && passwordInput !== '') {
      
      // Capturar los valores del formulario
      var userName = $('#user-name').val();
      var userLastname = $('#user-lastname').val();
      var userStudentId = $('#user-studentId').val();
      var userCareer = $('#user-career').val();
      var userArea = $('#user-area').val();
      var userEmail = $('#user-email').val();
      var userPassword = $('#user-password').val();

      // Construir el objeto con los datos del formulario
      var formData = {
          Name: userName,
          Lastname: userLastname,
          StudentId: userStudentId,
          Career: userCareer,
          Area: userArea,
          Email: userEmail,
          Password: userPassword
      };

      signup(formData);
      loadPartialView('login', document.querySelector('.page'))
  } else {
    // Handle empty email or password inputs
  }
}

