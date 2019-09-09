import React, {uesState} from "react"
import Markdown from 'markdown-to-jsx';
import Layout from "../../Layout"
import heroimage from "./hero.jpg"
import TopicPageContent from "../../TopicPageContent"
import TopicPageComplete from "../../TopicPageComplete"
import OptionBubble from "../../OptionBubble"
import HeroWithImage from "../../HeroWithImage"
import { Link, animateScroll as scroll } from "react-scroll";
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

const Home = ({
   title,
   strapline,
   body,
   cta_title,
   cta_text,
   cta_button,
   lifestyletitle,
   lifestyleintro,
   timetitle,
   timeintro,
   familytitle,
   familyintro,
   skillstitle,
   skillsintro,
   hometitle,
   homeintro
 }) => {
  const [familyResultsStored, setFamilyResultsStored] = useStateWithLocalStorage("results_topic_family");
  const [homeResultsStored, setHomeResultsStored] = useStateWithLocalStorage("results_topic_home");
  const [healthResultsStored, setHealthResultsStored] = useStateWithLocalStorage("results_topic_lifestyle");
  const [timeResultsStored, setTimeResultsStored] = useStateWithLocalStorage("results_topic_time");
  const [skillsResultsStored, setSkillsResultsStored] = useStateWithLocalStorage("results_topic_skills");


  return(
    <Layout>
      <HeroWithImage headline={title} image={heroimage} />
      <div className="topic-sections">
        <div className="container">
          <div className="home-body">
            <Markdown>{body}</Markdown>
          </div>


          { healthResultsStored.length && timeResultsStored.length && familyResultsStored.length && skillsResultsStored.length && homeResultsStored.length ? (
              <div className="homepage_complete_message">
                <h2>You have completed all the sections</h2>
                <p>Well done on completing all of the sections of AdoptionReady, all of the actions we recommend you taking forward have been saved in <a href="/results/index">your adoption ready plan</a>.</p>
              </div>
            ):null
          }


          <div className="topic-sections_navigation">
            <div className="topic-sections_navigation_inner">
              <Link href="#" to="healthindex-card" className={ (healthResultsStored ? "option-bubble_completed " : "") + "option-bubble"} offset={-70}>
                <label className="option-bubble__label option-bubble__label--health">{lifestyletitle}</label>
                { healthResultsStored &&
                  <div className="checkmark_container"><div className="checkmark"></div></div>
                }
              </Link>
              <Link href="#" to="timeindex-card" className={ (timeResultsStored ? "option-bubble_completed " : "") + "option-bubble" } offset={-70}>
                <label className="option-bubble__label option-bubble__label--time">{timetitle}</label>
                { timeResultsStored &&
                  <div className="checkmark_container"><div className="checkmark"></div></div>
                }
              </Link>
              <Link href="#" to="familyindex-card" className={ (familyResultsStored ? "option-bubble_completed " : "") + "option-bubble" } offset={-70}>
                <label className="option-bubble__label option-bubble__label--family">{familytitle}</label>
                { familyResultsStored &&
                  <div className="checkmark_container"><div className="checkmark"></div></div>
                }
              </Link>
              <Link href="#" to="skillsindex-card" className={ (skillsResultsStored ? "option-bubble_completed " : "") + "option-bubble" } offset={-70}>
                <label className="option-bubble__label option-bubble__label--skills">{skillstitle}</label>
                { skillsResultsStored &&
                  <div className="checkmark_container"><div className="checkmark"></div></div>
                }
              </Link>
              <Link href="#" to="homeindex-card" className={ (homeResultsStored ? "option-bubble_completed " : "") + "option-bubble" } offset={-70}>
                <label className="option-bubble__label option-bubble__label--home">{hometitle}</label>
                { homeResultsStored &&
                  <div className="checkmark_container"><div className="checkmark"></div></div>
                }
              </Link>
            </div>
          </div>

          { healthResultsStored ? (
            <TopicPageComplete buttonText="Start" link="/health/index" title={lifestyletitle} intro={lifestyleintro} resultsStored={healthResultsStored} />
            ) : (
              <TopicPageContent buttonText="Start" link="/health/index" title={lifestyletitle} intro={lifestyleintro} />
            )
          }
          { timeResultsStored ? (
            <TopicPageComplete buttonText="Start" link="/time/index" title={timetitle} intro={timeintro} resultsStored={timeResultsStored} />
            ) : (
              <TopicPageContent buttonText="Start" link="/time/index" title={timetitle} intro={timeintro} />
            )
          }
          { familyResultsStored ? (
            <TopicPageComplete buttonText="Start" link="/family/index" title={familytitle} intro={familyintro} resultsStored={familyResultsStored} />
            ) : (
              <TopicPageContent buttonText="Start" link="/family/index" title={familytitle} intro={familyintro} />
            )
          }
          { skillsResultsStored ? (
            <TopicPageComplete buttonText="Start" link="/skills/index" title={skillstitle} intro={skillsintro} resultsStored={skillsResultsStored} />
            ) : (
              <TopicPageContent buttonText="Start" link="/skills/index" title={skillstitle} intro={skillsintro} />
            )
          }
          { homeResultsStored ? (
            <TopicPageComplete buttonText="Start" link="/home/index" title={hometitle} intro={homeintro} resultsStored={homeResultsStored} />
            ) : (
              <TopicPageContent buttonText="Start" link="/home/index" title={hometitle} intro={homeintro} />
            )
          }
        </div>
      </div>
    </Layout>
  )
}
export default Home
