import React, {uesState} from "react"
import Markdown from 'markdown-to-jsx';
import Layout from "../../Layout"
import Hero from "../../Hero"
import TopicPageContent from "../../TopicPageContent"
import TopicPageComplete from "../../TopicPageComplete"
import OptionBubble from "../../OptionBubble"
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
    <Layout withFooter>
      <Hero
        title={title}
        description={strapline}
        ctaTitle={cta_title}
        ctaDescription={cta_text}
        ctaHref="/pages/bookadoptionevening"
        ctaLinkText={cta_button}
      />

      <div className="topic-sections">
        <div className="container">
          <Markdown>{body}</Markdown>

          <div className="topic-sections_navigation">
            <div className="topic-sections_navigation_inner">
              <Link to="health-card" className="option-bubble" offset={-70}>
                <label className="option-bubble__label option-bubble__label--health">{lifestyletitle}</label>
              </Link>
              <Link to="time-card" className="option-bubble" offset={-70}>
                <label className="option-bubble__label option-bubble__label--time">{timetitle}</label>
              </Link>
              <Link to="family-card" className="option-bubble" offset={-70}>
                <label className="option-bubble__label option-bubble__label--family">{familytitle}</label>
              </Link>
              <Link to="skills-card" className="option-bubble" offset={-70}>
                <label className="option-bubble__label option-bubble__label--skills">{skillstitle}</label>
              </Link>
              <Link to="home-card" className="option-bubble" offset={-70}>
                <label className="option-bubble__label option-bubble__label--home">{hometitle}</label>
              </Link>
            </div>
          </div>

          { healthResultsStored ? (
            <TopicPageComplete link="health" title={lifestyletitle} intro={lifestyleintro} resultsStored={healthResultsStored} />
            ) : (
              <TopicPageContent link="health" title={lifestyletitle} intro={lifestyleintro} />
            )
          }
          { timeResultsStored ? (
            <TopicPageComplete link="time" title={timetitle} intro={timeintro} resultsStored={timeResultsStored} />
            ) : (
              <TopicPageContent link="time" title={timetitle} intro={timeintro} />
            )
          }
          { familyResultsStored ? (
            <TopicPageComplete link="family" title={familytitle} intro={familyintro} resultsStored={familyResultsStored} />
            ) : (
              <TopicPageContent link="family" title={familytitle} intro={familyintro} />
            )
          }
          { skillsResultsStored ? (
            <TopicPageComplete link="skills" title={skillstitle} intro={skillsintro} resultsStored={skillsResultsStored} />
            ) : (
              <TopicPageContent link="skills" title={skillstitle} intro={skillsintro} />
            )
          }
          { homeResultsStored ? (
            <TopicPageComplete link="home" title={hometitle} intro={homeintro} resultsStored={homeResultsStored} />
            ) : (
              <TopicPageContent link="home" title={hometitle} intro={homeintro} />
            )
          }
        </div>
      </div>
    </Layout>
  )
}
export default Home
