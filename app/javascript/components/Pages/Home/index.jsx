import React from "react"
import Markdown from 'markdown-to-jsx';
import Layout from "../../Layout"
import Hero from "../../Hero"
import TopicPageContent from "../../TopicPageContent"
import "./style.scss"

export default ({
   title,
   strapline,
   body,
   cta_title,
   cta_text,
   cta_button,
   lifestyletitle,
   lifestyleintro,
   timetitle,
   timeintro,
   familytitle,
   familyintro,
   skillstitle,
   skillsintro,
   hometitle,
   homeintro
 })=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle={cta_title}
      ctaDescription={cta_text}
      ctaHref="/pages/bookadoptionevening"
      ctaLinkText={cta_button}
    />

    <div className="topic-sections">
      <div className="container">
        <Markdown>{body}</Markdown>
        { // navigation section for the 5 topics here
        }
        <br/>
        <br/>

        <TopicPageContent title={lifestyletitle} intro={lifestyleintro} link="health/index" />
        <TopicPageContent title={timetitle} intro={timeintro} link="time/index" />
        <TopicPageContent title={familytitle} intro={familyintro} link="family/index" />
        <TopicPageContent title={skillstitle} intro={skillsintro} link="skills/index" />
        <TopicPageContent title={hometitle} intro={homeintro} link="home/index" />
      </div>
    </div>
  </Layout>
