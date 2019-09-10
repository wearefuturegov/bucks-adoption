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
import theme from "../../_theme"
// import ShareDialog from "../../ShareDialog"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

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

  const [shareDialogOpen, toggleShareDialog] = useState(false)

  const sendEmail = () =>{
    send(
      {
        health_questions,
        family_questions,
        home_questions,
        time_questions,
        skills_questions
      }, {
        familyResultsStored,
        homeResultsStored,
        healthResultsStored,
        timeResultsStored,
        skillsResultsStored
      },
      token,
      // TODO: Replace with user input
      "hello@example.com"
    )
  }

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
        <UserContent>
          <div className="health-results-summary">
            {
              healthResultsStored.length ? (
                <TopicResultsSummary withTitle topicSection={health_title} resultsArray={healthResultsStored.split('')} questions={health_questions} type="results_topic_lifestyle" />
              ) : (
                <TopicResultsSummary withTitle topicSection={health_title} questions={health_questions} type="results_topic_lifestyle" link="health" />
              )
            }
          </div>
          <div className="time-results-summary">
            {
              timeResultsStored.length ? (
                <TopicResultsSummary withTitle topicSection={time_title} resultsArray={timeResultsStored.split('')} questions={time_questions} type="results_topic_time" />
              ) : (
                <TopicResultsSummary withTitle topicSection={time_title} questions={time_questions} type="results_topic_time" link="time" />
              )
            }
          </div>
          <div className="family-results-summary">
            {
              familyResultsStored.length ? (
                <TopicResultsSummary withTitle topicSection={family_title} resultsArray={familyResultsStored.split('')} questions={family_questions} type="results_topic_family" />
              ) : (
                <TopicResultsSummary withTitle topicSection={family_title} questions={family_questions} type="results_topic_family" link="family" />
              )
            }
          </div>
          <div className="skills-results-summary">
            {
              skillsResultsStored.length ? (
                <TopicResultsSummary withTitle topicSection={skills_title} resultsArray={skillsResultsStored.split('')} questions={skills_questions} type="results_topic_skills" />
              ) : (
                <TopicResultsSummary withTitle topicSection={skills_title} questions={skills_questions} type="results_topic_skills" link="skills" />
              )
            }
          </div>
          <div className="home-results-summary">
            {
              homeResultsStored.length ? (
                <TopicResultsSummary withTitle topicSection={home_title} resultsArray={homeResultsStored.split('')} questions={home_questions} type="results_topic_home" />
              ) : (
                <TopicResultsSummary withTitle topicSection={home_title} questions={home_questions} type="results_topic_home" link="home" />
              )
            }
          </div>
          <div className="other-results">
            <h2>Other things to do</h2>
            <TopicCard title="Come to an adoption evening" intro="We recommend the next step you take is to come to one of our regularly run information evenings. At the event, you will be able to ask our team questions and will hear from our team and previous adopters.">
              <a href="/pages/bookadoptionevening">Attend an evening</a>
            </TopicCard>
          </div>
        </UserContent>
      </PageBodyContent>

 
      {/* { healthResultsStored.length && timeResultsStored.length && familyResultsStored.length && skillsResultsStored.length && homeResultsStored.length ? (
        <>
        <div className="share-button--container container">
          <button className="share-button--for-list" onClick={()=>{
              toggleShareDialog(true)
          }}>Share your adoption ready plan</button>
        </div>
        { // <ShareDialog dialogIsOpen={shareDialogOpen} toggleDialog={toggleShareDialog}/>
        }
        </>
      ):null
      } */}


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
