import React from "react"
import Button from "../Button"
import TopicCard from "../TopicCard"
import styled from "styled-components"
import theme from "../_theme"

const Note = styled.p`
    color: #7D858C;
    a{
        color: ${theme.link};
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            background: ${theme.focus}
            outline: 3px solid ${theme.focus}
        }
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.1em;
    }
`

const Headline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 15px;
`

const TopicResultsSummary = ({
    topicSection,
    resultsArray,
    questions,
    type,
    withTitle,
    link
}) => {
    let displayedTitle = false;
    return(
        <section>
            { !resultsArray && withTitle ? (
                <Headline>{topicSection}</Headline>
            ):null
            }
            {resultsArray ? (
                resultsArray.map((result, index) => {
                return(
                    <div key={index}>
                        {    withTitle ? (
                                (result == "1" && questions[index].action_1_title) || (result == "2" && questions[index].action_2_title) || (result == "3" && questions[index].action_3_title) ? (
                                    !displayedTitle ? (
                                        <>
                                        <Headline>{topicSection}</Headline>
                                        {displayedTitle = true}
                                        </>
                                    ):null
                                ):null
                            ):null
                        }
                        <div className="summary-results_single">
                            {
                                result == "1" ? (
                                    questions[index].action_1_title &&
                                        <TopicCard topic={link} title={questions[index].action_1_title} answer={questions[index].answer_1} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_1_explanation} intro={questions[index].action_1_text} type={type} />
                                ) : result == "2" ? (
                                    questions[index].action_2_title &&
                                        <TopicCard topic={link} title={questions[index].action_2_title} answer={questions[index].answer_2} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_2_explanation} intro={questions[index].action_2_text} type={type} />
                                ) : result == "3" ? (
                                    questions[index].action_3_title &&
                                        <TopicCard topic={link} title={questions[index].action_3_title} answer={questions[index].answer_3} clickable="true" question_title={questions[index].title} question_content={questions[index].answer_3_explanation} intro={questions[index].action_3_text} type={type} />
                                ) :null
                            }
                        </div>
                    </div>
                )
            })) : (
                <Note>You have not completed the {topicSection} topic yet. <a href={'/'+ link + "/index"}>Explore it now</a>.</Note>
            )
            }
        </section>
    )
}

export default TopicResultsSummary
