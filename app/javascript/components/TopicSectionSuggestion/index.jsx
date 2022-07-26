import React, {useState, useEffect} from "react"
import TopicPageContent from "../TopicPageContent"
import Button from '../Button'
import "./style.scss"

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = useState(
    localStorage.getItem(localStorageKey) || ''
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);

  return [resultsStored, setResultsStored];
};

const TopicSectionSuggestion = ({ currentSection }) => {
  const family = "results_topic_family";
  const home = "results_topic_home";
  const health = "results_topic_lifestyle";
  const time = "results_topic_time";
  const skills = "results_topic_skills";
  const children = "results_topic_children";
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage(family);
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage(home);
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage(health);
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage(time);
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage(skills);
  const [childrenResultsStored, setChildrenResultsStored] = useStateWithLocalStorage(children);

  let amountComplete = 0;

  const allTopicResults = [healthResultsStored, timeResultsStored, familyResultsStored, skillsResultsStored, childrenResultsStored, homeResultsStored]

  for (let i = 0; i < allTopicResults.length; i++) {
    if (allTopicResults[i].length) {
      amountComplete++
    }
  }

    return(
        <>
        { 
        !healthResultsStored.length || !timeResultsStored.length || !familyResultsStored.length || 
        !skillsResultsStored.length || !childrenResultsStored.length || !homeResultsStored.length ? 
        (
            home != currentSection && !homeResultsStored.length ? (
              <Button href="/home/index">Next topic</Button>
            ) : family != currentSection && !familyResultsStored.length ? (
              <Button href="/family/index">Next topic</Button>
            ) : skills != currentSection && !skillsResultsStored.length ? (
              <Button href="/skills/index">Next topic</Button>
            ) : children != currentSection && !childrenResultsStored.length ? (
              <Button href="/children/index">Next topic</Button>
            ) : health != currentSection && !healthResultsStored.length ? (
              <Button href="/health/index">Next topic</Button>
            ) : time != currentSection && !timeResultsStored.length ? (
              <Button href="/time/index">Next topic</Button>
            ) : (
                <Button href="/results/index">View your plan</Button>
            )
          ) :null
        }
        { amountComplete == allTopicResults.length ? (
          <Button href="/results/index">View your plan</Button>
        ) :null}

        </>
    )}


export default TopicSectionSuggestion
