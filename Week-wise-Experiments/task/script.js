const movies = [
  { id: 1, title: "Avengers: Dawn", rating: 8.5 },
  { id: 2, title: "Neon Nights", rating: 7.9 },
  { id: 3, title: "Solar Drift", rating: 8.2 },
  { id: 4, title: "City of Shadows", rating: 8.7 },
  { id: 5, title: "Echoes of Time", rating: 7.6 },
  { id: 6, title: "Storm Breaker", rating: 8.1 },
  { id: 7, title: "Hidden Horizon", rating: 8.3 },
  { id: 8, title: "Midnight Run", rating: 7.8 },
  { id: 9, title: "Galactic Rail", rating: 8.4 },
  { id: 10, title: "Lunar Frontier", rating: 8.0 }
];

let currentMovies = movies.map(movie => ({ ...movie }));

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id = movie.id;
  card.innerHTML = `
    <div class="movie-title">${movie.title}</div>
    <div class="movie-rating">Rating: <span class="rating">${movie.rating}</span></div>
  `;
  return card;
}

function renderAll(moviesToRender) {
  const list = document.getElementById("movieList");
  list.innerHTML = "";

  moviesToRender.forEach(movie => {
    list.appendChild(createMovieCard(movie));
  });
}

function getRandomRating() {
  return (Math.random() * 3 + 7).toFixed(1);
}

function updateDirectDOM() {
  let operations = 0;
  const list = document.getElementById("movieList");

  currentMovies = currentMovies.map(movie => ({
    ...movie,
    rating: getRandomRating()
  }));

  list.innerHTML = "";
  operations++;

  currentMovies.forEach(movie => {
    const card = createMovieCard(movie);
    operations++;
    list.appendChild(card);
    operations++;
  });

  document.getElementById("directCount").textContent = operations;
}

let oldVDOM = currentMovies.map(movie => ({ id: movie.id, rating: movie.rating }));

function updateVirtualDOM() {
  let operations = 0;

  const nextVDOM = currentMovies.map(movie => ({
    ...movie,
    rating: getRandomRating()
  }));

  nextVDOM.forEach((nextMovie, index) => {
    const oldMovie = oldVDOM[index];

    if (!oldMovie || oldMovie.rating !== nextMovie.rating) {
      const ratingSpan = document.querySelector(`.movie-card[data-id=\"${nextMovie.id}\"] .rating`);
      if (ratingSpan) {
        ratingSpan.textContent = nextMovie.rating;
        operations++;
      }
    }
  });

  currentMovies = nextVDOM;
  oldVDOM = currentMovies.map(movie => ({ id: movie.id, rating: movie.rating }));
  document.getElementById("virtualCount").textContent = operations;
}

window.onload = () => renderAll(currentMovies);
