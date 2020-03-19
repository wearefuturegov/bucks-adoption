import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Cookies from "../Cookies"
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"

const Outer = styled.footer`
    background: ${theme.grey1};
    color: white;
    padding: 30px 10px;
    @media screen and (min-width: 600px){
        padding: 40px 10px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const FooterNav = styled.nav`
    margin-bottom: 30px;
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
    }
`

const FooterLinks = styled.div`
    margin-bottom: 15px;
    @media screen and (min-width: 600px){
        margin-bottom: 0px;
    }
`

const FooterLink = styled.a`
    color: white;
    margin-right: 10px;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        color: ${theme.grey1};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        margin-right: 20px;
    }
`

const SocialLink = styled.a`
    margin-right: 10px;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        margin-right: 20px;
    }
`

const SocialIcon = styled.img`
    width: 25px;
`

const CopyrightNotice = styled.p``

const Footer = () =>
    <>
    <Outer>
        <Inner>
            <FooterNav>
                <FooterLinks>
                    <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/cookies/">Cookies</FooterLink>
                    <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/">Privacy and data</FooterLink>
                    <FooterLink href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/">Contact us</FooterLink>
                </FooterLinks>
                <div>
                    <SocialLink href="https://www.facebook.com/BuckinghamshireCountyCouncil/">
                        <SocialIcon src={facebook} alt="Facebook"/>
                    </SocialLink>
                    <SocialLink href="http://twitter.com/buckscc">
                        <SocialIcon src={twitter} alt="Twitter"/>
                    </SocialLink>
                    <SocialLink href="http://www.youtube.com/buckinghamshirecc">
                        <SocialIcon src={youtube} alt="YouTube"/>
                    </SocialLink>
                </div>
            </FooterNav>
            <CopyrightNotice>© 2019 Buckinghamshire Council</CopyrightNotice>
        </Inner>
    </Outer>
    <Cookies/>
    </>

export default Footer
