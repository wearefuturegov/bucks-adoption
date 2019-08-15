import React from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestion from "../../TopicQuestion"

export default ({title, intro, body, questions})=>
  <Layout withHeader withFooter>
    <section className="topic_content">
      <div className="container">
        <PageHeader title={title} lede={intro} breadcrumbs={[
                {
                    title: "Bucks Adoption",
                    href: "/"
                },
                {
                    title: title
                }]} />
        <div className="topic_content__body">
          {
            body.split("\n").map((i,key) => {
              return (<p key={key}>{i}</p>);
            })
          }
        </div>
        <div className="topic_content__questions">
          {questions.map(question => {
            const { id, title, answer_1, action_title } = question;
            return (
              <TopicQuestion key={id} title={title} answer_1={answer_1} action_title={action_title} />
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
