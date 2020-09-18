"use strict";

import {login, signup} from "./api.js";

const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");

const forms = document.getElementsByClassName("auth-form");

const signupTabContent = document.getElementById("signup-tab-content");
const loginTabContent = document.getElementById("login-tab-content");

const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-submit-button");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit-button");

const loginErrHolder = loginTabContent.getElementsByClassName("error-msg-holder")[0];
const signupErrHolder = signupTabContent.getElementsByClassName("error-msg-holder")[0];

if (signupTab != undefined && loginTab != undefined) {
  signupTab.addEventListener("click", (e) => {
    signupTabContent.classList.add("active");
    loginTabContent.classList.remove("active");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  });
  loginTab.addEventListener("click", (e) => {
    loginTabContent.classList.add("active");
    signupTabContent.classList.remove("active");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  });
}

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
      let error = signup(username.value, email.value, password.value, password_confirm.value);
      if (error === null) {
        console.log("ok");
        //todo redirect
        signupErrHolder.innerHTML = ""
      } else {
        console.log(error);
        signupErrHolder.innerHTML = error
      }
    }
  });
}

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
      let error = login(username.value, password.value);
      if (error === null) {
        console.log("ok");
        //todo redirect
        loginErrHolder.innerHTML = ""
      } else {
        console.log(error);
        loginErrHolder.innerHTML = error
      }
    }
  });
}
