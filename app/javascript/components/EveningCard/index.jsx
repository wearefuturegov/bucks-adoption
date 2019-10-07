import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Markdown from 'markdown-to-jsx'
import Moment from 'react-moment'

const Outer = styled.li`
    background: white;
    padding: 30px;
    display: block;
    margin-bottom: 25px;
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

const Kicker = styled.p`
    font-weight: bold;
    color: ${theme.lightText};
    margin-top: 15px;
`

const EveningCard = ({
    start,
    end,
    venue,
    href
}) =>
    <Outer>
        <StyledLink href={href} target="blank" onClick={()=>{
            window.ga('send', 'event', 'Adoption evening', 'Click event booking card')
        }}>
            <Headline>
              <Moment format="ddd, DD MMMM YYYY (HH:mm - ">
                {start.local}
              </Moment>
              <Moment format="HH:mm)">
                {end.local}
              </Moment>
            </Headline>
        </StyledLink>
        <Deck>{venue.name}, {venue.address.city} {venue.address.postal_code}</Deck>
        <Kicker>Register on Eventbrite &#8594;</Kicker>
    </Outer>

export default EveningCard