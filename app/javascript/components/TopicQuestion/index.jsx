import React, {useState} from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"
import TopicQuestionAction from "../TopicQuestionAction"
import "./style.scss"

const TopicQuestion = ({
    id,
    content,
    total,
    currentQuestion,
    setCurrentQuestion
    }) => {

    const [selection, changeSelection] = useState([])
    const handleChange = (e) => {
        changeSelection([e.target.value])
        setCurrentQuestion(id+1)
    }

    return(
        <div className={"question fade-animate question_" + id}>
            <h2 className="question__title"><legend>{content.title}</legend></h2>
            <p className="question__help-text">{id} of {total} questions</p>
            <div className="question__options">
                <OptionBubble type="radio" name={id} label={content.answer_1} selectionState={selection} onChange={handleChange} value="1" />
                <OptionBubble type="radio" name={id} label={content.answer_2} selectionState={selection} onChange={handleChange} value="2" />
                {(content.answer_3)? <OptionBubble type="radio" name={id} label={content.answer_3} selectionState={selection} onChange={handleChange} value="3" /> : ""}
            </div>
            {
                selection == "1"?
                <div className="answer_explanation answer_explanation_1 fade-animate">
                    <p>{content.answer_1_explanation}</p>
                </div>
                :selection == "2"?
                <div className="answer_explanation answer_explanation_2 fade-animate">
                    <p>{content.answer_2_explanation}</p>
                </div>
                :selection == "3"?
                <div className="answer_explanation answer_explanation_3 fade-animate">
                    <p>{content.answer_3_explanation}</p>
                </div>
                :null
            }{
                (content.action_number == "0" && selection != "") || (selection == content.action_number && selection != "")?
                    <TopicQuestionAction title={content.action_title} text={content.action_text} />
                :null
            }
        </div>
    )}

TopicQuestion.propTypes = {

}

export default TopicQuestion
