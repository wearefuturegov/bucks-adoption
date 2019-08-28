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
  var completedCount = 0;
  var nextSection = null;

  if (homeResultsStored) {
    completedCount++;
  } else {
    nextSection = "home";
  }
  if (skillsResultsStored) {
    completedCount++;
  } else {
    nextSection = "skills";
  }
  if (familyResultsStored) {
    completedCount++;
  } else {
    nextSection = "family";
  }
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
  if (nextSection == null) {
    nextSection = "results";
  }

  return(
    <a title="Click to go to the next section" className={"completed_" + completedCount + " progressbar " + "next_"+nextSection} href={"/"+nextSection+"/index"}>
      <div className="progressbar_inner">
        <span className="progress_text">{completedCount} of 5 sections completed</span>
        <span className="progress_indicator"></span>
      </div>

    </a>
  );
}

export default ProgressBar
