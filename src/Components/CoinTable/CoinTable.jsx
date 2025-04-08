import { useQuery } from "@tanstack/react-query";
import { fetchCoinData } from "../../services/fetchCoinData";
import {   useState } from "react";
import currencyStore from '../../state/store';
import { CurrencyContext } from "../../context/CurrencyContext";
function CoinTable(){
 const {currency} =  currencyStore(); // useContext(CurrencyContext);
   const[page,setPage] = useState(1);
   const {isLoading,isError,data,error} = useQuery({
      queryKey:['coinData',page,currency],
      queryFn:()=>fetchCoinData(page,currency ),
      keepPreviousData:true,
       cacheTime:1000*60*2, // 2 minutes
      staleTime:1000*60*2, // 2 minutes
   });
  
  
   if(isError){
         return <div>Error: {error.message}</div>
   }
   
 return(
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw]mx-auto bg-green-100">
    <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center ">

      {/*Header of the table*/}
      <div className="basis-[35%] pl-60">
         Coin
      </div>
      <div className="basis-[25%] pl-10" >
         Price
      </div>
      <div className="basis-[20%] pr-30">
         24h change
         </div>
         <div className="basis-[20%] pr-40">
            Market Cap
         </div>
    </div>
     

     <div className="flex flex-col w-[80vw] mx-auto">
         {isLoading && <div className="text-3xl text-white">Loading...</div>}
           {data && data.map((coin)=>{
                return(
               <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
               <div className="flex items-center justify-center gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                 <img src={coin.image} className="w-full h-full"   />    
                  </div>
                  <div className="text-black flex flex-col">
                     <div className="text-3xl">{coin.name}</div>
                     <div className="text-xl">{coin.symbol}</div>
                  </div>

               </div>
               <div className="basis-[25%] text-black">
                  {coin.current_price}
               </div>
               <div className="basis-[20%] text-black">
                  {coin.price_change_24h}
               </div>
               <div className="basis-[20%] text-black">
                  {coin.market_cap}
               </div>
               </div>
                );
           })}
     </div>

     <div className="flex gap-4 justify-center items-center">
      <button 
      disabled={page===1}
      onClick={()=>setPage(page-1)} className="btn btn-primary btn-wide text-black text-2xl">Prev</button>
      <button 
      onClick={()=>setPage(page+1)}
      className="btn btn-secondary btn-wide text-black text-2xl">Next</button>

     </div>

      </div>
 );

    
   
}

export default CoinTable;