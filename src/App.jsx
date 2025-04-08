//import React, { useState } from 'react';
//import Home from './pages/Home';
import'./App.css';
//import { CurrencyContext } from './context/CurrencyContext';
import Routing from './Components/Routing/Routing';
function App(){
   // const [currency, setCurrency] = useState('usd');
   return(
    <>
    {/* <CurrencyContext.Provider value={{currency, setCurrency}}> */}
    <Routing />
    {/* </CurrencyContext.Provider> */}
    
    </>
   );
}
export default App;
//shortshirotcuting