import React from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import TopicQuestion from "../../TopicQuestion"
import "./style.scss"

export default ({title, intro, body, questions})=>
  <Layout withHeader withFooter>
    <section className="topic-content">
      <div className="container">
        <PageHeader title={title} lede={intro} breadcrumbs={[
                {
                    title: "Bucks Adoption",
                    href: "/"
                },
                {
                    title: title
                }]} />
        <div className="topic-content__body">
          {
            body.split("\n").map((i,key) => {
              return (<p key={key}>{i}</p>);
            })
          }
        </div>
      </div>
    </section>
    <section className="topic-questions-section">
      <div className="container">
        {questions.map(question => {
          const { id, title, answer_1, answer_2, answer_3, action_title } = question;
          return (
            <TopicQuestion key={id} title={title} answer_1={answer_1} answer_2={answer_2} answer_3={answer_3} action_title={action_title} />
          );
        })}
      </div>
    </section>
  </Layout>
