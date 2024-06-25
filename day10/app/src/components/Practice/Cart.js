import React, {useState} from 'react'
import "./Cart.css"

const Cart = (props) => {
    const {name, price} = props

    // let qty = 1
    const [qty, setQty] = useState(1)

    const add = ()=>{
        console.log("ADD")
        setQty(qty+1)
        console.log(qty)
    }

    const remove = ()=>{
        console.log("REMOVE")
        setQty(qty-1)
        console.log(qty)
    }

    return (
        <div id='cart-container'>
            <div>
                <p>{name}</p>
                <p>{price}Rs</p>
            </div>
            <div>
                <p>QTY : </p>
                <button onClick={add}>+</button>
                <p>{qty}</p>
                <button onClick={remove}>-</button>
            </div>
        </div>
    )
}

export default Cart