import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"

const CookiesPage = ({cookies}) =>{

    return(
        <Layout withHeader withFooter>
            <div className="container">
                <div className="two-thirds">
                    <Markdown>{cookies}</Markdown>
                </div>
            </div>



        </Layout>
    )
}

export default CookiesPage
