import React from 'react';
import { useState } from 'react';
import Form from './form.jsx';
import { AuthContext } from './AuthContext.jsx';
import ThankYou from './thankYou';
import Footer from './footer';

function App(props) {
  const [appContext, setAppContext] = useState({
    userEmail:"",
    allGood: false
  });

  return (
   <AuthContext.Provider value={[appContext, setAppContext]}>
    <div>
     {appContext.allGood ? <ThankYou email={appContext.userEmail} /> : <Form />}
     <Footer />
   </div> 
   </AuthContext.Provider>
  )
}

export default App
