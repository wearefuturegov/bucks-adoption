import React from "react"
import Button from "../Button"
import Card from "../Card"
import "./style.scss"

const TopicResults = ({ topicSection, handleRestartClick, resultsArray, questions }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>
                { handleRestartClick &&
                    <p>Some context for what this is...</p>
                }
                <p>(include core checklist for each section e.g. book an evening)</p>
                {
                    resultsArray.map((result, index) => {
                    return(
                        <div className="final-results_single" key={index}>
                            {
                                // TODO - this could probably be refactored better
                                result == "1" ? (
                                    <>
                                    { questions[index].action_1_title ?
                                        <Card title={questions[index].action_1_title} intro={questions[index].action_1_text} />
                                      :null
                                    }
                                    </>
                                ) : result == "2" ? (
                                    <>
                                    { questions[index].action_2_title ?
                                        <Card title={questions[index].action_2_title} intro={questions[index].action_2_text} />
                                      :null
                                    }
                                    </>
                                ) : result == "3" ? (
                                    <>
                                    { questions[index].action_3_title ?
                                        <Card title={questions[index].action_3_title} intro={questions[index].action_3_text} />
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


export default TopicResults
