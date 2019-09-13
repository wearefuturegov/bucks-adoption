import React, {useState} from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import TopicQuestions from "../../TopicQuestions"
import TopicResultsSummary from "../../TopicResultsSummary"
import TopicCard from "../../TopicCard"
import Button from "../../Button"
import HeroWithColor from "../../HeroWithColor"
import NarrowCallToAction from "../../NarrowCallToAction"
import CallToAction from "../../CallToAction"
import send from "../../../lib/emailer"
import PageBodyContent, { UserContent } from "../../PageBodyContent"
import styled from "styled-components"
import theme from "../../_theme"
// import ShareDialog from "../../ShareDialog"
import ShareBar from "../../ShareBar"

const Headline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 15px;
`

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const Block = styled.div`
  margin-bottom: 45px;
  @media screen and (min-width: ${theme.desktop}){
    margin-bottom: 60px;
  }
`

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);
  return [resultsStored, setResultsStored];
};

const ResultsPage = ({
   token,
   title,
   strapline,
   cta_title,
   cta_text,
   cta_button,
   health_questions,
   health_title,
   family_questions,
   family_title,
   home_questions,
   home_title,
   time_questions,
   time_title,
   skills_questions,
   skills_title
 }) => {

  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage("results_topic_family");
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage("results_topic_home");
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage("results_topic_lifestyle");
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage("results_topic_time");
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage("results_topic_skills");

  // const [shareDialogOpen, toggleShareDialog] = useState(false)

  return(
    <Layout>
      <HeroWithColor
        backgroundColor="white"
        headline={title} deck={strapline} breadcrumbs={[
          {
            href: "/",
            label: "Get ready to adopt"
          },{
            label: "Your readiness plan"
          }
        ]}
      />

      <ShareBar
        health_questions={health_questions}
        time_questions={time_questions}
        family_questions={family_questions}
        skills_questions={skills_questions}
        home_questions={home_questions}
        healthResultsStored={healthResultsStored}
        timeResultsStored={timeResultsStored}
        familyResultsStored={familyResultsStored}
        skillsResultsStored={skillsResultsStored}
        homeResultsStored={homeResultsStored}
        token={token}
      />

      <PageBodyContent
        backgroundColor={theme.background}
        sidebarItems={[
          {
            label: "Support for adoptive parents",
            href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adoption-support/"
          },{
            label: "Adopting a child you know",
            href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child-you-know/"
          },{
            label: "Placing your baby for adoption",
            href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/placing-your-baby-for-adoption/"
          }
        ]}
      >

        <Block>
            <TopicResultsSummary
              withTitle
              topicSection={health_title}
              resultsArray={healthResultsStored ? healthResultsStored.split('') : false}
              questions={health_questions}
              type="results_topic_lifestyle"
              link="health"
            />
        </Block>
        <Block>
            <TopicResultsSummary
              withTitle
              topicSection={time_title}
              resultsArray={timeResultsStored ? timeResultsStored.split('') : false}
              questions={time_questions}
              type="results_topic_time"
              link="time"
            />
        </Block>
        <Block>
            <TopicResultsSummary
              withTitle
              topicSection={family_title}
              resultsArray={familyResultsStored ? familyResultsStored.split('') : false}
              questions={family_questions}
              type="results_topic_family"
              link="family"
            />
        </Block>
        <Block>
            <TopicResultsSummary
              withTitle
              topicSection={skills_title}
              resultsArray={skillsResultsStored ? skillsResultsStored.split('') : false}
              questions={skills_questions}
              type="results_topic_skills"
              link="skills"
            />
        </Block>
        <Block>
            <TopicResultsSummary
              withTitle
              topicSection={home_title}
              resultsArray={homeResultsStored ? homeResultsStored.split('') : false}
              questions={home_questions}
              type="results_topic_home"
              link="home"
            />
        </Block>

        {/* <Block>
          <Headline>Other things to do</Headline>
          <TopicCard title="Come to an adoption evening" intro="<p>We recommend the next step you take is to come to one of our regularly run information evenings. At the event, you will be able to ask our team questions and will hear from our team and previous adopters.</p>">
            <Button href="/pages/bookadoptionevening">Attend an evening</Button>
          </TopicCard>
        </Block> */}
      </PageBodyContent>

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


export default ResultsPage
