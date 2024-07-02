import { useEffect, useState } from "react";
import Rest_card from "./Restaurent_card";
 import restrautList from "./RestaurentList";
 
 const toggle =false ;
 function filterdata(value){
  const filD=  restrautList.filter((resdata)=>{
     
       return resdata.data.name.toLowerCase().includes(value.toLowerCase());
   
    });
    return filD;
}

const Nodata=(e)=>{
  const test ="No restaurent";
  
   return (<>
   
   <h1>{test}</h1>
             
                </>)
}

const Body=()=>{
    const [search_value,setsearch_value]=useState("hello");
    // const [restaurentList,setrestaurentList]=useState(restrautList);
    const [searchrestaurentList,setsearchrestaurentList]=useState(restrautList);
    // const fetch_API="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
    // useEffect(()=>{
    //   fetch(fetch_API).then(Response=>Response.json()).then(dataa=>{
    //   const fetch_List=dataa.data.cards[2]?.card.card?.gridElements?.infoWithStyle
    //   ?.restaurants;

    // // setrestaurentList(fetch_List);
    //   }
        
    //   );

    //   }
    // ,[])
  
   if (searchrestaurentList.length==0){
      return <Nodata/>;
   }
    return (
        <div className="body_main">
        <div className="search_bar">
          <input type="text" placeholder="search"  id="bar" onChange={
             (e)=>{
                 setsearch_value(e.target.value);
                     
             }
          }></input>
         <button id="button_searchBar"  onClick={()=>{
              const dataa = filterdata(search_value);
            
            setsearchrestaurentList(dataa);
         }
                 }>Search</button>
       
        </div>
      
        <div className="body_card">
          { 

         searchrestaurentList .map((e) => {
               return <Rest_card  res={e} />
          })}
       </div>
       </div>
    )
}

export default Body; 