import React from "react"
import Markdown from 'markdown-to-jsx'
import Layout from "../../Layout"
import { UserContent } from "../../PageBodyContent"

const CookiesPage = ({logo, altLogo, cookies, banner}) =>{

    return(
        <Layout withHeader withFooter logo={logo} altLogo={altLogo} banner={banner}>
            <div className="container">
                <UserContent>
                    <Markdown>{cookies || ''}</Markdown>
                </UserContent>    
            </div>



        </Layout>
    )
}

export default CookiesPage
