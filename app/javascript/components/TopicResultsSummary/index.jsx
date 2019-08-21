import React from "react"
import Button from "../Button"
import TopicCard from "../TopicCard"
import "./style.scss"

const TopicResultsSummary = ({ topicSection, resultsArray, questions, type, withTitle }) => {

    return(
        <section className="summary-results">
            <div className="container">
                { withTitle ?
                    <h2>{topicSection} actions:</h2>
                  :null
                }
                {
                    resultsArray.map((result, index) => {
                    return(
                        <div className="final-results_single" key={index}>
                            {
                                // TODO - this could probably be refactored better
                                result == "1" ? (
                                    <>
                                    { questions[index].action_1_title ?
                                        <TopicCard title={questions[index].action_1_title} answer={questions[index].answer_1} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_1_explanation} intro={questions[index].action_1_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : result == "2" ? (
                                    <>
                                    { questions[index].action_2_title ?
                                        <TopicCard title={questions[index].action_2_title} answer={questions[index].answer_2} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_2_explanation} intro={questions[index].action_2_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : result == "3" ? (
                                    <>
                                    { questions[index].action_3_title ?
                                        <TopicCard title={questions[index].action_3_title} answer={questions[index].answer_3} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_3_explanation} intro={questions[index].action_3_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : null
                            }
                        </div>
                    )
                }) }
            </div>
        </section>
    )}


export default TopicResultsSummary
