import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import heroimage from "./hero.jpg"
import HeroWithImage from "../../HeroWithImage"
import NarrowCallToAction from "../../NarrowCallToAction"
import CallToAction from "../../CallToAction"
import PageBodyContent from "../../PageBodyContent"
import CardGrid from "../../CardGrid"
import theme from "../../_theme"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const Home = ({
  title,
  strapline,
  body,
  cta_title,
  cta_text,
  cta_button,
  healthContent,
  timeContent,
  familyContent,
  skillsContent,
  homeContent,
  healthTitle,
  timeTitle,
  familyTitle,
  skillsTitle,
  homeTitle
}) => 
    <Layout>
    <HeroWithImage 
      headline={title} 
      deck={strapline} 
      image={heroimage} 
      breadcrumbs={[
        { 
          label: "Buckinghamshire Adoption", 
          href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child/" 
        },{ 
          label: "Get ready to adopt" 
        }
      ]}
    />
    <NarrowCallToAction 
      href="/pages/bookadoptionevening" 
      headline={cta_title} 
      message={cta_text} 
      label={cta_button} 
    />
    <PageBodyContent>
      <Markdown>
        {body}
      </Markdown>
    </PageBodyContent>
    <CardGrid
      cards={[
        {
          headline: healthTitle,
          deck: healthContent.kicker || healthContent.introduction,
          href: "/health/index",
          borderColor: theme.active
        },
        {
          headline: timeTitle,
          deck: timeContent.kicker || healthContent.introduction,
          href: "/time/index",
          borderColor: theme.social
        },
        {
          headline: familyTitle,
          deck: familyContent.kicker || healthContent.introduction,
          href: "/family/index",
          borderColor: theme.support
        },
        {
          headline: skillsTitle,
          deck: skillsContent.kicker || healthContent.introduction,
          href: "/skills/index",
          borderColor: theme.learning
        },
        {
          headline: homeTitle,
          deck: homeContent.kicker || healthContent.introduction,
          href: "/home/index",
          borderColor: theme.cultural
        },
      ]}
    />
    <CallToAction headline="Get in touch">
      <p>If you have any questions about adoption, you can email us at <a href="mail-to:adoption@buckscc.gov.uk">adoption@buckscc.gov.uk</a></p>
      <p>or call { isMobileDevice() ? <a href="tel:01494 586 349">01494 586 349</a> : <strong>01494 586 349</strong>}</p>
    </CallToAction>
  </Layout>

export default Home