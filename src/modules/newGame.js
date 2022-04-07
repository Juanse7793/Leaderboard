// this code should be executed just one time to obtain the game key

const apiBase = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const newGame = async () => {
  const response = await fetch(apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name: 'Juan Game' }),
  });

  const data = await response.json();
  return data;
};

newGame();