import React, {useState, useRef} from "react"
import Markdown from 'markdown-to-jsx';
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestions from "../../TopicQuestions"
import TopicResults from "../../TopicResults"
import Button from "../../Button"
import HeroWithColor from "../../HeroWithColor"
import PageBodyContent from "../../PageBodyContent"
import CallToAction from "../../CallToAction"
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


const TopicQuestionnairePage = ({
  healthtitle,
  healthintro,
  familytitle,
  familyintro,
  hometitle,
  homeintro,
  timetitle,
  timeintro,
  skillstitle,
  skillsintro,
  title,
  intro,
  body,
  questions,
  topicID,
  backgroundcolor}) => {

  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [resultsStored, setResultsStored] = useStateWithLocalStorage(topicID);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const topRef = useRef(null)

  const handleRestartClick = () => {
    setResultsStored('')
    setResults('')
    setCurrentQuestion(1)
    scrollToRef(topRef)
  }
  const handleSaveClick = () => {
    setResultsStored(results)
    scrollToRef(topRef)
  }

  return(
    <Layout withHeader withFooter>
      <HeroWithColor backgroundColor={backgroundcolor} headline={title} deck={intro} breadcrumbs={[
                                                                    { href: "/", label: "Adoption" },
                                                                    { label: title }
                                                                    ]}/>
      <PageBodyContent>
        <Markdown>{body}</Markdown>
      </PageBodyContent>

      <div ref={topRef}>
      { !resultsStored ?
        <section className="topic-questionnaire">
          <div className="container">
            {
              <div className="topic-questionnaire_questions">
                {questions.map(question => {
                  const { id, title, answer_1, answer_2, answer_3, action_title } = question;
                  return (
                    <TopicQuestions
                      key={id}
                      content={question}
                      id={id}
                      total={questions.length}
                      currentQuestion={currentQuestion}
                      setCurrentQuestion={setCurrentQuestion}
                      questionsLength={questions.length}
                      topicID={topicID}
                      results={results}
                      setResults={setResults}
                      resultsStored={resultsStored}
                      setResultsStored={setResultsStored}
                      scrollToRef={scrollToRef}
                      type={topicID} />
                  );
                })}
                {
                  ((questions.length+1) <= currentQuestion) ?
                    <div className="topic-questionnaire_end">
                      <p>Great, you have completed the {title} section. Click save to store these answers, they will be saved for when you come back, as long as you come back on the same browser.</p>
                      <div className="centered-button">
                        <Button onClick={handleSaveClick}>Save</Button>
                      </div>
                    </div>
                  :null
                }
              </div>
            }
          </div>
        </section>
        :null
        }
      </div>




      {
        // ((questions.length+1) <= currentQuestion)
        resultsStored.length ?
          <TopicResults
              topicSection={title}
              handleRestartClick={handleRestartClick}
              resultsArray={resultsStored.split('')}
              questions={questions}
              type={topicID}

              healthtitle={healthtitle}
              healthintro={healthintro}

              timetitle={timetitle}
              timeintro={timeintro}

              familytitle={familytitle}
              familyintro={familyintro}

              skillstitle={skillstitle}
              skillsintro={skillsintro}

              hometitle={hometitle}
              homeintro={homeintro} />
        :null
      }
    </Layout>
  )
}


export default TopicQuestionnairePage
