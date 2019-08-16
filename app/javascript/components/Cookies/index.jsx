import React, {useState} from "react"
import "./style.scss"
import {cookieWarningSeen, setSeenCookie} from "../../lib/cookies"

const Cookies = () => {
    // Only render on client-side
    if(process.browser){
        const [invisible, setInvisiblity] = useState(cookieWarningSeen)
        if(invisible) return false
        return (
            <footer className="cookies">
                <div className="cookies__inner container">
                    <p>We use small files called cookies to make the website easier to use.</p>
                    <button className="cookies__action" onClick={()=>{
                        setInvisiblity(true)
                        setSeenCookie()
                    }}>Accept</button>
                    <a href="/pages/cookies" className="cookies__action">Find out more</a>
                </div>
            </footer>
        )
    }
    return false
}

export default Cookies
