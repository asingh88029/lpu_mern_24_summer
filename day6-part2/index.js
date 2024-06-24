
const URL = "https://makemytrip-backend-w2d2.onrender.com/cities";

const cityContainerDiv = document.querySelector(".city_container");

const result = fetch(URL)

result.then((res)=>{
    return res.json()
}).then((data)=>{
    data.forEach(createCard)
})


const createCard = (cityData, index)=>{

    const {id, city, description, image} = cityData;

    const card = document.createElement("div");

    card.addEventListener("click", ()=>{
        const url = `http://${window.location.host}/pages/adventures/?city=${city.toLowerCase()}`
        window.location.href = url
    })

    card.classList.add("city_card");

    card.innerHTML = `
    <img class="city_img" src="${image}" alt="${city}_city"/>
    <div class="city_info">
        <h3 class="city_name">${city}</h3>
        <p class="city_no_of_places">${description}</p>
    </div>
    `

    cityContainerDiv.appendChild(card)

}

const cityInputTag = document.getElementById("city_input");

// const debouncedCitySearchHandler = debounce(citySearchHandler, 2000)

const throttleCitySearchHandler = throttle(citySearchHandler, 2000)

cityInputTag.addEventListener("keypress", throttleCitySearchHandler)

  
async function citySearchHandler(event){

    console.log("citySearchHandler is called")

    const cityEnteredByTheUser = event.target.value

    const apiResponse = await fetch(URL)

    const cityData = await apiResponse.json()

    const filteredCity = cityData.filter((cityData)=>cityData.city.toLowerCase().includes(cityEnteredByTheUser.toLowerCase()))

    cityContainerDiv.innerHTML = ""

    if(!filteredCity.length){
        cityContainerDiv.innerHTML = `
        <h1>No City Found</h1>
        `
    }

    filteredCity.forEach(createCard)

}

function debounce(func, delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId)
        timeoutId = setTimeout(()=>{
            func(...args)
        }, delay)
    }
}

function throttle(func, delay){
    let lastCall = 0;

    return function(...args){
        const now = new Date().getTime()
        if(now - lastCall >= delay){
            lastCall = now
            func(...args)
        }
    }
}

