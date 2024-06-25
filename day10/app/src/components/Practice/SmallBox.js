import "./SmallBox.css"

function SmallBox(props){
    const {num} = props
    return(
     <>
        {
            !isPrime(num) && 
            (
                <div className={num%2==0 ? "even" : "odd"} id="small-box-container">
                    <h1>{num}</h1>
                </div>    
            )
        }
     </>
    )
}

function isPrime(num) {
    // Check if number is less than 2
    if (num <= 1) {
        return false;
    }

    // Check for factors other than 1 and itself
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // If no factors found, it's a prime number
    return true;
}

export default SmallBox
