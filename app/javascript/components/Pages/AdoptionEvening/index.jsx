import React from "react"
import Markdown from 'markdown-to-jsx';
import "./style.scss"
import Layout from "../../Layout"
import Hero from "../../Hero"
import EveningList from "../../EveningList"
import PageHeader from "../../PageHeader"


export default ({title, strapline, cta_title, cta_text, cta_button, body})=>
  <Layout withHeader withFooter>
    <section className="book-an-evening">
      <div className="container">
        <PageHeader title={title} lede={strapline} breadcrumbs={[
                {
                    title: "Bucks Adoption",
                    href: "/"
                },
                {
                    title: "Book an adoption evening"
                }]} />
        <div className="book-an-evening__body">
          <p><Markdown>{body}</Markdown></p>
        </div>
        <EveningList />
      </div>
    </section>
  </Layout>
