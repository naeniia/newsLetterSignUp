import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from './AuthContext.jsx';
import List from './list';

function Form() {
  const [appContext, setAppContext] = useContext(AuthContext);

  const email = (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function validate(event) {
    setUserEmail(event.target.value);
    const userData = event.target.value;
    setAppContext({
      ...appContext,
      userEmail: userData
    })
  }

  const onSubmit = (event) => {
    if(!email(userEmail)) {
      console.log("ok");
      setIsValid(false);
      event.preventDefault();
    } else {
      isAllGood();
      setIsValid(true);
    }
    console.log(appContext);
  }

  function isAllGood(){
    setAppContext({
      ...appContext,
      allGood: true
    })
  }

    return (
        <div id="white">
          <div id="main">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <List />
            <div id="form">
             <form>
              <label>Email Address</label>
              {!isValid && (<p className="error">Valid email required</p>)}
              <input 
              type="email" 
              placeholder="email@company.com"
              className={!isValid ? "invalid" : ""}
              value={userEmail} 
              onChange={validate}></input>
              <button type="submit" onClick={onSubmit}>Subscribe to monthly newsletter</button>
             </form>    
            </div>
          </div>
          <img src="./images/illustration-sign-up-desktop.svg" className="bimg"></img>
        </div>
    )
}

export default Form;