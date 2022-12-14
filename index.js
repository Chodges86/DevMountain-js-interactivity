console.log("hello world")

const message = document.querySelector("#message")

document.querySelector("form").addEventListener("submit", addMovie)

function addMovie(e) {
    e.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
}

function deleteMovie(e) {
    e.target.parentNode.remove()
    message.textContent = "Movie Deleted"
    revealMessage()
}

function crossOffMovie(e) {
    const classList = e.target.classList
    classList.toggle("checked")

    if (classList.contains("checked")) {
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie added back!"
    }
    revealMessage()
}

function revealMessage() {
    setTimeout(() => message.classList.add("hide"), 1000)
}