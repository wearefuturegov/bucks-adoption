import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import triangle from "./triangle.svg"
import downArrow from "./down-arrow.svg"
import Header from "../Header"

const Hero = ({
    title,
    description
}) =>
    <section className="hero hero--needs">
        <Header inverted/>
        <div className="hero__inner container hero__inner--needs">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">
                {description}
                <span className="hero__all-services">Or, <a href="/recommendations">see everything</a></span>
            </p>

        </div>
        <img src={downArrow} alt="" className="hero__scroll-on"/>
        <img src={triangle} alt="" className="hero__triangle"/>
    </section>

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Hero
