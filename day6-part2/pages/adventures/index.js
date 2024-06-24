// Extract the city from the url

const currentUrl = window.location.href;

const url = new URL(currentUrl)

const query = new URLSearchParams(url.search)

const city = query.get("city")


// call api using city name

const apiEndpoint = `https://makemytrip-backend-w2d2.onrender.com/adventures?city=${city}`

console.log(apiEndpoint)

fetch(apiEndpoint).then((response)=>response.json()).then((adventuresData)=>{
    adventuresData.forEach((data)=>createCard(data))
})

const container = document.getElementById("container")

function createCard(data){
    const {id, name, costPerHead, currency, image} = data;
    const card = document.createElement("div")
    card.innerHTML = `
    <img src="${image}"/>
    <p>${id + name + costPerHead + currency}</p>
    `
    container.appendChild(card)
}