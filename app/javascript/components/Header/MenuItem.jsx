import React from "react"
import PropTypes from "prop-types"

const MenuItem = ({href, text}) =>
    <li className="site-menu__item">
      <a href={href} className="site-menu__link">{text}</a>
    </li>

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default MenuItem
