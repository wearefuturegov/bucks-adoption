import React, {useState} from "react"
import PropTypes from "prop-types"
import Markdown from 'markdown-to-jsx';
import "./style.scss"

const TopicCard = ({
    title,
    url,
    intro,
    clickable,
    type,
    question_content,
    question_title,
    answer,
    children
}) => {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleCardClick = () => {
    isRevealed ? (
      setIsRevealed(false)
    ) : (
      setIsRevealed(true)
    )
  }

  return(
    <div className={type + `-card topic-card card ${clickable ? "clickable" : "notclickable"}`} onClick={handleCardClick}>
      <h3 className="card__title">{title}</h3>
      <div className="card__intro">
        <Markdown>{intro}</Markdown>
      </div>
      {children}

      { clickable ?
        <div className="reveal-results">
          <p className="reveal-results_link">Click to { isRevealed ? 'less' : 'more'} details</p>
          { isRevealed &&
            <div className="reveal-results_content fade-animate">
              <h3>You chose {answer} to the question: {question_title} </h3>
              <Markdown>{question_content}</Markdown>
            </div>
          }
        </div>
        :null
      }
    </div>
  )
}

TopicCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TopicCard
