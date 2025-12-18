console.log("Netflix Clone Loaded");
const movies = [
  {
    title: "Movie 1",
    image: "https://via.placeholder.com/180x260"
  },
  {
    title: "Movie 2",
    image: "https://via.placeholder.com/180x260"
  },
  {
    title: "Movie 3",
    image: "https://via.placeholder.com/180x260"
  },
  {
    title: "Movie 4",
    image: "https://via.placeholder.com/180x260"
  }
];

function renderMovies(rowId) {
  const row = document.getElementById(rowId);

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
    `;

    row.appendChild(div);
  });
}

renderMovies("trending");
renderMovies("popular");
renderMovies("originals");
