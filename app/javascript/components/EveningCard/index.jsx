import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const EveningCard = ({
    title,
    url,
    start,
    end
}) => {
  return(
    <div className="evening-card">
      <h3 className="evening-card__title">{title}</h3>
      <a target="_blank" href={url} >Book event</a>
      <p>{start.local}</p>
      <p>{end.local}</p>
    </div>
  )
}

EveningCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default EveningCard
