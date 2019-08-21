import React, {useState, useRef} from "react"
import Markdown from 'markdown-to-jsx';
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestions from "../../TopicQuestions"
import TopicResultsSummary from "../../TopicResultsSummary"
import Button from "../../Button"
import "./style.scss"


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

  return(
    <Layout withHeader withFooter>
      <section className="topic-content">
        <div className="container">
          <PageHeader title="Your Adoption Ready Plan" lede="Here's all the practical things you can do to get ready." breadcrumbs={[
                  {
                      title: "Bucks Adoption",
                      href: "/"
                  },
                  {
                      title: "Your Adoption Ready Plan"
                  }]} />
          <div className="topic-content__body">
            results content
          </div>
        </div>
      </section>
      <section className="health-results">
        {
          healthResultsStored.length ?
            <TopicResultsSummary topicSection={health_title} resultsArray={healthResultsStored.split('')} questions={health_questions} type="results_topic_lifestyle" />
          :null
        }
      </section>
      <section className="time-results">
        {
          timeResultsStored.length ?
            <TopicResultsSummary topicSection={time_title} resultsArray={timeResultsStored.split('')} questions={time_questions} type="results_topic_time" />
          :null
        }
      </section>
      <section className="family-results">
        {
          familyResultsStored.length ?
            <TopicResultsSummary topicSection={family_title} resultsArray={familyResultsStored.split('')} questions={family_questions} type="results_topic_family" />
          :null
        }
      </section>
      <section className="skills-results">
        {
          skillsResultsStored.length ?
            <TopicResultsSummary topicSection={skills_title} resultsArray={skillsResultsStored.split('')} questions={skills_questions} type="results_topic_skills" />
          :null
        }
      </section>
      <section className="home-results">
        {
          homeResultsStored.length ?
            <TopicResultsSummary topicSection={home_title} resultsArray={homeResultsStored.split('')} questions={home_questions} type="results_topic_home" />
          :null
        }
      </section>
    </Layout>
  )
}


export default ResultsPage
