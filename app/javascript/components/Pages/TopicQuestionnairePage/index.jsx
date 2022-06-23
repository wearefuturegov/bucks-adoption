import React, {useState, useRef} from "react"
import Markdown from "markdown-to-jsx"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestions from "../../TopicQuestions"
import TopicResults from "../../TopicResults"
import Button from "../../Button"
import HeroWithColor from "../../HeroWithColor"
import PageBodyContent, { UserContent } from "../../PageBodyContent"
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
  childrentitle,
  childrenintro,
  title,
  intro,
  body,
  questions,
  topicID,
  backgroundcolor,
  logo,
  altLogo, 
  successtext, 
  savebutton,
  finalresulttitle,
  results,
  resultslink
}) => {

  const [topicResults, setTopicResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [resultsStored, setResultsStored] = useStateWithLocalStorage(topicID);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const topRef = useRef(null)

  const handleRestartClick = () => {
    setResultsStored('')
    setTopicResults('')
    setCurrentQuestion(1)
    scrollToRef(topRef)
  }
  const handleSave = () => {
    setResultsStored(topicResults)
  }

  return(
    <Layout logo={logo} altLogo={altLogo}>
      <HeroWithColor
        backgroundColor={backgroundcolor}
        headline={title}
        deck={intro}
        breadcrumbs={[
          {
            href: "/",
            label: "Get ready to adopt"
          },{
            label: title
          }
        ]}
      />

      <PageBodyContent>
        <UserContent>
          <Markdown>{body || ''}</Markdown>
        </UserContent>
      </PageBodyContent>

      <div ref={topRef}>
      { !resultsStored ?
        <section className="topic-questionnaire">
          <div className="container">
          {
            <div className="topic-questionnaire_questions">
              {questions.map(question => {
                const { position, title, answer_1, answer_2, answer_3, action_title } = question;

                return (
                  <TopicQuestions
                    key={position}
                    content={question}
                    id={position}
                    total={questions.length}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    questionsLength={questions.length}
                    topicID={topicID}
                    results={topicResults}
                    setResults={setTopicResults}
                    resultsStored={resultsStored}
                    setResultsStored={setResultsStored}
                    scrollToRef={scrollToRef}
                    type={topicID}
                    />
                );
              })}
              {
                ((questions.length+1) <= currentQuestion) ?
                  <div className="topic-questionnaire_end">
                    <p>{successtext}</p>
                    <div className="centered-button">
                      <Button onClick={handleSave}>{savebutton}</Button>
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
        resultsStored.length ?
          <TopicResults
              topicSection={title}
              handleRestartClick={handleRestartClick}
              resultsArray={resultsStored.split('')}
              questions={questions}
              type={topicID}
              results={results}
              finalresulttitle={finalresulttitle}
              resultslink={resultslink}

              healthtitle={healthtitle}
              healthintro={healthintro}

              timetitle={timetitle}
              timeintro={timeintro}

              familytitle={familytitle}
              familyintro={familyintro}

              skillstitle={skillstitle}
              skillsintro={skillsintro}

              childrentitle={childrentitle}
              childrenintro={childrenintro}

              hometitle={hometitle}
              homeintro={homeintro} />
        :null
      }
    </Layout>
  )
}

export default TopicQuestionnairePage
