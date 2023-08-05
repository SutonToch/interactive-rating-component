const ratingScores = document.querySelectorAll("div.rating-score")
const submitBtn = document.querySelector(".btn");
let chosenRating = 0;



ratingScores.forEach(score => {
    score.addEventListener("click", function() {
        chooseRating(score)
    })
})

submitBtn.addEventListener("click", function() {
    submit()
})



function chooseRating(el) {
    if(chosenRating != 0) {
        document.querySelector(".rating-score-selected").classList.remove("rating-score-selected");
    }
    el.classList.add("rating-score-selected");
    chosenRating = el.textContent;
}

function submit() {
    document.querySelector(".rating-state").classList.add("hide");
    document.querySelector(".thank-you-state").classList.remove("hide");
    document.querySelector("#selected-rating-score").textContent = chosenRating;
}