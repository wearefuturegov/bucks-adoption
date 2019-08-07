import React from "react"
import Layout from "../../Layout"
import Hero from "../../Hero"

export default ({title, strapline, cta_title, cta_text})=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle={cta_title}
      ctaDescription={cta_text}
      ctaHref="#"
      ctaLinkText="Find out about adoption"
    />
  </Layout>
