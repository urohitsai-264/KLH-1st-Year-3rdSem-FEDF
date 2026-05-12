// Movie Records
let movies = [
    { id: 1, name: "Leo", rating: 4.5 },
    { id: 2, name: "RRR", rating: 4.8 },
    { id: 3, name: "Pushpa", rating: 4.3 },
    { id: 4, name: "Kalki", rating: 4.7 },
    { id: 5, name: "Jailer", rating: 4.4 },
    { id: 6, name: "Salaar", rating: 4.6 },
    { id: 7, name: "KGF", rating: 4.9 },
    { id: 8, name: "Master", rating: 4.2 },
    { id: 9, name: "Vikram", rating: 4.8 },
    { id: 10, name: "Beast", rating: 3.9 }
];

// Render Function
function renderMovies(data) {
    const container = document.getElementById("movieContainer");
    container.innerHTML = "";

    data.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";
        div.id = `movie-${movie.id}`;

        div.innerHTML = `
            <h3>${movie.name}</h3>
            <p>Rating: <span>${movie.rating}</span></p>
        `;

        container.appendChild(div);
    });
}

// Initial Render
renderMovies(movies);

// Direct DOM Update
function directDOMUpdate() {
    let domOperations = 0;

    movies[1].rating = 5.0;
    movies[4].rating = 4.9;

    const container = document.getElementById("movieContainer");
    container.innerHTML = "";
    domOperations++;

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";
        div.id = `movie-${movie.id}`;

        div.innerHTML = `
            <h3>${movie.name}</h3>
            <p>Rating: <span>${movie.rating}</span></p>
        `;

        container.appendChild(div);
        domOperations++;
    });

    document.getElementById("directCount").innerText =
        "Direct DOM Operations: " + domOperations;
}

// Virtual DOM Update
function virtualDOMUpdate() {
    let domOperations = 0;

    const updatedMovies = [...movies];

    updatedMovies[2] = {
        ...updatedMovies[2],
        rating: 4.9
    };

    updatedMovies[7] = {
        ...updatedMovies[7],
        rating: 4.5
    };

    updatedMovies.forEach((movie, index) => {
        if (movie.rating !== movies[index].rating) {
            const movieDiv = document.querySelector(`#movie-${movie.id} span`);
            if (movieDiv) {
                movieDiv.textContent = movie.rating;
                domOperations++;
            }
        }
    });

    movies = updatedMovies;

    document.getElementById("virtualCount").innerText =
        "Virtual DOM Operations: " + domOperations;
}