import React from "react"
import PropTypes from "prop-types"
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
        {intro.split("\n").map((i,key) => {
            return (<p key={key}>{i}</p>);
          })}
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
