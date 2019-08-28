import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import PhaseBanner from "../PhaseBanner"
import IsPageUseful from "../IsPageUseful"
import FooterUpperSection from "../FooterUpperSection"
import Footer from "../Footer"
import Cookies from "../Cookies"
import "./style.scss"

const Layout = ({children, withHeader, withUseful, withFooter, fullHeight})=>
    <div className={fullHeight ? "layout--full-height" : undefined}>
        <PhaseBanner href="#"/>
        <Cookies/>
        {withHeader && <Header /> }
        {children}
        {withUseful && <IsPageUseful />}
        {withFooter &&
        <>
            <FooterUpperSection
                popularPages={[
                    {
                        title: "Book an information evening",
                        target: "_self",
                        href: "/pages/bookadoptionevening"
                    },
                    {
                        title: "Support for adoptive parents",
                        target: "_blank",
                        href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adoption-support/"
                    },
                    {
                        title: "Adopting a child you know",
                        target: "_blank",
                        href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/adopting-a-child-you-know/"
                    },
                    {
                        title: "Placing your baby for adoption",
                        target: "_blank",
                        href: "https://www.buckscc.gov.uk/services/care-for-children-and-families/adoption/placing-your-baby-for-adoption/"
                    },
                ]}
            />
            <Footer/>
        </>
        }
    </div>

Layout.propTypes = {
    children: PropTypes.node,
    withHeader: PropTypes.bool,
    withUseful: PropTypes.bool,
    withFooter: PropTypes.bool
}

export default Layout
