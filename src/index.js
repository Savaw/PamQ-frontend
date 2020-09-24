console.log("PamQ © Savaw");

import "./css/main.css";
import "./css/navbar-footer.css";
import "./css/auth.css";
import "./js/auth.js";
import "./js/api.js";
import "./js/main.js";

import { isLoggedIn } from "./js/utils.js";
import { logout } from "./js/api.js";

const pageContainer = document.getElementById("page-container");

// Navbar
let navbarHtml = `
<a class="navbar-item" href="/">Home</a>
<a class="navbar-item" href="account/">Login/Signup</a>
`;

let navbarHtmlAuth = `
  <a class="navbar-item" href="/">Home</a>
  <a class="navbar-item" id="logout-button">Logout</a>
`;

let navbarDiv = document.createElement("nav");
navbarDiv.id = "navbar";
navbarDiv.innerHTML = navbarHtml;

if (isLoggedIn()) {
  navbarDiv.innerHTML = navbarHtmlAuth;
}

pageContainer.insertBefore(navbarDiv, pageContainer.firstChild);

const logoutButton = document.getElementById("logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", (e) => {
    logout();
    // navbarDiv.innerHTML = navbarHtml;
    window.location.href = "/account/";
  });
}

// Footer
let footerHtml = `
    PamQ <br/>
    Savaw © 2020
  `;

let footerDiv = document.createElement("footer");
footerDiv.id = "footer";
footerDiv.innerHTML = footerHtml;
pageContainer.appendChild(footerDiv);
