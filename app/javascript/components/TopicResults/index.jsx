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
    hometitle,
    homeintro,
    timetitle,
    timeintro,
    skillstitle,
    skillsintro,
    childrentitle,
    childrenintro,
    topicSection,
    handleRestartClick,
    resultsArray,
    questions,
    type,
    results,
    resultslink,
    finalresulttitle }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>{finalresulttitle}</h2>
                <p className="link-to-results">{results} <a href="/results/index">{resultslink}</a></p>

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

                    skillstitle={skillstitle}
                    skillsintro={skillsintro}

                    childrentitle={childrentitle}
                    childrenintro={childrenintro}

                    hometitle={hometitle}
                    homeintro={homeintro} />
                </div>
            </div>
        </section>
    )}

export default TopicResults
