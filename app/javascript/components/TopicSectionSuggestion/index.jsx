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
    hometitle,
    homeintro,
    timetitle,
    timeintro,
    skillstitle,
    skillsintro,
    currentSection }) => {
  const family = "results_topic_family";
  const home = "results_topic_home";
  const health = "results_topic_lifestyle";
  const time = "results_topic_time";
  const skills = "results_topic_skills";
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage(family);
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage(home);
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage(health);
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage(time);
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage(skills);

    return(
        <>
        { !healthResultsStored.length || !timeResultsStored.length || !familyResultsStored.length || !skillsResultsStored.length || !homeResultsStored.length ? (
            health != currentSection && !healthResultsStored.length ? (
              <Button href="/health/index">Next section</Button>
            ) : time != currentSection && !timeResultsStored.length ? (
              <Button href="/time/index">Next section</Button>
            ) : family != currentSection && !familyResultsStored.length ? (
              <Button href="/family/index">Next section</Button>
            ) : skills != currentSection && !skillsResultsStored.length ? (
              <Button href="/skills/index">Next section</Button>
            ) : home != currentSection && !homeResultsStored.length ? (
              <Button href="/home/index">Next section</Button>
            ):null
          ) : (
            <Button href="/results/index">View your results</Button>
          )
        }
        </>
    )}


export default TopicSectionSuggestion
