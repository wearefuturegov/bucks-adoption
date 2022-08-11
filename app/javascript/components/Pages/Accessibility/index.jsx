import React from "react"
import Layout from "../../Layout"
import Markdown from 'markdown-to-jsx'

const AccessibilityPage = ({accessibility}) =>{

    return(
        <Layout withHeader withFooter>
            <div className="container">
                <div className="two-thirds">
                    <Markdown>{accessibility}</Markdown>
                </div>
            </div>



        </Layout>
    )
}

export default AccessibilityPage
