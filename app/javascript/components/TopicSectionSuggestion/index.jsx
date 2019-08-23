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
                <div className="next-section-suggestion">
                    <h2>Continue with the next section of questions</h2>
                    <TopicPageContent buttonText="Continue" link="/health/index" title={healthtitle} intro={healthintro} />
                </div>
            ) : time != currentSection && !timeResultsStored.length ? (
                <div className="next-section-suggestion">
                    <h2>Continue with the next section of questions</h2>
                    <TopicPageContent buttonText="Continue" link="/time/index" title={timetitle} intro={timeintro} />
                </div>
            ) : family != currentSection && !familyResultsStored.length ? (
                <div className="next-section-suggestion">
                    <h2>Continue with the next section of questions</h2>
                    <TopicPageContent buttonText="Continue" link="/family/index" title={familytitle} intro={familyintro} />
                </div>
            ) : skills != currentSection && !skillsResultsStored.length ? (
                <div className="next-section-suggestion">
                    <h2>Continue with the next section of questions</h2>
                    <TopicPageContent buttonText="Continue" link="/skills/index" title={skillstitle} intro={skillsintro} />
                </div>
            ) : home != currentSection && !homeResultsStored.length ? (
                <div className="next-section-suggestion">
                    <h2>Continue with the next section of questions</h2>
                    <TopicPageContent buttonText="Continue" link="/home/index" title={hometitle} intro={homeintro} />
                </div>
            ):null
          ) : (
              <div className="next-section-suggestion">
                  <p>You have completed all the sections.</p>
                  <Button href="/results/index">View your results</Button>
              </div>
          )
        }
        </>
    )}


export default TopicSectionSuggestion
