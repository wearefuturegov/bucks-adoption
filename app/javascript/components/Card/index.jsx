import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.li`
    background: white;
    padding: 30px;
    display: block;
    margin-bottom: 25px;
    border-top: ${props => props.borderColor ? `7px solid ${props.borderColor}` : ""}
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

const Card = ({
    headline,
    deck,
    href,
    borderColor
}) =>
    <Outer borderColor={borderColor}>
        <StyledLink href={href}>
            <Headline>{headline}</Headline>
        </StyledLink>
        <Deck>{deck}</Deck>
    </Outer>

export default Card