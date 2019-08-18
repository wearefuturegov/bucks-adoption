import React, {useState, useRef} from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"
import Card from "../Card"
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

const TopicQuestion = ({
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
    setResultsStored
    }) => {


    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    const [selection, changeSelection] = useState([])
    const handleChange = (e) => {
        changeSelection([e.target.value])

        if (currentQuestion < (id+1)) {
            setCurrentQuestion(id+1)
            setResults(results + [e.target.value].toString())
        } else {
            setResults(replaceAt(results, (id-1), [e.target.value].toString()))
        }
        executeScroll()
        if ((questionsLength+1) <= currentQuestion) {
            handleEnd()
        }
    }
    const handleEnd = (e) => {
        // setResultsStored(results)
    }

    return(
        <>
        { (id <= currentQuestion) ?
        <div className={"question fade-animate question_" + id}>
            <h2 ref={myRef} className="question__title"><legend>{content.title}</legend></h2>
            <p className="question__help-text">{id} of {total} questions</p>
            <div className="question__options">
                <OptionBubble type="radio" name={id} label={content.answer_1} selectionState={selection} onChange={handleChange} value="1" />
                <OptionBubble type="radio" name={id} label={content.answer_2} selectionState={selection} onChange={handleChange} value="2" />
                {(content.answer_3)? <OptionBubble type="radio" name={id} label={content.answer_3} selectionState={selection} onChange={handleChange} value="3" /> : ""}
            </div>
            {
                selection == "1"?
                <div className="answer_explanation answer_explanation_1 fade-animate">
                    {content.answer_1_explanation.split("\n").map((i,key) => {
                      return (<p key={key}>{i}</p>);
                    })}
                </div>
                :selection == "2"?
                <div className="answer_explanation answer_explanation_2 fade-animate">
                    {content.answer_2_explanation.split("\n").map((i,key) => {
                      return (<p key={key}>{i}</p>);
                    })}
                </div>
                :selection == "3"?
                <div className="answer_explanation answer_explanation_3 fade-animate">
                    {content.answer_3_explanation.split("\n").map((i,key) => {
                      return (<p key={key}>{i}</p>);
                    })}
                </div>
                :null
            }{
                (content.action_number == "0" && selection != "") || (selection == content.action_number && selection != "") && content.action_number ? (
                    <>
                    <Card title={content.action_title} intro={content.action_text} />
                    <hr/>
                    </>
                ) : selection != ""? (
                    <hr/>
                ):null
            }

        </div>
        :null}
        </>
    )}


export default TopicQuestion
