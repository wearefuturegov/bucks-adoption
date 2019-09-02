import fetch from "isomorphic-unfetch"

export default (questions, answers, token, recipient) => {

    const toDoList = []

    // 1. Organise and prepare data
    // questions.map(()=>{
    //     // TODO
    // })

    // 2. Post data to server
    fetch("/share-plan", {
        method: "post",
        headers: {
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify({questions, answers})
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}