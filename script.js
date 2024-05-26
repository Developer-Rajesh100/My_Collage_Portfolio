document.getElementById("myForm").onsubmit = validateForm;

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const agree = document.getElementById("agree").checked;

  const nameError = document.getElementById("name-error");
  const numberError = document.getElementById("number-error");
  const emailError = document.getElementById("email-error");
  const agreeError = document.getElementById("agree-error");

  nameError.textContent = "";
  numberError.textContent = "";
  emailError.textContent = "";
  agreeError.textContent = "";

  let hasErrors = false;

  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Please enter your name properly.";
    hasErrors = true;
  }

  if (number === "" || number.length < 10) {
    numberError.textContent =
      "Please enter your number (Minimum Length 10 Digit)";
    hasErrors = true;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    hasErrors = true;
  }

  if (!agree) {
    agreeError.textContent = "Please agree to the above information.";
    hasErrors = true;
  }

  if (!hasErrors) {
    Swal.fire({
      title: "Success!",
      text: "Successfully Sented Your Message!",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      document.getElementById("myForm").submit();
    });
  } else {
    Swal.fire({
      title: "Error!!!",
      text: "Please fill the form properly.",
      icon: "error",
      timer: 3000,
      showConfirmButton: false,
    });
  }

  return false;
}
