import React, {uesState} from "react"
import "./style.scss"
import { Link, animateScroll as scroll } from "react-scroll";

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);

  return [resultsStored, setResultsStored];
};

const ProgressBar = () => {
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage("results_topic_family");
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage("results_topic_home");
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage("results_topic_lifestyle");
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage("results_topic_time");
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage("results_topic_skills");
  const [childrenResultsStored, setChildrenResultsStored] = useStateWithLocalStorage("results_topic_children");
  var completedCount = 0;
  var nextSection = null;


  if (timeResultsStored) {
    completedCount++;
  } else {
    nextSection = "time";
  }
  if (healthResultsStored) {
    completedCount++;
  } else {
    nextSection = "health";
  }
  if (skillsResultsStored) {
    completedCount++;
  } else {
    nextSection = "skills";
  }
  if (childrenResultsStored) {
    completedCount++;
  } else {
    nextSection = "children";
  }
  if (familyResultsStored) {
    completedCount++;
  } else {
    nextSection = "family";
  }
  if (homeResultsStored) {
    completedCount++;
  } else {
    nextSection = "home";
  }
  if (nextSection == null) {
    nextSection = "results";
  }

  return(
    <a title="Click to go to the next topic" className={"completed_" + completedCount + " progressbar " + "next_"+nextSection} href={"/"+nextSection+"/index"}>
      <div className="progressbar_inner">
        <span className="progress_text">{completedCount} of 6 topics completed</span>
        <span className="progress_indicator"></span>
      </div>

    </a>
  );
}

export default ProgressBar
