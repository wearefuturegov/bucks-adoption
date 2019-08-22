import React from "react"
import "./style.scss"
import TopicCard from "../TopicCard"
import Button from '../Button'

const TopicPageContent = ({title, intro, link }) => {
  return(
    <section className="topic-page-content">
      <TopicCard key="1" intro={intro} title={title} type={link}>
        <div className="button-right">
          <Button href={link + "/index"}>Start</Button>
        </div>
      </TopicCard>
    </section>
  )
}

export default TopicPageContent
