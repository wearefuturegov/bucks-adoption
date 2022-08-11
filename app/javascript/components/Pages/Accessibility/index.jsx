import React from "react"
import Layout from "../../Layout"
import PageHeader from "../../PageHeader"
import Button from "../../Button"
import "./style.scss"

const AccessibilityPage = () =>{

    return(
        <Layout withHeader withFooter>
            <div className="container">
                <div className="two-thirds">
                    <h1>Accessibility statement for Buckinghamshire Adoption</h1>
                    <br/>
                    <p>This statement applies to any content on the <a href="https://adoption.buckinghamshire.gov.uk/">https://adoption.buckinghamshire.gov.uk/</a> website subdomain. This website is run by Buckinghamshire Council. We want as many people as possible to be able to use this website. For example, that means you should be able to:</p>
                    <ul>
                        <li>change colours, contrast levels and fonts</li>
                        <li>zoom in up to 300% without the text spilling off the screen</li>
                        <li>navigate most of the website using just a keyboard</li>
                        <li>navigate most of the website using speech recognition software</li>
                        <li>listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
                    </ul>

                    <p>We’ve also made the website text as simple as possible to understand.</p>
                    <p><a href="https://mcmw.abilitynet.org.uk/">AbilityNet</a> has advice on making your device easier to use if you have a disability.</p>


                    <h2>How accessible this website is</h2>
                    <p>This website is fully compliant with the Web Content Accessibility Guidelines version 2.1 AA standard.</p>

                    <p>Buckinghamshire Council is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>


                    <h2>Feedback and contact information</h2>
                    <p>If you need information on this website in a different format like accessible PDF, large print, easy read, audio recording or braille email <a href="mail-to:equalities@buckinghamshire.gov.uk">equalities@buckinghamshire.gov.uk</a>.</p>
                    <p>We will consider your request and get back to you within 20 working days.</p>

                    <h3>Contacting us</h3>
                    <p>If you can't hear or speak on the phone we provide a <a href="https://www.relayuk.bt.com/">text relay</a> service: 18001 01296 395000</p>

                    <p>Or you can <a href="https://www.buckinghamshire.gov.uk/your-council/contact-us/">contact us</a>.</p>

                    <h2>Reporting accessibility problems with this website</h2>
                    <p>We are always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we’re not meeting accessibility requirements, contact: <a href="mail-to:webcontent@buckinghamshire.gov.uk">webcontent@buckinghamshire.gov.uk</a>.</p>

                    <h2>Enforcement procedure</h2>
                    <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you contact us with a complaint and you’re not happy with our response <a href="https://www.equalityadvisoryservice.com/">contact the Equality Advisory and Support Service (EASS)</a>.</p>

                    <h2>Technical Information about this website’s accessibility</h2>
                    <p>Buckinghamshire Council is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>

                    <h2>Preparation of this accessibility statement</h2>
                    <p>This statement was last reviewed on 21st July 2021.</p>
                </div>
            </div>



        </Layout>
    )
}

export default AccessibilityPage
