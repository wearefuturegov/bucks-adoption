import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Cookies from "../Cookies"
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
    h4 {
        margin-bottom: 5px;
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
                <p>This is a new website in Beta - <a href="https://forms.gle/ty9AEZa8iirxBLGD8" target="_blank" title="Give us feedback">your feedback</a> will help us improve it.</p>
                <br/>
                <Menu>
                    <MenuItem><a href="/pages/cookies" title="Read our cookie policy">Cookies</a></MenuItem>
                    <MenuItem><a href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/" title="Read our privacy statement">Privacy statement</a></MenuItem>
                    <MenuItem><a href="https://www.buckinghamshire.gov.uk/community-and-safety/modern-slavery-statement/" title="Read our modern slavery statement">Modern slavery statement</a></MenuItem>
                </Menu>
                <p>&copy; <a href="http://buckscc.gov.uk" target="_blank" title="View the Bucks website">Buckinghamshire County Council</a></p>
            </InnerLeft>
            <InnerRight>
                <h4>Get in touch</h4>

                <Menu>
                    <MenuItem><a href="mailto:adoption@buckscc.gov.uk" target="_blank">Email our team</a>,
                    <br/> or call us on { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : "01494 586 349"}</MenuItem>
                    <br/>
                    <MenuItem><a target="_blank" href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/" title="Get in contact with the council">Contact Buckinghamshire</a></MenuItem>
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
