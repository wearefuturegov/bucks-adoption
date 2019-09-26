import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import send from "../../lib/emailer"

const Bar = styled.section`
    background-color: ${theme.shadow};
    padding: 10px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 15px 20px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: ${theme.tablet}){
        text-align: left;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`

const Headline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.tablet}){
        margin-bottom: 0px;
        margin-right: 15px;
    }
`

const Form = styled.form`
    width: 100%;
    display: flex;
    @media screen and (min-width: ${theme.tablet}){
        max-width: 500px;
    }
`

const Input = styled.input`
    flex: 1;
    background: white;
    padding: 5px;
    font-size: 1em;
    padding: 12px 20px;
    border-radius: 100px 0 0 100px;
    border: none;
`

const Button = styled.button`
    background: ${theme.darkText};
    border: none;
    color: white;
    border-radius: 0 100px 100px 0;
    padding: 12px 20px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    @media screen and (min-width: ${theme.tablet}){
        padding: 12px 30px;
    }
`

const ShareBar = ({
            health_questions,
            time_questions,
            family_questions,
            skills_questions,
            home_questions,
            healthResultsStored,
            timeResultsStored,
            familyResultsStored,
            skillsResultsStored,
            homeResultsStored,
            token
        }) => {
    const [sent, setSent] = useState(false)
    const [recipient, setRecipient] = useState("")

    const reset = () => {
        setSent(false)
        setRecipient("")
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await send(
          [
            health_questions,
            time_questions,
            family_questions,
            skills_questions,
            home_questions
          ], [
            healthResultsStored,
            timeResultsStored,
            familyResultsStored,
            skillsResultsStored,
            homeResultsStored
          ],
          token,
          recipient
        )
        if(data.responseCode === 200) setSent(true)
    }

    return(
        <Bar>
            <Inner>
                {sent ?
                    <>
                        <p>We've sent you an email.</p>
                        <button onClick={reset}>Send another</button>
                    </>
                    :
                    <>
                        <Headline>Email your plan</Headline>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                placeholder="example@email.com"
                                required
                                value={recipient}
                                onChange={e => setRecipient(e.target.value)}
                            />
                            <Button>Send</Button>
                        </Form>
                    </>

                }
            </Inner>
        </Bar>
    )
}

export default ShareBar
