import React from "react"
import Layout from "../../Layout"
import Markdown from 'markdown-to-jsx'

const AboutPage = ({about}) =>{

    return(
        <Layout withHeader withFooter>
            <div className="container">
                <div className="two-thirds">
                    <Markdown>{about}</Markdown>
                </div>
            </div>



        </Layout>
    )
}

export default AboutPage