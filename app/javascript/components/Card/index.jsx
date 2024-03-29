import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.png"

const Outer = styled.li`
    background: white;
    padding: 30px;
    display: block;
    margin-bottom: 25px;
    border-top: ${props => props.borderColor ? `7px solid ${props.borderColor}` : ""};
    border-radius: 10px;
    box-shadow: 0 4px 0 ${theme.shadow};
    position: relative;
    &:active{
        transform: translateY(4px);
        background: ${theme.activeCard};
    }
    &:focus-within{
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 35px;
    }
`

const StyledLink = styled.a`
    color: ${theme.link};
    &:hover{
        text-decoration: none;
    }
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none !important
    }
`

const Headline = styled.h3`
    margin-bottom: 15px;
    font-size: 1.2em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.4em;
    }
`

const Deck = styled.p`
    color: ${theme.lightText};
    line-height: 1.6;
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.1em
    }
`

const Tick = styled.img`
    width: 25px;
    height: 25px;
    background: ${theme.link};
    border-radius: 100%;
    position: absolute;
    top: 30px;
    right: 20px;
    padding: 5px;
    @media screen and (min-width: ${theme.desktop}){
        top: 35px;
        right: 30px;
        width: 35px;
        height: 35px;
    }
`

const Card = ({
    headline,
    deck,
    href,
    borderColor,
    completed,
    startTopic,
    completedTopic
}) =>
    <Outer borderColor={borderColor} completed={completed}>
        <Headline>{headline}</Headline>
        <Deck>{deck}</Deck>
        <br/>
        <StyledLink href={href}>
            {completed ? completedTopic : startTopic}
        </StyledLink>
        {completed && <Tick src={tick}/>}
    </Outer>

export default Card
