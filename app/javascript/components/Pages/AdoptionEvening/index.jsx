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
    >
      <UserContent>
        <Markdown>{body}</Markdown>
      </UserContent>
    </PageBodyContent>
  </Layout>
