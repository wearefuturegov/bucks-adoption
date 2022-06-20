import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"

const CookiesPage = ({logo, altLogo, cookies}) =>{

    return(
        <Layout withHeader withFooter logo={logo} altLogo={altLogo}>
            <div className="container">
                <div className="two-thirds">
                    <Markdown>{cookies}</Markdown>
                </div>
            </div>



        </Layout>
    )
}

export default CookiesPage
