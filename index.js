import React from "react";
import ReactDom from "react-dom/client";
import HD from "./header.js"
import Body from "./body.js";
import { jsondata } from "./Restaurant_list.js";
import Foot from "./footer.js";
//three Section 

// header 
   //- img
   // -navigation
// body 
// footer

// const h=HD;

const Applayout=()=>{
 
    return (
       
              <>
               <HD/>
                 
               <Body/>             
               <Foot/>
              </>
    )
}

const root=ReactDom.createRoot(document.getElementById("r"));
root.render(<Applayout/>);



