const button = document.querySelector("#form > div > button");

const ADD_TASK = ()=>{

    // first get the value of input tag
    const inputTag = document.querySelector("#form > div > input")

    const task = inputTag.value

    // second get the value of select tag
    const selectTag = document.querySelector("#form > div > select")

    const priority = selectTag.value

    // to create a card
    const div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML = `
    <h3>Task : ${task}</h3>
    <h4>Priority : ${priority}</h4>
    `
    //  to append this card in div#tasks

    const tasksDiv = document.querySelector("#tasks")

    tasksDiv.appendChild(div)

    inputTag.value = ""


}

button.addEventListener('click', ADD_TASK)