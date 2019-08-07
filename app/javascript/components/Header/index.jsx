import React from "react"
import PropTypes from "prop-types"
import SearchForm from "../SearchForm"
import MobileMenu from "../MobileMenu"
import MenuItem from "./MenuItem"
import "./style.scss"
import logo from "./logo.svg"
import invertedLogo from "./logo-inverted.svg"

const Header = ({inverted}) => {
    let menuItems = [
        {
            href: "#",
            text: "Enquire about adoption"
        },
        {
            href: "#",
            text: "Who can adopt?"
        },
        {
            href: "#",
            text: "Support for adoptive parents"
        },
    ]
    return(
        <header className={(inverted)? "site-header site-header--inverted": "site-header"}>
            <div className="site-header__inner container">
                <a href="/">
                    <img className="site-header__logo" src={(inverted)? invertedLogo : logo} alt="Buckinghamshire County Council"/>
                </a>

                <MobileMenu menuItems={menuItems} inverted={inverted}/>

                <nav className="site-header__navigation" role="navigation">
                    <SearchForm/>
                    <ul className="site-header__menu site-menu" >
                        {(menuItems.map((menuItem, i)=>
                            <MenuItem href={menuItem.href} text={menuItem.text} key={i}/>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    )
}


Header.propTypes = {
    inverted: PropTypes.bool
}

export default Header
