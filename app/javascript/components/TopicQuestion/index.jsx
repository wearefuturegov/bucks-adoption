import React from "react"

export default ({title, answer_1, action_title})=>
  <section className="topic__question">
    <h3 className="topic__question_title">{title}</h3>
    <div className="topic__question_body">
      {answer_1}
    </div>
    <div className="topic__question_action">
      {action_title}
    </div>
  </section>
