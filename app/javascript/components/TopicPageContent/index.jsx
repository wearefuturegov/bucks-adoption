import React from "react"
import "./style.scss"
import TopicHomeCard from "../TopicHomeCard"
import Button from '../Button'

export default ({title, intro, link })=>
  <section className="topic-page-content">
    <TopicHomeCard key="1" intro={intro} title={title} type={link}>
      <div className="button-right">
        <Button href={link + "/index"}>Start</Button>
      </div>
    </TopicHomeCard>
  </section>
