import React, { useContext } from "react";
import { AuthContext } from './AuthContext.jsx';

function ThankYou(props) {
    
    const [appContext, setAppContext] = useContext(AuthContext);

    function goBack() {
        setAppContext({
            ...appContext,
               allGood: false
        })
    }

    return(
        <div id="tinyw">
           <img src="./images/icon-success.svg"></img>
           <h1 className="tinyh1">Thanks for susbscribing!</h1> 
           <p>A confirmation email has been sent to <span className="email">{props.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
           <button className="gobackb" onClick={goBack}>Dismiss message</button>    
        </div>
    )
}

export default ThankYou;