import React from "react"
import Markdown from 'markdown-to-jsx'
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    background: white;
    border-left: 7px solid ${props => theme[props.topic]}
    padding: 25px;
    display: block;
    margin-bottom: 25px;
    position: relative;
    width: 100%;
    max-width: 710px;
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
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
    p{
      margin-bottom: 20px;
    }
    a{
      color: ${theme.link};
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
  color: ${theme.darkText};
  font-size: 1em;
  line-height: 1.6;
  padding: 20px;
  background: ${theme.background};
  border-left: 1px solid ${theme.lightText}
  p{
    margin-bottom: 15px
  }
  ul, ol{
    padding-left: 20px;
    margin-bottom: 15px;
    color: ${theme.darkText};
  }
  li p{
    margin-bottom: 5px;
    margin-left: 10px;
  }
`

const DetailsHeadline = styled.h3`
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
}) => {
    return(
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
          <Summary>Why is this recommended?</Summary>
          <DetailsHolder>
            <DetailsHeadline>You chose '{answer}' for the question '{question_title}'</DetailsHeadline>
            <Markdown>{question_content}</Markdown>
          </DetailsHolder>
        </details>
      }
    </Outer>
  )
}

export default TopicCard
