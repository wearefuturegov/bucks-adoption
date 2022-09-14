import React from "react"
import Layout from "../../Layout"
import Markdown from 'markdown-to-jsx'
import { UserContent } from "../../PageBodyContent"

const AboutPage = ({about,logo, altLogo, banner}) =>{

    return(
        <Layout withHeader withFooter logo={logo} altLogo={altLogo} banner={banner}>
            <div className="container">
                    <UserContent>
                    <Markdown>{about || ''}</Markdown>
                    </UserContent>
            </div>



        </Layout>
    )
}

export default AboutPage