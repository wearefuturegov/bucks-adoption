import React from "react"
import "./style.scss"

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const PopularPages = ({pages}) =>
    <ul className="popular-pages">
        {pages.map((page, i)=>
            <li key={i} className="popular-pages__item">
                <a href={page.href} target={page.target} className="popular-pages__link">{page.title}</a>
            </li>
        )}
    </ul>

const FooterUpperSection = ({popularPages}) =>
    <section className="footer-upper-section">
        <div className="container">
            <div className="footer-upper-section__inner">
                <aside>
                    <h2 className="footer-upper-section__title">Contact us</h2>
                    <p>If you have any questions, feel free to get in contact with our team by either email or phone call:</p>
                    <p><a href="mail-to:adoption@buckscc.gov.uk">adoption@buckscc.gov.uk</a></p>
                    <>
                    { isMobileDevice() ? (
                        <p><a href="tel:01494 586 349">01494 586 349</a></p>
                     ) : (
                         <p>01494 586 349</p>
                     )
                    }
                    </>
                </aside>
                <aside>
                    <h3 className="popular-pages__title">Useful links</h3>
                    <PopularPages pages={popularPages}/>
                </aside>
            </div>
        </div>
    </section>


export default FooterUpperSection
