import React from "react"
import PropTypes from "prop-types"
import Markdown from 'markdown-to-jsx';
import "./style.scss"

const TopicHomeCard = ({
    title,
    url,
    intro,
    clickable,
    type,
    children
}) => {
  return(
    <div className={type + `-card topic-card card ${clickable ? "clickable" : "notclickable"}`}>
      <h3 className="card__title">{title}</h3>
      <div className="card__intro">
        <Markdown>{intro}</Markdown>
      </div>
      {children}
    </div>
  )
}

TopicHomeCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TopicHomeCard
