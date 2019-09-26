import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Breadcrumbs from "../Breadcrumbs"

const Outer = styled.section`
    padding: 50px 20px;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.image});
    @media screen and (min-width: ${theme.tablet}){
        padding: 80px 20px;
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 120px 20px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const TextBox = styled.div`
    background: rgba(255,255,255,0.9);
    padding: 20px;
    max-width: 100%;
    @media screen and (min-width: ${theme.tablet}){
        max-width: 55%;
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 25px;
    }
`

const Headline = styled.h1`
    margin-bottom: 10px;
    color: ${theme.darkText};
    font-size: 1.6em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.9em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 2.4em;
        margin-bottom: 15px;
    }
`

const Deck = styled.p`
    margin-bottom: 10px;
    line-height: 1.6;
    color: ${theme.lightText};
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.15em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.3em;
    }
`

const HeroWithImage = ({
    breadcrumbs,
    headline,
    deck,
    image
}) =>
    <Outer image={image}>
        <Inner>
            <TextBox>
                { breadcrumbs ?
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                :null
                }
                <Headline>{headline}</Headline>
                <Deck>{deck}</Deck>
            </TextBox>
        </Inner>
    </Outer>

export default HeroWithImage
