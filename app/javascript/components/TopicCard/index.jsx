import React from "react"
import Markdown from 'markdown-to-jsx'
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    background: white;
    border-top: 7px solid ${props => theme[props.topic]}
    padding: 25px;
    display: block;
    margin-bottom: 25px;
    position: relative;
    @media screen and (min-width: ${theme.tablet}){
        padding: 30px;
    }
`

const Headline = styled.h3`
    margin-bottom: 10px;
    font-size: 1.1em;
    color: ${theme.darkText};
`

const Deck = styled.div`
    color: ${theme.darkText};
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1.1em;
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
`

const Summary = styled.summary`
  color: ${theme.link}
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    text-decoration: none;
  }
  @media screen and (min-width: ${theme.desktop}){
    font-size: 1.1em;
  }
  &:focus{
    outline: 3px solid ${theme.focus}
  }
`

const DetailsHolder = styled.div`
  margin-top: 15px;
  color: ${theme.lightText};
  font-size: 1em;
`

const DetailsHeadline = styled.h3`
  color: ${theme.lightText}
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1em;
`

const TopicCard = ({
    title,
    url,
    intro,
    clickable,
    type,
    question_content,
    question_title,
    answer,
    children,
    topic
}) =>
  <Outer topic={topic}>
    <Headline>{title}</Headline>
    {intro &&       
      <Deck>
        {<Markdown>{intro}</Markdown>}
      </Deck>
    }
    {children}
    {question_content &&
      <details>
        <Summary>See details and next steps</Summary>
        <DetailsHolder>
          <DetailsHeadline>You chose '{answer}' for the question '{question_title}'</DetailsHeadline>
          <Markdown>{question_content}</Markdown>
        </DetailsHolder>
      </details>
    }
  </Outer>

export default TopicCard
