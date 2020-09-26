import { getQuizList } from "./api.js";
const quizListContainer = document.getElementById("quiz-list-container");

async function fillQuizList() {
  let res = await getQuizList();
  if (res.status != 200) {
    //todo handle error
  }
  let quizes = res.body.quizes;
  let containerHtml = ""
  quizes.forEach((quiz) => {
    containerHtml += `
    <a>
    <div class="quiz">
    <h3 class="quiz-title">${quiz.name}</h3>
    <div class="quiz-details">
    <p>by</p>
    <p class="quiz-detail"> ${quiz.creator} </p> 
    <p>at</p>
    <p class="quiz-detail"> ${quiz.date_created} </p>
    </div>
    </a>
    </div>`;
  });
  console.log(containerHtml);
  quizListContainer.innerHTML = containerHtml;
}

if (quizListContainer) {
  fillQuizList();
}
