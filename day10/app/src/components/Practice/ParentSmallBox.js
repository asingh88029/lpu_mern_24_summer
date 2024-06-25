import SmallBox from "./SmallBox"
import "./ParentSmallBox.css"

function ParentSmallBox(){

    const data = []

    for(let i = 0; i< 1000; i++){
        data.push(i+1)
    }

    // const children = []

    // data.forEach((num)=>{
    //     children.push(<SmallBox num={num} />)
    // })

    return (
        <div id="parent-small-box-container"> 
            {
                data.map((num)=>{
                    return <SmallBox num={num} />
                })
            }
        </div>
    )
}

export default ParentSmallBox