import { addScores, getScores } from './API.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');

const sortScores = (array) => array.sort((a, b) => b.score - a.score);

const display = () => {
  getScores().then((scoresList) => {
    const scoresSorted = sortScores(scoresList);

    const container = document.querySelector('.table');
    container.innerHTML = '';

    scoresSorted.forEach((object) => {
      const list = document.createElement('li');
      list.classList.add('list');

      const read = `<span class="name">${object.user}:</span>
      <span class="score">${object.score}</span>`;

      list.innerHTML = read;
      container.appendChild(list);
    });
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScores();
  form.reset();
});

refresh.addEventListener('click', () => {
  display();
});

export default display;