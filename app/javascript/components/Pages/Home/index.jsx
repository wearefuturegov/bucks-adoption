import React from "react"
import Layout from "../../Layout"
import Hero from "../../Hero"

export default ({title})=>
  <Layout withFooter>
    <Hero
      title="Support and care for adults, their families and carers"
      description="Helping you find the right information and support in Buckinghamshire."
      ctaTitle="Find activities, groups and services near you"
      ctaDescription="Answer a few questions and we'll suggest recommendations in your area"
      ctaHref="/explore-your-needs"
      ctaLinkText="Start looking"
    />
  </Layout>
