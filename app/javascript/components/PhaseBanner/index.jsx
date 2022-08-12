import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Markdown from 'markdown-to-jsx'

const Outer = styled.section`
    background: ${theme.grey5};
    color: ${theme.grey1};
    padding: 10px 15px;
    line-height: 1.4;

    &.covid {
        padding: 20px 15px;

        p {
            font-size: 18px;
        }
        strong {
            font-size: 18px;
        }
    }
`

const Inner = styled.div`
    max-width: ${props => props.fullPage ? "none" : theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9rem;
`

const Tag = styled.strong`
    background: ${theme.blue};
    color: white;
    padding: 2px 7px;
    display: inline-block;
    text-transform: uppercase;
    margin-right: 15px;
`

const StyledLink = styled.a`
    color: ${theme.blue};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};
        /* color: ${theme.focus}; */
    }
`


const PhaseBanner = ({banner}) =>
    <Outer className="covid">
        <Inner>
        <Markdown>{banner || " "}</Markdown>
            {/* <Tag>Beta</Tag>
            <p>This is a new website - <StyledLink href="https://forms.gle/ty9AEZa8iirxBLGD8">your feedback</StyledLink> will help us improve it.</p> */}
        </Inner>
    </Outer>

export default PhaseBanner
