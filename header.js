import { useState } from "react";

const Img=()=>{
    return (
        <div className="logo">
<img src="https://www.foodsystemchange.org/fileadmin/_processed_/f/a/csm_Projekt_foodiverse2_64b74fcf6a.png" alt="logo"></img>;
  </div>
)
}
let tog="login" ;

const Navi=()=>{
    const [login_logout,setlogin_logout]=useState("login");
    const [tog,settog]=useState("login");

    return (
           
        <div id="nav" >
            
           
         <a id="a1" href="">Home
        </a>
        <a id="a2" href="">
            About us
        </a>
        <a id="a3" href="">
            Help
        </a>
        <a id="a4" href="">
        cart
        </a>
        <button id="login_logout"  onClick={()=>{
            if (login_logout==false){
          setlogin_logout(true);
          settog ("logut");
            }
            else {
                setlogin_logout(false);
                settog ("login") ;
            }
       
           }
                       
           }>{tog}</button>
        </div>
      
    )
}
const Hd =()=>{
    return (
        <div id="he" className="header"> 
            {Img()}
            {Navi()}
             
        </div>
    )
}
export default Hd;

