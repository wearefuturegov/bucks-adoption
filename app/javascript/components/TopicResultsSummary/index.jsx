import React from "react"
import Button from "../Button"
import TopicCard from "../TopicCard"
import "./style.scss"

const TopicResultsSummary = ({ topicSection, handleRestartClick, resultsArray, questions, type }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>{topicSection} actions:</h2>
                {
                    resultsArray.map((result, index) => {
                    return(
                        <div className="final-results_single" key={index}>
                            {
                                // TODO - this could probably be refactored better
                                result == "1" ? (
                                    <>
                                    { questions[index].action_1_title ?
                                        <TopicCard title={questions[index].action_1_title} intro={questions[index].action_1_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : result == "2" ? (
                                    <>
                                    { questions[index].action_2_title ?
                                        <TopicCard title={questions[index].action_2_title} intro={questions[index].action_2_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : result == "3" ? (
                                    <>
                                    { questions[index].action_3_title ?
                                        <TopicCard title={questions[index].action_3_title} intro={questions[index].action_3_text} type={type} />
                                      :null
                                    }
                                    </>
                                ) : null
                            }
                        </div>
                    )
                }) }

                { handleRestartClick &&
                <div className="centered-button">
                    <Button onClick={handleRestartClick}>Restart questionnaire</Button>
                </div>
                }
            </div>
        </section>
    )}


export default TopicResultsSummary
