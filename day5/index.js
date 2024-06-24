const card1 = document.createElement("div");

card1.style.width = "200px"
card1.style.height = "250px"
card1.style.backgroundColor = "red"

card1.setAttribute("id", "card1")

card1.classList.add("card")

card1.classList.remove("card")

const card2 = document.createElement("div");

card2.style.width = "200px"
card2.style.height = "250px"
card2.style.backgroundColor = "blue"

card2.setAttribute("id", "card2")

card2.classList.add("card")


const container = document.querySelector(".container")

container.style.display = "flex"

container.appendChild(card1)

container.appendChild(card2)


card1.addEventListener("mouseenter", ()=>{
    card1.style.backgroundColor = "green"
})

card1.addEventListener("mouseleave", ()=>{
    card1.style.backgroundColor = "red"
})

card2.addEventListener('click', ()=>{
    card2.style.backgroundColor = "yellow"
})