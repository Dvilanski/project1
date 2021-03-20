
const cards = document.querySelectorAll(".card")
console.log(cards)

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        console.log(card.id)
        axios.get("/api/user")
            .then((res) => {
                console.log("res recived from axios api")

            })
    })
});






