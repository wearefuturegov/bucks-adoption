import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Sidebar from "../Sidebar"

const Outer = styled.div`
    padding: 40px 20px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""}
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 70px 20px;
    }
`

const Columns = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 80px;
    }
`

const ContentArea = styled.article`
    @media screen and (min-width: ${theme.tablet}){
        margin-bottom: 50px;
        @supports (display: grid){
            margin-bottom: 0px;
        }
    }
`

const PageBodyContent = ({
    sidebarItems,
    sidebarContent,
    children,
    backgroundColor
}) =>
    <Outer backgroundColor={backgroundColor}>
        <Columns>
            <ContentArea>{children}</ContentArea>
            {sidebarItems && <Sidebar items={sidebarItems}/>}
            {sidebarContent}
        </Columns>
    </Outer>

export const UserContent = styled.div`
    p, span, blockquote, q{
        color: ${theme.darkText};
        margin-bottom: 20px;
        line-height: 1.6;
        font-size: 1em;
        @media screen and (min-width: ${theme.desktop}){
            font-size: 1.1em
        }
    }
    ul {
        margin-left: 20px;
        margin-bottom: 20px;
    }
    h1, h2, h3, h4, h5, h6{
        margin-top: 35px;
        color: ${theme.darkText};
        margin-bottom: 15px;
    }
    a{
        color: ${theme.link};
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};
        }
    }
    h2:first-child, p:first-child, span:first-child{
        margin-top: 0px !important;
    }
    h2:last-child, p:last-child, span:last-child{
        margin-bottom: 0px !important;
    }
`

export default PageBodyContent
