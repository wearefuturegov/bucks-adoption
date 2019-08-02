import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import PhaseBanner from "../PhaseBanner"
import IsPageUseful from "../IsPageUseful"
import FullWidthSearch from "../FullWidthSearchPanel"
import Footer from "../Footer"
import Cookies from "../Cookies"
import "./style.scss"

const Layout = ({children, withHeader, withUseful, withFooter, fullHeight})=>
    <div className={fullHeight ? "layout--full-height" : undefined}>s
        <PhaseBanner href="#"/>
        <Cookies/>
        {withHeader && <Header /> }
        {children}
        {withUseful && <IsPageUseful />}
        {withFooter &&
        <>
            <FullWidthSearch
                popularPages={[
                    {
                        title: "Getting equipment",
                        href: "#"
                    },
                    {
                        title: "Keeping yourself safe",
                        href: "#"
                    },
                    {
                        title: "Getting help at home",
                        href: "#"
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
