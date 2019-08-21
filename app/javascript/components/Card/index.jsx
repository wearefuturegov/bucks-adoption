import React from "react"
import PropTypes from "prop-types"
import Markdown from 'markdown-to-jsx';
import "./style.scss"

const Card = ({
    title,
    url,
    intro,
    clickable,
    children
}) => {
  return(
    <div className={`card ${clickable ? "clickable" : "notclickable"}`}>
      <h3 className="card__title">{title}</h3>
      <div className="card__intro">
        <Markdown>{intro}</Markdown>
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
