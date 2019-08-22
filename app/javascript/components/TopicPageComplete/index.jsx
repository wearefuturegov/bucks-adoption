import React from "react"
import "./style.scss"
import TopicCard from "../TopicCard"
import Button from '../Button'

const TopicPageComplete = ({title, intro, link, resultsStored }) => {
  return(
    <section className="topic-page-content topic-questions-compete">
      <TopicCard key="1" intro={intro + "<br/><br/> **You have completed the " + title + " section.**"} title={title} type={link}>
         <a className="float-right-text" href={link + "/index"}>See your results</a>
         <div className="checkmark_container"><div className="checkmark"></div></div>
      </TopicCard>
    </section>
  )
}

export default TopicPageComplete
