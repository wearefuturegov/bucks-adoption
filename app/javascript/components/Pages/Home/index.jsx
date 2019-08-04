import React from "react"
import Layout from "../../Layout"
import Hero from "../../Hero"

export default ({title, strapline})=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle="Find activities, groups and services near you"
      ctaDescription="Answer a few questions and we'll suggest recommendations in your area"
      ctaHref="/explore-your-needs"
      ctaLinkText="Start looking"
    />
  </Layout>
