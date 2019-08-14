import React from "react"

export default ({title, intro })=>
  <section className="tool-page-content">
    <a href="lifestyle/index">
      <h3 className="tool-page-content__title">{title}</h3>
      <div className="tool-page-content__intro">{intro}</div>
    </a>
  </section>
