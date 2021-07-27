import React from "react"
import Button from "../Button"
import TopicResultsSummary from "../TopicResultsSummary"
import TopicCard from "../TopicCard"
import TopicSectionSuggestion from "../TopicSectionSuggestion"
import "./style.scss"

const TopicResults = ({
    healthtitle,
    healthintro,
    familytitle,
    familyintro,
    childrentitle,
    childrenintro,
    hometitle,
    homeintro,
    timetitle,
    timeintro,
    skillstitle,
    skillsintro,
    topicSection,
    handleRestartClick,
    resultsArray,
    questions,
    type }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>
                <p className="link-to-results">All actions are saved in <a href="/results/index">your readiness plan</a>.</p>

                <TopicResultsSummary topicSection={topicSection} resultsArray={resultsArray} questions={questions} type={type} />

                <div className="centered-button">
                    { handleRestartClick &&
                        <Button centredSecondary onClick={handleRestartClick}>Restart questions</Button>
                    }
                    <TopicSectionSuggestion
                    currentSection={type}
                    healthtitle={healthtitle}
                    healthintro={healthintro}

                    timetitle={timetitle}
                    timeintro={timeintro}

                    familytitle={familytitle}
                    familyintro={familyintro}

                    childrentitle={childrentitle}
                    childrenintro={childrenintro}

                    skillstitle={skillstitle}
                    skillsintro={skillsintro}

                    hometitle={hometitle}
                    homeintro={homeintro} />
                </div>
            </div>
        </section>
    )}


export default TopicResults
