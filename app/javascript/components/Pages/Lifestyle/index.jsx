import React from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"

export default ({title, intro, body})=>
  <Layout withHeader withFooter>
    <section className="book-an-evening">
      <div className="container">
        <PageHeader title={title} lede={intro} breadcrumbs={[
                {
                    title: "Bucks Adoption",
                    href: "/"
                },
                {
                    title: "Book an adoption evening"
                }]} />
        <div className="book-an-evening__body">
          {
          body.split("\n").map((i,key) => {
            return (<p key={key}>{i}</p>);
          })
          }
        </div>
      </div>
    </section>
  </Layout>
