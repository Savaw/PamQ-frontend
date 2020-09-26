import { getQuizList, getQuizListByUser } from "./api.js";
const quizListContainer = document.getElementById("quiz-list-container");

function createQuizList(quizes) {
  let containerHtml = "";
  quizes.forEach((quiz) => {
    containerHtml += `
      
      <div class="quiz">
      <a>
      <h3 class="quiz-title">${quiz.name}</h3>
      </a>
      <div class="quiz-details">
      <p>by</p>
      <a href="/quiz/list.html?createdby=${quiz.creator}">
      <p class="quiz-detail"> ${quiz.creator} </p> 
      </a>
      <p>at</p>
      <p class="quiz-detail"> ${quiz.date_created} </p>
      </div>
      
      </div>`;
  });
  quizListContainer.innerHTML = containerHtml;
}

async function showQuizListAll() {
  let res = await getQuizList();
  if (res.status != 200) {
    //todo handle error
  }
  let quizes = res.body.quizes;
  createQuizList(res.body.quizes);
}

async function showQuizListByUser(username) {
  let res = await getQuizListByUser(username);
  if (res.status != 200) {
    //todo handle error
  }
  let quizes = res.body.quizes;
  createQuizList(res.body.quizes);
}

if (quizListContainer) {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  let createdby = urlParams.get("createdby");
  if (createdby) showQuizListByUser(createdby);
  else showQuizListAll();
}
