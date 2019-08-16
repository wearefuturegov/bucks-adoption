import React from "react"
import "./style.scss"

const Footer = () =>
    <footer className="site-footer">
        <div className="container">
            <ul className="site-footer__menu">

                <li className="site-footer__menu-item">
                    <a href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/" className="site-footer__menu-link">Privacy policy</a>
                </li>
                <li className="site-footer__menu-item">
                    <a href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/" className="site-footer__menu-link">Contact us</a>
                </li>
                <li className="site-footer__menu-item">
                    <a href="/pages/cookies" className="site-footer__menu-link">Cookies</a>
                </li>

            </ul>
            <p className="site-footer__text">Built and maintained by <a href="http://buckscc.gov.uk">Buckinghamshire County Council</a></p>
        </div>
    </footer>

export default Footer
