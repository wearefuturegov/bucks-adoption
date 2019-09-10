import React from "react"
import PhaseBanner from "../PhaseBanner"
import Header from "../Header"
import Footer from "../Footer"
import theme from "../_theme"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Open Sans", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Dialog styles */
    :root {
        --reach-dialog: 1;
    }
    [data-reach-dialog-overlay] {
        background: hsla(0, 0%, 0%, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
    }
    [data-reach-dialog-content] {
        width: 80vw;
        margin: 10vh auto;
        background: white;
        outline: none;
    }

    /* Map styles */
    .detail-map, .list-map{
        height: 450px;
        margin-top: 15px;
    }

    .container {
        max-width: ${theme.maxWidth};
        margin-left: auto;
        margin-right: auto;
        padding: 40px 20px;
        @media screen and (min-width: ${theme.tablet}){
            padding: 60px 20px;
        }
        @media screen and (min-width: ${theme.desktop}){
            padding: 70px 20px;
        }
    }

`
const Layout = ({ children }) =>
    <>
        <GlobalStyle/>
        <PhaseBanner/>
        <Header/>
        {children}
        <Footer/>
    </>

export default Layout
