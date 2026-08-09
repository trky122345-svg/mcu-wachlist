const movies = document.querySelectorAll("li");

const progressText = document.getElementById("progress-text");
const progress = document.getElementById("progress");

function updateProgress() {

    const totalMovies = movies.length;
    const watchedMovies = document.querySelectorAll("li.watched").length;

    const percentage = totalMovies === 0
        ? 0
        : (watchedMovies / totalMovies) * 100;

    progressText.textContent = `${watchedMovies} / ${totalMovies} Watched`;
    progress.style.width = `${percentage}%`;
}

movies.forEach(movie => {

    const movieName = movie.textContent.trim();

    

    if (localStorage.getItem(movieName) === "watched") {
        movie.classList.add("watched");
    }

    movie.addEventListener("click", () => {

        movie.classList.toggle("watched");

        if (movie.classList.contains("watched")) {
            localStorage.setItem(movieName, "watched");
        } else {
            localStorage.removeItem(movieName);
        }

        updateProgress();
        updatePhaseColors();
    });
});

updateProgress();

function updatePhaseColors() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const title = section.querySelector(".phase-title");
        const movies = section.querySelectorAll("li");

        if (!title || movies.length === 0) return;

        const allWatched = [...movies].every(movie =>
            movie.classList.contains("watched")
        );

        title.classList.toggle("completed", allWatched);
    });
}
