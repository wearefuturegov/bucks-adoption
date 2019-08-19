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
                            (questions[index].action_number == "0" && result != "") || (result == questions[index].action_number && result != "") && questions[index].action_number ?
                                <>
                                <Card key={index} title={questions[index].action_title} intro={questions[index].action_text} />
                                </>
                            :null
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
