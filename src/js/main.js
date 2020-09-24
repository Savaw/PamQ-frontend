import { isLoggedIn } from "./utils.js";

const quizListButton = document.getElementById("quiz-list");
const quizCreateButton = document.getElementById("quiz-create");

const needAuthItems = [quizCreateButton, quizListButton];

for (let item of needAuthItems) {
  if (item) {
    item.addEventListener("click", (e) => {
      if (!isLoggedIn()) {
        window.location.href = "/account/";
      }
    });
  }
}

if (quizListButton) {
  quizListButton.addEventListener("click", (e) => {
    if (isLoggedIn()) {
        window.location.href = "/quiz/list.html";
    }
  });
}
if (quizCreateButton) {
    quizCreateButton.addEventListener("click", (e) => {
      if (isLoggedIn()) {
          window.location.href = "/quiz/new.html";
      }
    });
  }