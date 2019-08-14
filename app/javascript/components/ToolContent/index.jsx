import React from "react"

export default ({title, body, action})=>
  <section className="tool_content__question">
    <h3 className="tool_content__question_title">{title}</h3>
    <div className="tool_content__question_body">
      {
        body.split("\n").map((i,key) => {
          return (<p key={key}>{i}</p>);
        })
      }
    </div>
    <div className="tool_content__question_action">
      {action}
    </div>
  </section>
