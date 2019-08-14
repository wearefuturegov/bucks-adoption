import React from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import ToolContent from "../../ToolContent"

export default ({title, intro, body, questions})=>
  <Layout withHeader withFooter>
    <section className="tool_content">
      <div className="container">
        <PageHeader title={title} lede={intro} breadcrumbs={[
                {
                    title: "Bucks Adoption",
                    href: "/"
                },
                {
                    title: title
                }]} />
        <div className="tool_content__body">
          {
            body.split("\n").map((i,key) => {
              return (<p key={key}>{i}</p>);
            })
          }
        </div>
        <div className="tool_content__questions">
          {questions.map(question => {
            const { id, title, body, action } = question;
            return (
              <ToolContent key={id} title={title} body={body} action={action} />
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
