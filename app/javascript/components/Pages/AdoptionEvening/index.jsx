import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import heroimage from "./bookevening.jpg"
import HeroWithImage from "../../HeroWithImage"
import EveningList from "../../EveningList"
import PageBodyContent, { UserContent } from "../../PageBodyContent"
import CallToAction from "../../CallToAction"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export default ({
  title, 
  strapline, 
  cta_title, 
  cta_text, 
  cta_button, 
  body,
  events
}) =>
  <Layout withHeader withFooter>
    <HeroWithImage 
      headline={title} 
      deck={strapline} 
      image={heroimage} 
      breadcrumbs={[
        { 
          href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child/", 
          label: "Home"
        },{ 
          href: "/", 
          label: "Get ready to adopt"
        },{ 
          label: "Attend an event"
        }                                                       
      ]} 
    />
    <EveningList events={events.events} />
    <PageBodyContent 
      headline="What should I expect?" 
      sidebarItems={[
        { 
          label: "Support for adoptive parents", 
          href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adoption-support/" 
        },{ 
          label: "Adopting a child you know", 
          href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child-you-know/" 
        },{ 
          label: "Placing your baby for adoption", 
          href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/placing-your-baby-for-adoption/" 
        }
      ]}
    >
      <UserContent>
        <Markdown>{body}</Markdown>
      </UserContent>
    </PageBodyContent>
  </Layout>
