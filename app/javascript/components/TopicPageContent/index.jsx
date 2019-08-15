import React from "react"
import "./style.scss"

export default ({title, intro })=>
  <section className="topic-page-content">
    <a href="lifestyle/index">
      <h3 className="topic-page-content__title">{title}</h3>
      <p className="topic-page-content__intro">{intro}</p>
    </a>
  </section>
