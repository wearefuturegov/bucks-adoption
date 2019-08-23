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
    topicSection,
    handleRestartClick,
    resultsArray,
    questions,
    type }) => {

    return(
        <section className="final-results">
            <div className="container">
                <h2>Your readiness list for {topicSection}</h2>

                <TopicResultsSummary topicSection={topicSection} resultsArray={resultsArray} questions={questions} type={type} />

                <TopicCard title="Come to an adoption evening" intro="We recommend the next step you take is to come to one of our regularly run information evenings. At the event, you will be able to ask our team questions and will hear from our team and previous adopters.">
                    <p><a className="float-right-text" href="/pages/bookadoptionevening">Book an evening</a></p>
                </TopicCard>


                { handleRestartClick &&
                <div className="centered-button">
                    <Button centredSecondary onClick={handleRestartClick}>Restart questionnaire</Button>
                </div>
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

                    hometitle={hometitle}
                    homeintro={homeintro} />
            </div>
        </section>
    )}


export default TopicResults
