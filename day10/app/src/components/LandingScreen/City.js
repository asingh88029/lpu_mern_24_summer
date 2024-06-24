import "./City.css"

function City({imgUrl, imgAlt, cityName, cityDescription}){
    return(
        <div className="city_card">
            <img class="city_img" src={imgUrl} alt={imgAlt}/>
            <div class="city_info">
                <h3 class="city_name">{cityName}</h3>
                <p class="city_no_of_places">{cityDescription}</p>
            </div>
        </div>
    )
}

export default City;