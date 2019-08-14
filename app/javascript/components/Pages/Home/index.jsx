import React from "react"
import Layout from "../../Layout"
import Hero from "../../Hero"
import ToolPageContent from "../../ToolPageContent"

export default ({title, strapline, cta_title, cta_text, cta_button, lifestyletitle, lifestyleintro})=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle={cta_title}
      ctaDescription={cta_text}
      ctaHref="/pages/bookadoptionevening"
      ctaLinkText={cta_button}
    />

    <div className="tool-sections">
      <ToolPageContent title={lifestyletitle} intro={lifestyleintro} />
    </div>
  </Layout>
