import React from "react"
import Button from "../Button"
import TopicCard from "../TopicCard"
import "./style.scss"

const TopicResultsSummary = ({ topicSection, resultsArray, questions, type, withTitle, link }) => {
    console.log(questions)
    return(
        <section className="summary-results">
            { withTitle ?
                <h2>{topicSection}{resultsArray ? ' to dos:' : ''}</h2>
              :null
            }
            { resultsArray ? (
                resultsArray.map((result, index) => {
                return(
                    <>
                    <div className="summary-results_single" key={index}>
                        {
                            // TODO - this could probably be refactored better
                            result == "1" ? (
                                questions[index].action_1_title &&
                                  <TopicCard title={questions[index].action_1_title} answer={questions[index].answer_1} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_1_explanation} intro={questions[index].action_1_text} type={type} />
                            ) : result == "2" ? (
                                questions[index].action_2_title &&
                                   <TopicCard title={questions[index].action_2_title} answer={questions[index].answer_2} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_2_explanation} intro={questions[index].action_2_text} type={type} />
                            ) : result == "3" ? (
                                questions[index].action_3_title &&
                                  <TopicCard title={questions[index].action_3_title} answer={questions[index].answer_3} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_3_explanation} intro={questions[index].action_3_text} type={type} />
                            ) :null
                        }
                    </div>
                    <>
                        {
                            !questions[index].action_1_title && !questions[index].action_2_title && !questions[index].action_3_title ? (
                                <div className="summary-results_single_no-actions">
                                    <p>Thanks for completing this section, there is nothing specific we recommend you doing for {topicSection} right now.</p>
                                </div>
                            ) :null
                        }
                    </>
                    </>
                )
            })) : (
                <div className="summary-results_incomplete">
                    <p>You have not completed the {topicSection} questions yet, click the button below to complete this section.</p>
                    <Button href={'/'+ link + "/index"}>Start</Button>
                </div>
            )
            }
        </section>
    )}


export default TopicResultsSummary
