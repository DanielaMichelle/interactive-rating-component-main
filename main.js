const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');
const score3 = document.getElementById('score-3');
const score4 = document.getElementById('score-4');
const score5 = document.getElementById('score-5');
const btnSubmit = document.getElementsByClassName('rating-component-main--btn')[0];
const scores = [score1, score2, score3, score4, score5];
let chosenScore = 0;

scores.forEach(sc => {
  sc.addEventListener('click', () => {
    let scoresList = scores.filter(element => element !== sc);
    sc.className = "after-click";
    scoresList.forEach(score => score.classList.remove("after-click"));
    chosenScore = sc.textContent;
    localStorage.setItem("rating", chosenScore);
  })
});

btnSubmit.addEventListener('click', () => {
    window.location.href="http://127.0.0.1:5500/thank-you.html";
});