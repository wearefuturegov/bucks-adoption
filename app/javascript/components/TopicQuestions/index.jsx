import React, {useState, useRef} from "react"
import Markdown from 'markdown-to-jsx';
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"
import TopicCard from "../TopicCard"
import "./style.scss"

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);

  return [resultsStored, setResultsStored];
};

const TopicQuestions = ({
    id,
    content,
    total,
    currentQuestion,
    setCurrentQuestion,
    questionsLength,
    topicID,
    results,
    setResults,
    resultsStored,
    setResultsStored,
    scrollToRef,
    type
    }) => {

    const questionRef = useRef(null)

    const [selection, changeSelection] = useState([])

    const handleChange = (e) => {
        changeSelection([e.target.value])

        if (currentQuestion < (id+1)) {
            setCurrentQuestion(id+1)
            setResults(results + [e.target.value].toString())
        } else {
            setResults(replaceAt(results, (id-1), [e.target.value].toString()))
        }
        scrollToRef(questionRef)
    }

    return(
        <>
        { (id <= currentQuestion) ?
        <div className={"question fade-animate question_" + id}>
            <h2 ref={questionRef} className="question__title"><legend>{content.title}</legend></h2>
            <p className="question__help-text">{id} of {total} questions</p>
            <div className="question__options">
                <OptionBubble type="radio" name={id} label={content.answer_1} selectionState={selection} onChange={handleChange} value="1" />
                <OptionBubble type="radio" name={id} label={content.answer_2} selectionState={selection} onChange={handleChange} value="2" />
                {(content.answer_3)? <OptionBubble type="radio" name={id} label={content.answer_3} selectionState={selection} onChange={handleChange} value="3" /> : ""}
            </div>
            {
                // TODO - this could probably be refactored better
                selection == "1" ? (
                <>
                <div className="answer_explanation answer_explanation_1 fade-animate">
                    <Markdown>{content.answer_1_explanation}</Markdown>
                </div>
                { content.action_1_title ?
                    <TopicCard title={content.action_1_title} intro={content.action_1_text} type={type} />
                  :null
                }
                <hr/>
                </>

                ) : selection == "2" ? (
                <>
                <div className="answer_explanation answer_explanation_2 fade-animate">
                    <Markdown>{content.answer_2_explanation}</Markdown>
                </div>
                { content.action_2_title ?
                    <TopicCard title={content.action_2_title} intro={content.action_2_text} type={type} />
                  :null
                }
                <hr/>
                </>

                ) : selection == "3" ? (
                <>
                <div className="answer_explanation answer_explanation_3 fade-animate">
                    <Markdown>{content.answer_3_explanation}</Markdown>
                </div>
                { content.action_3_title ?
                    <TopicCard title={content.action_3_title} intro={content.action_3_text} type={type} />
                  :null
                }
                <hr/>
                </>
                ) :null
            }
        </div>
        :null}
        </>
    )}


export default TopicQuestions
