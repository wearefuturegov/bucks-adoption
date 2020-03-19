import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Button from "../Button"

const Outer = styled.section`
    background-image: url(${props => props.hero});
    background-size: cover;
    background-position: center;
    padding: 200px 15px 10px 15px;
    margin-bottom: 130px;
    @media screen and (min-width: 600px){
        padding-top: 250px;
    }
    @media screen and (min-width: 1600px){
        padding-top: 300px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Panel = styled.div`
    background: ${theme.blue};
    color: white;
    padding: 25px;
    max-width: calc(${theme.maxWidth} / 3 * 2);
    margin-bottom: -130px;
    @media screen and (min-width: 600px){
        padding: 35px;
    }
`

const Breadcrumbs = styled.ul`
    list-style: none;
    margin-bottom: 15px;
`

const Breadcrumb = styled.li`
    display: inline-block;
    margin-right: 10px;
    &:after{
        content: "/";
        margin-left: 10px;
        opacity: 0.3;
    }
    &:last-of-type{
        &:after{
            content: none;
        }
    }
`

const A = styled.a`
    color: white;
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.blue};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const PageTitle = styled.h1`
    margin-bottom: 15px;
    font-size: 1.8rem;
    @media screen and (min-width: 600px){
        font-size: 2.5rem;
    }
`

const Lede = styled.p`
    font-size: 1.1em;
    @media screen and (min-width: 600px){
        font-size: 1.2rem;
    }
`

const HeroWithImage = ({
    cta,
    headline,
    deck,
    image,
    handleRefClick
}) =>
    <Outer hero={image}>
        <Inner>
            <Panel>
                <Breadcrumbs>
                    <Breadcrumb><A href="https://www.buckscc.gov.uk">Home</A></Breadcrumb>
                    <Breadcrumb>Adoption</Breadcrumb>
                </Breadcrumbs>
                <PageTitle>{headline}</PageTitle>
                <Lede>{deck}</Lede>
                { cta &&
                    <>
                    <br/>
                    <Button background="white" onClick={handleRefClick}>{cta}</Button>
                    </>
                }
            </Panel>
        </Inner>
    </Outer>


export default HeroWithImage
