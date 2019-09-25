import fetch from "isomorphic-unfetch"

export default (questions, answers, token, recipient) => {
    const toDoList = []

    // 1. run through all the different stored answers for all 5 sections
    answers.map((questionString, i)=>{
        if (questionString.length) {
        // 2. if they exist split the stored string of numbers into an array
            var answerStrings = questionString.split('');
            // 3. run through each answer of each section
            answerStrings.map((result, j)=>{
                // 4. check if each answer is 1, 2, or 3
                if (result == "1") {
                    // 5. if the answer is 1 then get the specific answer
                    if(questions[i][j].action_1_title.length) {
                        toDoList.push(questions[i][j].action_1_title+"\r\n");
                        toDoList.push(questions[i][j].action_1_text+"\r\n" + "---")
                    }
                } else if (result == "2") {
                    if(questions[i][j].action_2_title.length) {
                        toDoList.push(questions[i][j].action_2_title+"\r\n");
                        toDoList.push(questions[i][j].action_2_text+"\r\n" + "---")
                    }
                } else if (result == "3") {
                    if(questions[i][j].action_3_title.length) {
                        toDoList.push(questions[i][j].action_3_title+"\r\n");
                        toDoList.push(questions[i][j].action_3_text+"\r\n" + "---")
                    }
                }
            })
        }
    })

    fetch("/share-plan", {
        method: "post",
        headers: {
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify({toDoList: toDoList, recipient: recipient})
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
