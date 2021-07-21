import React, {useState} from "react"
import TopicPageContent from "../TopicPageContent"
import Button from '../Button'
import "./style.scss"

const useStateWithLocalStorage = localStorageKey => {
  const [resultsStored, setResultsStored] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, resultsStored);
  }, [resultsStored]);

  return [resultsStored, setResultsStored];
};

const TopicSectionSuggestion = ({
    healthtitle,
    healthintro,
    familytitle,
    familyintro,
    childrentitle,
    childrenintro,
    hometitle,
    homeintro,
    timetitle,
    timeintro,
    skillstitle,
    skillsintro,
    currentSection,
    allComplete }) => {
  const family = "results_topic_family";
  const children = "results_topic_children";
  const home = "results_topic_home";
  const health = "results_topic_lifestyle";
  const time = "results_topic_time";
  const skills = "results_topic_skills";
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage(family);
  const [childrenResultsStored, setChildrenResultsStored] = useStateWithLocalStorage(children);
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage(home);
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage(health);
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage(time);
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage(skills);
  var amountComplete = 0;
  if(healthResultsStored.length) { amountComplete++; }
  if(timeResultsStored.length) { amountComplete++; }
  if(familyResultsStored.length) { amountComplete++; }
  if(childrenResultsStored.length) { amountComplete++; }
  if(skillsResultsStored.length) { amountComplete++; }
  if(homeResultsStored.length) { amountComplete++; }
    return(
        <>
        { !healthResultsStored.length || !timeResultsStored.length || !familyResultsStored.length || !childrenResultsStored.length || !skillsResultsStored.length || !homeResultsStored.length ? (
            home != currentSection && !homeResultsStored.length ? (
              <Button href="/home/index">Next topic</Button>
            ) : family != currentSection && !familyResultsStored.length ? (
              <Button href="/family/index">Next topic</Button>
            ) : skills != currentSection && !skillsResultsStored.length ? (
              <Button href="/skills/index">Next topic</Button>
            ) : health != currentSection && !healthResultsStored.length ? (
              <Button href="/health/index">Next topic</Button>
            ) : children != currentSection && !childrenResultsStored.length ? (
              <Button href="/children/index">Next topic</Button>
            ) : time != currentSection && !timeResultsStored.length ? (
              <Button href="/time/index">Next topic</Button>
            ) : (
                <Button href="/results/index">View your plan</Button>
            )
          ) :null
        }
        { amountComplete == 5 ? (
          <Button href="/results/index">View your plan</Button>
        ):null}

        </>
    )}


export default TopicSectionSuggestion
