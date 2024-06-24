import './Hero.css'

function Hero(){
    return(
        <div id="hero_container">
            <img src="https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero_img"/>
            <div>
                <div>
                    <h2>Welcome to TripKaro</h2>
                    <h4>Explore the world with fantastic places to venture around</h4>
                    <input id="city_input" placeholder="Search for cities" type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;