import React, {useState} from "react"
import "./style.scss"

const TopicQuestionAction = ({
    title,
    text
    }) => {
    return(
        <div className="action-section fade-animate">
            <p className="action-section_title">{title}</p>
            <p className="action-section_text">{text}</p>
        </div>
    )}

export default TopicQuestionAction
