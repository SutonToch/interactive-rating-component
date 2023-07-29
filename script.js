let chosenRating = 0;

function chooseRating(el) {
    if(chosenRating != 0) {
        document.querySelector(".rating-score-selected").classList.remove("rating-score-selected");
    }
    el.classList.toggle("rating-score-selected");
    chosenRating = el.textContent;
}

function submit() {
    document.querySelector(".rating-state").classList.add("hide");
    document.querySelector(".thank-you-state").classList.remove("hide");
    document.querySelector("#selected-rating-score").textContent = chosenRating;
}