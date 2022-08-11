import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
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
  events,
  hero_image,
  hero_alt,
  banner
}) =>
  <Layout withHeader withFooter banner={banner}>
    <HeroWithImage
      headline={title}
      deck={strapline}
      image={hero_image}
      alt={hero_alt}
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
          <Markdown>{pre_text}</Markdown>
        </UserContent>
      </PageBodyContent>
    }
    <EveningList events={events.events} />
    <PageBodyContent
      headline="What should I expect?"
    >
      <UserContent>
        <Markdown>{body || ''}</Markdown>
      </UserContent>
    </PageBodyContent>
  </Layout>
