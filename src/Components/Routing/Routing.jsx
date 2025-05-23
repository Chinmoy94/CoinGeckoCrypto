import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";
function Routing(){
   return(
       <Routes>
             <Route path="/" element={<MainLayout/>} >
              <Route index element={<Home/>} />
              <Route path="/details/:coinid" element={<CoinDetailsPage/>} /> 
              </Route>
              
              </Routes>
        
      
   );
}
export default Routing;