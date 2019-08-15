import React from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"
import "./style.scss"

const Question = ({
    title,
    answer_1,
    answer_2,
    answer_3,
    action_title,

    selection,
    onChange
}) =>
    <div className="question">
        <h2 className="question__title"><legend>{title}</legend></h2>
        <div className="question__options">
            <OptionBubble type="radio" name="age" value={answer_1} label={answer_1} />
            <OptionBubble type="radio" name="age" value={answer_2} label={answer_2} />
            {(answer_3)? <OptionBubble type="radio" name="age" value={answer_3} label={answer_3} /> : ""}
        </div>
    </div>


Question.propTypes = {
    // selection: PropTypes.array.isRequired,
    // onChange: PropTypes.func.isRequired
}

export default Question
