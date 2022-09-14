import React from "react"
import Layout from "../../Layout"
import Markdown from 'markdown-to-jsx'
import { UserContent } from "../../PageBodyContent"

const AccessibilityPage = ({logo, altLogo, accessibility, banner}) =>{

    return(
        <Layout withHeader withFooter logo={logo} altLogo={altLogo} banner={banner}>
            <div className="container">
            <UserContent>
                    <Markdown>{accessibility || ''}</Markdown>
            </UserContent>
            </div>



        </Layout>
    )
}

export default AccessibilityPage
