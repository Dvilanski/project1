
const cards = document.querySelectorAll(".card")
console.log(cards)

const mainContainer = document.querySelector("#main-container")


mainContainer.appendChild(popupWindow)
cards.forEach(card => {
    card.addEventListener("click", (e) => {

        axios.get("/api/user")
            .then((res) => {
                console.log("res recived from axios api")

            })
    })
});






