import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Cookies from "../Cookies"
import buckinghamshire_logo from "../../../assets/images/buckinghamshire_logo.png"
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

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
    p {
        margin-bottom: 5px;
    }
    .bold {
        font-weight: bold;
    }
`
const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: block;

    @media screen and (min-width: ${theme.tablet}){
        display: flex;
    }
`
const InnerLeft = styled.div`
    @media screen and (min-width: ${theme.tablet}){
        width: 70%;
    }
`
const InnerRight = styled.div`
    margin-top: 25px;
    @media screen and (min-width: ${theme.tablet}){
        width: 30%;
        margin-top: 0px;
    }
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
            <InnerLeft>
                <Menu>
                    <MenuItem><a href="/pages/about" title="Read about us">About</a></MenuItem>
                    <MenuItem><a href="/pages/cookies" title="Read our cookie policy">Cookies</a></MenuItem>
                    <MenuItem><a href="/pages/accessibility" title="Read our Accessibility statement">Accessibility statement</a></MenuItem>
                    <MenuItem><a href="https://www.buckinghamshire.gov.uk/your-council/privacy/" title="Read our privacy statement">Privacy statement</a></MenuItem>
                    <MenuItem><a href="https://www.buckinghamshire.gov.uk/community-and-safety/modern-slavery-statement/" title="Read our modern slavery statement">Modern slavery statement</a></MenuItem>
                </Menu>
                <p style={{display: "flex", alignItems: "center"}}>&copy; <a href="https://www.buckinghamshire.gov.uk/" target="_blank" title="View the Bucks website"><img src={buckinghamshire_logo} height="35px" style={{marginLeft: "5px"}}/></a></p>
            </InnerLeft>
            <InnerRight>
                <p className="bold">Get in touch</p>

                <Menu>
                    <MenuItem><a href="mailto:adoption@buckinghamshire.gov.uk" target="_blank">Email our team</a>,
                    <br/> or call us on { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : "01494 586 349"}</MenuItem>
                    <br/>
                    <MenuItem><a target="_blank" href="https://www.buckinghamshire.gov.uk/your-council/contact-us/" title="Get in contact with the council">Contact Buckinghamshire</a></MenuItem>
                    <br/>
                    <MenuItem><a target="_blank" href="https://en-gb.facebook.com/adoptionbucks/" title="Find us on Facebook">Facebook</a></MenuItem>
                    <MenuItem><a target="_blank" href="https://twitter.com/bucksadoption" title="Find us on Twitter">Twitter</a></MenuItem>
                </Menu>
            </InnerRight>
        </Inner>
    </Outer>
    <Cookies/>
    </>

export default Footer
