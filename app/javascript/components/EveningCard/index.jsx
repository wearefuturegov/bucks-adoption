import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import Moment from 'react-moment'

const EveningCard = ({
    title,
    url,
    start,
    end,
    venue
}) => {
  return(
    <div className="evening-card">
      <a className="evening-card__link" target="_blank" href={url}>
      <h3 className="evening-card__title">
        <Moment format="ddd, DD MMMM YYYY (HH:mm - ">
          {start.local}
        </Moment>
        <Moment format="HH:mm)">
          {end.local}
        </Moment>
      </h3>
      </a>
      <p className="evening-card__type">
        {title}
        <br/>
        {venue.name}, {venue.address.city} {venue.address.postal_code}
      </p>
      <a className="evening-card__text-link" target="_blank" href={url}>Book evening on Eventbrite</a>
    </div>
  )
}

EveningCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default EveningCard
