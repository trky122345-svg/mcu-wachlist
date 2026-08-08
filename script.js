const movies = document.querySelectorAll("li");

movies.forEach(movie => {

    const movieName = movie.textContent;

    const check = document.createElement("span");
    check.textContent = "✓";

    movie.appendChild(check);

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

    });

});