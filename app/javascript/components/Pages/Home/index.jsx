import React, { useEffect, useState, createRef } from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import HeroWithImage from "../../HeroWithImage"
import NarrowCallToAction from "../../NarrowCallToAction"
import CallToAction from "../../CallToAction"
import PageBodyContent, { UserContent } from "../../PageBodyContent"
import CardGrid from "../../CardGrid"
import theme from "../../_theme"
import hero from "./hero"

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
  childrenContent,
  homeContent,
  healthTitle,
  timeTitle,
  familyTitle,
  skillsTitle,
  childrenTitle,
  homeTitle,
  banner,
  hero_image,
  hero_alt,
  logo,
  altLogo,
  healthStartTopic,
  healthCompletedTopic,
  timeStartTopic,
  timeCompletedTopic,
  familyStartTopic,
  familyCompletedTopic,
  skillsStartTopic,
  skillsCompletedTopic,
  homeStartTopic,
  homeCompletedTopic,
  childrenStartTopic,
  childrenCompletedTopic
}) => {
  const ref = createRef();
  const handleRefClick = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage("results_topic_family")
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage("results_topic_home")
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage("results_topic_lifestyle")
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage("results_topic_time")
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage("results_topic_skills")
  const [childrenResultsStored, setChildrenResultsStored] = useStateWithLocalStorage("results_topic_children")

  return(
    <Layout logo={logo} altLogo={altLogo} 
    banner={banner}
    >
      <HeroWithImage
        headline={title}
        deck={strapline}
        image={hero}
        cta="Get started"
        handleRefClick={handleRefClick}
        alt={hero_alt}
      />
      <div id="home-body-content" ref={ref}>
        <div className="bold-body"><Markdown>{body || ''}</Markdown></div>
      </div>

      <h2 className="visually-hidden">Choose a topic</h2>
      <CardGrid
        cards={[
          {
            headline: homeTitle,
            deck: homeContent.kicker || homeContent.introduction,
            href: "/home/index",
            borderColor: theme.cultural,
            completed: homeResultsStored,
            startTopic: homeStartTopic,
            completedTopic: homeCompletedTopic
          },
          {
            headline: familyTitle,
            deck: familyContent.kicker || familyContent.introduction,
            href: "/family/index",
            borderColor: theme.support,
            completed: familyResultsStored,
            startTopic: familyStartTopic,
            completedTopic: familyCompletedTopic
          },
          {
            headline: skillsTitle,
            deck: skillsContent.kicker || skillsContent.introduction,
            href: "/skills/index",
            borderColor: theme.learning,
            completed: skillsResultsStored,
            startTopic: skillsStartTopic,
            completedTopic: skillsCompletedTopic
          },
          {
            headline: healthTitle,
            deck: healthContent.kicker || healthContent.introduction,
            href: "/health/index",
            borderColor: theme.active,
            completed: healthResultsStored,
            startTopic: healthStartTopic,
            completedTopic: healthCompletedTopic
          },
          {
            headline: timeTitle,
            deck: timeContent.kicker || timeContent.introduction,
            href: "/time/index",
            borderColor: theme.social,
            completed: timeResultsStored,
            startTopic: timeStartTopic,
            completedTopic: timeCompletedTopic
          },
          {
            headline: childrenTitle,
            deck: childrenContent.kicker || childrenContent.introduction,
            href: "/children/index",
            borderColor: theme.children,
            completed: childrenResultsStored,
            startTopic: childrenStartTopic,
            completedTopic: childrenCompletedTopic
          }

        ]}
      />
      <NarrowCallToAction
        href="/pages/informationevent"
        headline={cta_title}
        message={cta_text}
        label={cta_button}
      />
      <CallToAction headline="Get in touch">
        <p>If you have any questions about adoption, you can email us at <a href="mailto:adoption@buckinghamshire.gov.uk" target="_blank">adoption@buckinghamshire.gov.uk</a></p>
        <p>or call { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : <strong>01494 586 349</strong>}</p>
      </CallToAction>
    </Layout>
  )
}

export default Home
