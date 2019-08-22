import React from "react"
import Button from "../Button"
import TopicResultsSummary from "../TopicResultsSummary"
import "./style.scss"

const TopicResults = ({ topicSection, handleRestartClick, resultsArray, questions, type }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>
                { handleRestartClick &&
                    <p>Some context for what this is...</p>
                }
                <p>(include core checklist for each section e.g. book an evening)</p>

                <TopicResultsSummary topicSection={topicSection} resultsArray={resultsArray} questions={questions} type={type} />

                { handleRestartClick &&
                <div className="centered-button">
                    <Button centredSecondary onClick={handleRestartClick}>Restart questionnaire</Button>
                </div>
                }
            </div>
        </section>
    )}


export default TopicResults
