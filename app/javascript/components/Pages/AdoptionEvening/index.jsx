import React from "react"
import Markdown from 'markdown-to-jsx';
import "./style.scss"
import Layout from "../../Layout"
import heroimage from "./bookevening.jpg"
import HeroWithImage from "../../HeroWithImage"
import EveningList from "../../EveningList"
import PageBodyContent from "../../PageBodyContent"
import CallToAction from "../../CallToAction"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export default ({title, strapline, cta_title, cta_text, cta_button, body})=>
  <Layout withHeader withFooter>
    <HeroWithImage headline={title} deck={strapline} image={heroimage} breadcrumbs={[
                                                                      { href: "/", label: "Get ready to adopt" },
                                                                      { label: "test" }
                                                                    ]} />
    <EveningList />

    <PageBodyContent headline="What should I expect?" sidebarItems={[
                                                                    { label: "Support for adoptive parents", href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adoption-support/" },
                                                                    { label: "Adopting a child you know", href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child-you-know/" },
                                                                    { label: "Placing your baby for adoption", href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/placing-your-baby-for-adoption/" }
                                                                    ]}>
      <Markdown>{body}</Markdown>
    </PageBodyContent>

    <CallToAction headline="Get in touch">
      <p>If you have any questions about adoption, you can email us at: <a href="mail-to:adoption@buckscc.gov.uk">adoption@buckscc.gov.uk</a></p>
      <p>
        or call:
        { isMobileDevice() ? (
            <a href="tel:01494 586 349">01494 586 349</a>
         ) : (
             <strong>01494 586 349</strong>
         )
        }
      </p>
    </CallToAction>
  </Layout>
