import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const Button = ({href, children, background, withBottomMargin, centredSecondary, ...props}) =>
    <>
        {href ?
            <a href={href} {...props} className={`button  ${centredSecondary ? "button--centred" : ""}  ${background ? `button--${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
                {children}
            </a>
            :
            <button {...props} className={`button  ${centredSecondary ? "button--centred" : ""}  ${background ? `button--${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
                {children}
            </button>
        }
    </>

Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    withBottomMargin: PropTypes.bool
}

export default Button
