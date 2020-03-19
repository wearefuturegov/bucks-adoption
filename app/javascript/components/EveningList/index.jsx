import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Card from "../EveningCard"

const Outer = styled.section`
    background-color: ${theme.background};
    margin-top: -130px;
    padding: 40px 20px;
    padding-top: 60px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 50px 20px;
        padding-top: 80px;
    }
`

const Inner = styled.section`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Grid = styled.ul`
    list-style: none;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
`

const EveningList = ({
    events
}) =>
    <Outer>
        <Inner>
            <Grid>
                {events.map(event => 
                    <Card
                      key
                        headline={event.name.text}
                        start={event.start}
                        end={event.end}
                        venue={event.venue}
                        href={event.url}
                    />
                )}
            </Grid>
        </Inner>
    </Outer>

export default EveningList