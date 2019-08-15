import React from "react"

export default ({title, body, action})=>
  <section className="topic__question">
    <h3 className="topic__question_title">{title}</h3>
    <div className="topic__question_body">
      {
        body.split("\n").map((i,key) => {
          return (<p key={key}>{i}</p>);
        })
      }
    </div>
    <div className="topic__question_action">
      {action}
    </div>
  </section>
