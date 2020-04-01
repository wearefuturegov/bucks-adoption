import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Cookies from "../Cookies"

const Outer = styled.footer`
    background: ${theme.shadow};
    padding: 40px 20px;
    font-size: 0.9em;
    color: ${theme.lightText};
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
        font-size: 0.95em;
    }
    a{
        color: ${theme.lightText};
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};
        }
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Menu = styled.ul`
    list-style: none;
    margin-bottom: 15px;
`

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
`

const Footer = () =>
    <>
    <Outer>
        <Inner>
            <Menu>
                <MenuItem><a href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/" title="Get in contact">Contact us</a></MenuItem>
                <MenuItem><a href="/pages/cookies" title="Read our cookie policy">Cookies</a></MenuItem>
                <MenuItem><a href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/" title="Read our privacy statement">Privacy statement</a></MenuItem>
                <MenuItem><a href="https://www.buckinghamshire.gov.uk/community-and-safety/modern-slavery-statement/" title="Read our modern slavery statement">Modern slavery statement</a></MenuItem>
            </Menu>
            <p>&copy; <a href="http://buckscc.gov.uk" target="_blank" title="View the Bucks website">Buckinghamshire County Council</a></p>
        </Inner>
    </Outer>
    <Cookies/>
    </>

export default Footer
