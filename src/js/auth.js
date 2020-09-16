"use strict";

function addErrorToInput(elem) {
  elem.classList.add("input-error");
}

function removeErrorFromInput(elem) {
  elem.classList.remove("input-error");
}

function checkIfEmpty(elements) {
  let error = false;
  elements.forEach((elem) => {
    removeErrorFromInput(elem);
    if (elem.value.length === 0) {
      addErrorToInput(elem);
      error = true;
    }
  });
  return error;
}

const forms = document.getElementsByClassName("auth-form");

for (let form of forms) {
  const inputs = form.getElementsByTagName("input");
  for (let inp of inputs) {
    inp.addEventListener("change", (e) => {
      if (inp.value.length > 0) {
        removeErrorFromInput(inp);
      }
    });
  }
}

const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-submit-button");

if (signupButton != undefined) {
  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username;
    const email = signupForm.email;
    const password = signupForm.password;
    const password_confirm = signupForm["password-confirm"];
    const input_elems = [username, email, password, password_confirm];
    let error = checkIfEmpty(input_elems);
    if (error) {
      return;
    } else {
      //todo api
    }
  });
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit-button");

if (loginButton != undefined) {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username;
    const password = loginForm.password;
    const input_elems = [username, password];
    let error = checkIfEmpty(input_elems);

    if (error) {
      return;
    } else {
      //todo api
    }
  });
}
