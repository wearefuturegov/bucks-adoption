import React from "react"
import Layout from "../../Layout"
import Hero from "../../Hero"

export default ({title, strapline, cta_title, cta_text, cta_button})=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle={cta_title}
      ctaDescription={cta_text}
      ctaHref="#"
      ctaLinkText={cta_button}
    />
  </Layout>
