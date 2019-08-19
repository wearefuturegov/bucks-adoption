import React, {useState} from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestion from "../../TopicQuestion"
import TopicResults from "../../TopicResults"
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


const TopicQuestionnairePage = ({title, intro, body, questions, topicID}) => {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startQuestions, setStartQuestions] = useState(false)
  const handleStartClick = () => {
    setStartQuestions(true)
    setCurrentQuestion(1)
  }
  const handleRestartClick = () => {
    setResultsStored('')
    setResults('')
    setStartQuestions(true)
    setCurrentQuestion(1)
  }
  const handleSaveClick = () => {
    setResultsStored(results)
  }

  const [resultsStored, setResultsStored] = useStateWithLocalStorage(topicID);

  return(
    <Layout withHeader withFooter>
      <section className="topic-content">
        <div className="container">
          <PageHeader title={title} lede={intro} breadcrumbs={[
                  {
                      title: "Bucks Adoption",
                      href: "/"
                  },
                  {
                      title: title
                  }]} />
          <div className="topic-content__body">
            {
              body.split("\n").map((i,key) => {
                return (<p key={key}>{i}</p>);
              })
            }
          </div>
        </div>
      </section>



      { !resultsStored ?
        <section className="topic-questionnaire">
          <div className="container">
            {
              !startQuestions &&
              <div className="topic-questionnaire_start">
                <p>This is a set of 5 questions ... etc</p>
                <Button onClick={handleStartClick}>Start questions</Button>
              </div>
            }
            {
              startQuestions &&
              <div className="topic-questionnaire_questions">
                {questions.map(question => {
                  const { id, title, answer_1, answer_2, answer_3, action_title } = question;
                  return (
                    <TopicQuestion key={id} content={question} id={id} total={questions.length} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questionsLength={questions.length} topicID={topicID} results={results} setResults={setResults} resultsStored={resultsStored} setResultsStored={setResultsStored} />
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




      {
        // ((questions.length+1) <= currentQuestion)
        resultsStored.length ?
          <TopicResults topicSection={title} handleRestartClick={handleRestartClick} resultsStored={resultsStored} />
        :null
      }
    </Layout>
  )
}


export default TopicQuestionnairePage
