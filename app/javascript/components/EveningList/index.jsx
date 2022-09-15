import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Card from "../EveningCard"

const Outer = styled.section`
    background-color: ${theme.background};
    padding: 40px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 50px 20px;
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

const H1 = styled.h1`
    margin-bottom: 40px;
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const EveningList = ({
    events
}) =>
    <Outer>
        <H1>Upcoming events</H1>
        <Inner>
            <Grid>
                {events ? 
                    events.map(event => 
                        <Card
                            key={event.id}
                            headline={event.name.text}
                            start={event.start}
                            end={event.end}
                            venue={event.venue}
                            href={event.url}
                        />
                    )
                    :
                    <p>Sorry, there are no events currently avaliable, please check again at a later date.</p>
                }
            </Grid>
        </Inner>
    </Outer>

export default EveningList