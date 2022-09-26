import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Cookies from "../Cookies"
import buckinghamshire_logo from "../../../assets/images/buckinghamshire_logo.png"
import tpximpact_logo from "../../../assets/images/tpximpact_logo.png"
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
        color: #2c2d84
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
    @media screen and (min-width: ${theme.smartphone}){
        display: flex;
        flex-direction: column-reverse
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

const Twitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
        width: "35px",
        height: "35px",
        fill: "#2c2d84"
    }}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
    
    )
    
    const Facebook = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
            width: "35px",
            height: "35px",
            fill: "#2c2d84"
        }}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
    )

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
                <p style={{display: "flex", alignItems: "center"}}>&copy; 
                <a href="https://www.buckinghamshire.gov.uk/" target="_blank" title="View the Bucks website"><img src={buckinghamshire_logo} height="30px" style={{margin: "0 5px"}}/></a> in partnership with 
                <a href="https://www.tpximpact.com/" target="_blank" title="View TPXImpact website"><img src={tpximpact_logo} height="20px" style={{marginLeft: "5px"}}/></a></p>
            </InnerLeft>
            <InnerRight>
                <p className="bold">Get in touch</p>

                <Menu>
                    <MenuItem><a href="mailto:adoption@buckinghamshire.gov.uk" target="_blank">Email our team</a>,
                    <br/> or call us on { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : "01494 586 349"}</MenuItem>
                    <br/>
                    <MenuItem><a target="_blank" href="https://en-gb.facebook.com/adoptionbucks/" title="Find us on Facebook"><Facebook/></a></MenuItem>
                    <MenuItem><a target="_blank" href="https://twitter.com/bucksadoption" title="Find us on Twitter"><Twitter/></a></MenuItem>
                </Menu>
            </InnerRight>
        </Inner>
    </Outer>
    <Cookies/>
    </>

export default Footer
