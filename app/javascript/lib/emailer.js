import fetch from "isomorphic-unfetch"

export default (questions, answers, token, recipient) => {

    const toDoList = []

    // 1. Organise and prepare data
    // questions.map((questionString)=>{
    //     if (questionString.length) {
    //         var questions = questionString.split('');
    //         questions.map((result, index)=>{
    //             if (result == "1") {
    //                 toDoList.push(answers[index].action_1_title)
    //             } else if (result == "2") {
    //                 toDoList.push(answers[index].action_2_title)
    //             } else if (result == "3") {
    //                 toDoList.push(answers[index].action_3_title)
    //             }
    //         })
    //     }
    // })

    // 2. Post data to server
    fetch("/share-plan", {
        method: "post",
        headers: {
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(toDoList)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
