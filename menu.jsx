import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Shimmer from "./shimmer"

const Menu=()=>{
const {id}=useParams(); 
const[menu ,setmenu]=useState([]);

useEffect(()=>{
callmenu()
},)  

async function callmenu(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+id);
    const json = await data.json();
     const arr=json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
     setmenu(arr);
    
}
return !menu?<Shimmer/>: (<>
   
  { menu?.map((e)=><h3>
  
    {e.card.info.name}</h3>)}
   

   
  </>)
}
export default Menu;