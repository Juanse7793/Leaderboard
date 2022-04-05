const display = () => {
  const objects = [
    {
      name: 'Name',
      score: 100,
    },
    {
      name: 'Name',
      score: 20,
    },
    {
      name: 'Name',
      score: 50,
    },
    {
      name: 'Name',
      score: 78,
    },
    {
      name: 'Name',
      score: 125,
    },
    {
      name: 'Name',
      score: 77,
    },
    {
      name: 'Name',
      score: 42,
    },
  ];

  const container = document.querySelector('.table');

  objects.forEach((object) => {
    const list = document.createElement('li');
    list.classList.add('list');
    const read = `<span class="name">${object.name}:</span>
    <span class="score">${object.score}</span>`;
    list.innerHTML = read;
    container.appendChild(list);
  });
};

export default display;