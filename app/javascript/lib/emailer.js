import fetch from "isomorphic-unfetch"

export default (questions, answers, recipient, token) => {

    toDoList = []

    // 1. Organise and prepare data
    questions.map(()=>{
        // TODO
    })

    // 2. Post data to server
    fetch("/share-plan", {
        method: "post",
        body: JSON.stringify({
            recipient: recipient,
            content: toDoList
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))

}