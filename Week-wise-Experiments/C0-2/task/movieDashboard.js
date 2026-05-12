const movies = [
  { title: 'The Nimbus Code', rating: 8 },
  { title: 'Sunset Express', rating: 7 },
  { title: 'Galaxy Drift', rating: 9 },
  { title: 'Crimson Alley', rating: 6 },
  { title: 'Midnight Pulse', rating: 8 },
  { title: 'Neon Mirage', rating: 7 },
  { title: 'Echo Valley', rating: 9 },
  { title: 'Winter Harbor', rating: 8 },
  { title: 'Silver Horizon', rating: 7 },
  { title: 'Golden Orbit', rating: 9 }
];

const domOps = { direct: 0, virtual: 0 };
const virtualState = movies.map(movie => ({ ...movie }));

function updateCounters() {
  document.getElementById('directCount').textContent = domOps.direct;
  document.getElementById('virtualCount').textContent = domOps.virtual;
}

function createCard(movie, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${movie.title}</h3>
    <div class="rating" data-rating="${index}">Rating: ${movie.rating}</div>
    <div class="actions">
      <button onclick="changeRatingDirect(${index}, 1)">+1</button>
      <button onclick="changeRatingDirect(${index}, -1)">-1</button>
    </div>`;
  return card;
}

function renderDirect() {
  const grid = document.getElementById('movieGrid');
  grid.innerHTML = '';
  movies.forEach((movie, idx) => {
    grid.appendChild(createCard(movie, idx));
  });
  domOps.direct += movies.length * 2;
  updateCounters();
}

function renderVirtual() {
  const grid = document.getElementById('movieGrid');
  if (!grid.children.length) {
    renderDirect();
    return;
  }
  virtualState.forEach((movie, idx) => {
    const text = grid.querySelector(`.rating[data-rating='${idx}']`);
    if (text && text.textContent !== `Rating: ${movie.rating}`) {
      text.textContent = `Rating: ${movie.rating}`;
      domOps.virtual += 1;
    }
  });
  updateCounters();
}

function changeRatingDirect(index, delta) {
  movies[index].rating = Math.max(1, Math.min(10, movies[index].rating + delta));
  virtualState[index].rating = movies[index].rating;
  renderDirect();
}

function changeRatingVirtual(index, delta) {
  virtualState[index].rating = Math.max(1, Math.min(10, virtualState[index].rating + delta));
  movies[index].rating = virtualState[index].rating;
  renderVirtual();
}

function attachVirtualControls() {
  const grid = document.getElementById('movieGrid');
  Array.from(grid.children).forEach((card, idx) => {
    const actions = card.querySelector('.actions');
    const plus = document.createElement('button');
    plus.textContent = '+V';
    plus.onclick = () => changeRatingVirtual(idx, 1);
    const minus = document.createElement('button');
    minus.textContent = '-V';
    minus.onclick = () => changeRatingVirtual(idx, -1);
    actions.appendChild(plus);
    actions.appendChild(minus);
  });
}

function initialRender() {
  renderDirect();
  attachVirtualControls();
}

window.onload = initialRender;
