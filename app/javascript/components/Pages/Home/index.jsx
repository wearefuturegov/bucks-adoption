import React, { useEffect, useState } from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import heroimage from "./hero.jpg"
import HeroWithImage from "../../HeroWithImage"
import NarrowCallToAction from "../../NarrowCallToAction"
import CallToAction from "../../CallToAction"
import PageBodyContent, { UserContent } from "../../PageBodyContent"
import CardGrid from "../../CardGrid"
import theme from "../../_theme"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = useState(
    localStorage.getItem(localStorageKey) || ''
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);
  return [resultsStored, setResultsStored];
};

const Home = ({
  title,
  strapline,
  body,
  cta_title,
  cta_text,
  cta_button,
  healthContent,
  timeContent,
  familyContent,
  skillsContent,
  homeContent,
  healthTitle,
  timeTitle,
  familyTitle,
  skillsTitle,
  homeTitle
}) => {

  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage("results_topic_family")
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage("results_topic_home")
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage("results_topic_lifestyle")
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage("results_topic_time")
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage("results_topic_skills")

  console.log(familyResultsStored)

  return(
    <Layout>
      <HeroWithImage 
        headline={title} 
        deck={strapline} 
        image={heroimage} 
        breadcrumbs={[
          { 
            label: "Buckinghamshire Adoption", 
            href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child/" 
          },{ 
            label: "Get ready to adopt" 
          }
        ]}
      />
      <CardGrid
        cards={[
          {
            headline: healthTitle,
            deck: healthContent.kicker || healthContent.introduction,
            href: "/health/index",
            borderColor: theme.active,
            completed: healthResultsStored
          },
          {
            headline: timeTitle,
            deck: timeContent.kicker || timeContent.introduction,
            href: "/time/index",
            borderColor: theme.social,
            completed: timeResultsStored
          },
          {
            headline: familyTitle,
            deck: familyContent.kicker || familyContent.introduction,
            href: "/family/index",
            borderColor: theme.support,
            completed: familyResultsStored
          },
          {
            headline: skillsTitle,
            deck: skillsContent.kicker || skillsContent.introduction,
            href: "/skills/index",
            borderColor: theme.learning,
            completed: skillsResultsStored
          },
          {
            headline: homeTitle,
            deck: homeContent.kicker || homeContent.introduction,
            href: "/home/index",
            borderColor: theme.cultural,
            completed: homeResultsStored
          },
        ]}
      />
      <NarrowCallToAction 
        href="/pages/bookadoptionevening" 
        headline={cta_title} 
        message={cta_text} 
        label={cta_button} 
      />
      <CallToAction headline="Get in touch">
        <p>If you have any questions about adoption, you can email us at <a href="mail-to:adoption@buckscc.gov.uk">adoption@buckscc.gov.uk</a></p>
        <p>or call { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : <strong>01494 586 349</strong>}</p>
      </CallToAction>
    </Layout>
  )
}

export default Home