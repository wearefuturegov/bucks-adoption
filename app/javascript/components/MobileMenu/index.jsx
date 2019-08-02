import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.scss"

const MobileMenu = ({menuItems, inverted}) => {

    const [isOpen, open] = useState(false)

    return (
        <nav role="navigation" className="mobile-nav">
            <button
                className={(inverted)? "site-header__button site-header__button--inverted" : "site-header__button"}
                onClick={()=>{
                    open(!isOpen)
                    document.querySelector(".mobile-menu a").focus()
                }}
                // aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {(isOpen)? "Close menu": "Menu"}
            </button>

            <ul
                className={(isOpen)? "mobile-menu mobile-menu--visible" : "mobile-menu"}
                aria-hidden={!isOpen}
                id="mobile-menu"
            >

                {(menuItems.map((menuItem, i)=>
                    <li key={i}>
                        <a href={menuItem.href} className="mobile-menu__link">{menuItem.text}</a>
                    </li>
                ))}

            </ul>

        </nav>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    inverted: PropTypes.bool
}

export default MobileMenu
