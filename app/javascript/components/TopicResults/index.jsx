import React from "react"
import Button from "../Button"
import "./style.scss"

const TopicResults = ({ topicSection, handleRestartClick, resultsStored }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>
                <p>Some context for what this is...</p>
                <p>include any basic checklist for healt and wellbeing?</p>
                {resultsStored}
                <div className="centered-button">
                    <Button onClick={handleRestartClick}>Redo questions</Button>
                </div>
            </div>
        </section>
    )}


export default TopicResults
