const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/E4w1PRf2ZGRwMkOYagAt/scores';

const names = document.querySelector('#name');
const scores = document.querySelector('#scores');

const addScores = async () => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: names.value,
      score: scores.value,
    }),
  });

  const data = await response.json();
  return data;
};

const getScores = async () => {
  const response = await fetch(api);
  const values = await response.json();
  return values.result;
};

export { addScores, getScores };