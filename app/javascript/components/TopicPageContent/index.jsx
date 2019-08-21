import React from "react"
import "./style.scss"
import Card from "../Card"
import Button from '../Button'

export default ({title, intro })=>
  <section className="topic-page-content">
    <Card key="1" intro={intro} title={title}>
      <div className="button-right">
        <Button href="health/index">Start</Button>
      </div>
    </Card>
  </section>
