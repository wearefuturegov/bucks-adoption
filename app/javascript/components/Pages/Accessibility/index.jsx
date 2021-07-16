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
                    <p>Using our simple adoption readiness tool is a great way to learn more about adoption.</p>
                    <p>By answering a few simple questions you’ll get a personalised readiness plan to help you prepare to take the next step.</p>
                    <p>Our quick readiness checker gives you practical advice and creates a personalised plan to prepare you to take the next step.</p>
                    <p>This website is run by Buckinghamshire Council. We want as many people as possible to be able to use this website. For example, that means you should be able to:</p>
                    <ul>
                        <li>change colours, contrast levels and fonts</li>
                        <li>zoom in up to 300% without the text spilling off the screen</li>
                        <li>navigate most of the website using just a keyboard</li>
                        <li>navigate most of the website using speech recognition software</li>
                        <li>listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
                    </ul>

                    <p>We’ve also made the website text as simple as possible to understand.</p>
                    <p>AbilityNet has advice on making your device easier to use if you have a disability.</p>


                    <h2>Cookies that are needed for the website to work</h2>
                    <p>We know some parts of this website are not fully accessible:</p>

                    <h2>How accessible this website is</h2>
                    <p>These cookies do things like record services that you have favourited, so you can see them first when you open the website later on the same device.</p>
                    <p>These cookies are private to you, and are never shared with us.</p>

                    <ul>
                        <li>list here</li>
                    </ul>

                    <h2>What to do if you cannot access parts of this website</h2>
                    <p>If you need information on this website in a different format like accessible PDF, large print, easy read, audio recording or braille:</p>
                    <ul>
                        <li><a href="mail-to:adoption@buckinghamshire.gov.uk" title="Email us on adoption@buckinghamshire.gov.uk">adoption@buckinghamshire.gov.uk</a></li>
                        <li><a href="tel:adoption@buckinghamshire.gov.uk" title="Call us on 01494 586 349">01494 586 349</a></li>
                    </ul>
                    <p>We’ll consider your request and get back to you in 48 working hours.</p>

                    <h2>Reporting accessibility problems with this website</h2>
                    <p>We’re always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we’re not meeting accessibility requirements, contact us.</p>

                    <h2>Enforcement procedure</h2>
                    <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you’re not happy with how we respond to your complaint, contact the Equality Advisory and Support Service (EASS).</p>

                    <h2>Contacting us by phone or visiting us in person</h2>
                    <p>We provide a text relay service for people who are D/deaf, hearing impaired or have a speech impediment.</p>

                    <p>Our offices have audio induction loops, or if you contact us before your visit we can arrange a British Sign Language (BSL) interpreter.</p>
                    <p>Find out how to contact us 01494 586 349.</p>

                    <h2>Technical information about this website’s accessibility</h2>
                    <p>Buckinghamshire Council is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>

                    <p>This website is fully compliant with the Web Content Accessibility Guidelines version 2.1 AA standard.</p>
                </div>
            </div>



        </Layout>
    )
}

export default AccessibilityPage
