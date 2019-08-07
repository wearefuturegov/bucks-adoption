import React from "react"
import "./style.scss"
import Layout from "../../Layout"
import Hero from "../../Hero"
import EveningList from "../../EveningList"

export default ({title, strapline, cta_title, cta_text, cta_button, body})=>
  <Layout withFooter>
    <Hero
      title={title}
      description={strapline}
      ctaTitle={cta_title}
      ctaDescription={cta_text}
      ctaHref="#"
      ctaLinkText={cta_button}
    />
    <section className="book-an-evening">
      <div className="container">
        {
        body.split("\n").map((i,key) => {
          return (<p key={key} className="lead-p">{i}</p>);
        })
        }
        <EveningList />
      </div>
    </section>
  </Layout>
