import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Container, Button } from "./MobileMenu"
import ProgressBar from "../ProgressBar"

const Outer = styled.header`
    background: ${theme.blue};
    color: white;
    width: 100%;
    padding: 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

`

const MastheadLink = styled.a`
    color: white;
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: ${theme.tablet}){
        min-width: 275px;
    }
`

const Logo = styled.img`
    max-height: 45px;
    width: auto;
    margin-right: 15px;
`

const ServiceName = styled.p`
    font-size: 1.3em;
    margin-top: 3px;
    font-weight: 500;
`

const Nav = styled.nav`
    display: none;
    @media screen and (min-width: ${theme.tablet}){
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
`

const Menu = styled.ul`
    list-style: none;
`

const MenuListItem = styled.li`
    display: inline-block;
    margin-right: 15px;
    &:last-of-type{
        margin-right: 0px;
    }
`

const MenuLink = styled.a`
    color: white;
    text-decoration: none;
    transition: border-bottom 0.1s ease-out;
    &:hover{
        border-bottom: 1px solid white;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};
        color: ${theme.darkText};
        border-bottom-color: ${theme.darkText};
    }
`

const SearchInput = styled.input`
    padding: 10px 15px;
    color: ${theme.darkText};
    border-radius: 100px;
    border: none;
    font-size: 0.9em;
    margin-bottom: 15px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const MenuItem = ({href, children}) =>
    <MenuListItem><MenuLink href={href}>{children}</MenuLink></MenuListItem>

const MenuItems = () =>
    <>
        <MenuItem href="/">Explore topics</MenuItem>
        <MenuItem href="/results/index">Your readiness plan</MenuItem>
        <MenuItem href="/pages/informationevent">Attend an event</MenuItem>
    </>

const SiteHeader = ({logo, altLogo}) => {
    const [menuOpen, toggleMenu] = useState(false)

    return(
        <Outer>
            <Inner>
                <MastheadLink href="/">
                    {
                        logo && <Logo src={logo} alt={altLogo} />
                    }
                    <ServiceName>Adoption</ServiceName>
                </MastheadLink>
                <Nav>
                    <ProgressBar/>
                    <Menu>
                        <MenuItems/>
                    </Menu>
                </Nav>
                <Button onClick={()=> toggleMenu(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</Button>
            </Inner>
            <div aria-live="polite">
                {menuOpen && <Container><MenuItems/></Container>}
            </div>
        </Outer>
    )
}

export default SiteHeader
