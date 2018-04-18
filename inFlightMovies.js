const inFlightMovies = (totalMin, arr) => {
  let moviesSeen = new Set();

  for (let movie of arr) {
    let diff = totalMin - movie;
    if (moviesSeen.has(diff)) {
      return true;
    }

    moviesSeen.add(movie);
  }

  return false; 
}

console.log(inFlightMovies(120, [40, 50, 6, 60, 70, 800]));