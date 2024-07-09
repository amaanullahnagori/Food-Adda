import React from "react";
import ReactDom from "react-dom/client";
import HD from "./header.js"
import Body from "./body.js";
import { jsondata } from "./Restaurant_list.js";
import Foot from "./footer.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Menu from "./menu";

const Applayout=()=>{
 
    return (
       
              <>
               <HD/>
                 
               <Body/>             
               <Foot/>
              </>
    )
}
const br=createBrowserRouter([{
    path :"/",
    element:<Applayout/>
},{
    path :"/res/:i/:id",
    element:<Menu/>
}
, { path :"/res/:id",
element:<Menu/>}]
)
const root=ReactDom.createRoot(document.getElementById("r"));
root.render(<RouterProvider router={br}/>);



