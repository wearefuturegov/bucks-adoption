import React, {useState} from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestion from "../../TopicQuestion"
import Button from "../../Button"
import "./style.scss"


const TopicQuestionnairePage = ({title, intro, body, questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startQuestions, setStartQuestions] = useState(false)
  const handleClick = () => {
    setStartQuestions(true)
    setCurrentQuestion(1)
  }

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
      <section className="topic-questionnaire">
        <div className="container">
          {
            !startQuestions &&
            <div className="topic-questionnaire_start">
              <p>This is a set of 5 questions ... etc</p>
              <Button onClick={handleClick}>Start questions</Button>
            </div>
          }
          {
            startQuestions &&
            <div className="topic-questionnaire_questions">
              {questions.map(question => {
                const { id, title, answer_1, answer_2, answer_3, action_title } = question;
                return (
                  <div key={id}>
                    <TopicQuestion key={id} content={question} id={id} total={questions.length} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questionsLength={questions.length} />
                  </div>
                );
              })}
            </div>
          }
          {
            ((questions.length+1) <= currentQuestion) ?
            <div className="final-results">
              <h2>Your readiness list for {title}</h2>
              <p>Some context for what this is...</p>
              <p>include any basic checklist for healt and wellbeing?</p>
              {console.log("trying to get the chosen questions - " + "")}
            </div>
            :null
          }
        </div>
      </section>
    </Layout>
  )
}


export default TopicQuestionnairePage
