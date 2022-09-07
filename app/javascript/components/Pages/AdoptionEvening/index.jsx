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
  pre_text,
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
      alt="Mother holding a baby showing information on a tablet to another young child"
      breadcrumbs={[
        {
          href: "/",
          label: "Get ready to adopt"
        },{
          label: "Attend an event"
        }
      ]}
    />
    {pre_text && 
      <PageBodyContent>
        <UserContent>
          <Markdown>{pre_text || ""}</Markdown>
        </UserContent>
      </PageBodyContent>
    }
    <EveningList events={events.events} />
    <PageBodyContent
      headline="What should I expect?"
    >
      <UserContent>
        <Markdown>{body || ""}</Markdown>
      </UserContent>
    </PageBodyContent>
  </Layout>
