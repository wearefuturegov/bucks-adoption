import React from "react"
import Button from "../Button"
import TopicResultsSummary from "../TopicResultsSummary"
import TopicPageContent from "../TopicPageContent"
import "./style.scss"

const TopicResults = ({ topicSection, handleRestartClick, resultsArray, questions, type }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>

                <TopicResultsSummary topicSection={topicSection} resultsArray={resultsArray} questions={questions} type={type} />


                <TopicPageContent title="Come to an adoption evening" intro="We recommend the next step you take is to come to one of our regularly run information evenings. At the event, you will be able to ask our team questions and will hear from our team and previous adopters." buttonText="Book an evening" link="/pages/bookadoptionevening" />


                { handleRestartClick &&
                <div className="centered-button">
                    <Button centredSecondary onClick={handleRestartClick}>Restart questionnaire</Button>
                </div>
                }

                (TODO include next suggested section)
            </div>
        </section>
    )}


export default TopicResults
