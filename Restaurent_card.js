
const Rest_card=(props)=>
    {    
        const id=props.res.data.cloudinaryImageId;
          
        return (
            <>
               <div className="card">
               <div className="card_image">
   <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+id}  alt="Restaurent">
               </img>
               </div>
               <div className="bottom_card">
                <h3><a href=" ">{props.res.data.name.toUpperCase()}</a></h3>
                <h4>{props.res.data.area}</h4>
                <h5>{props.res.data.totalRatingsString}</h5>
               </div>

            </div>
            </>
        )
    }
  
     export default Rest_card;
    // props.res.info.differentiatedUi.name
    //props.res.info.differentiatedUi.locality
    //props.res.info.totalRatingsString
    //props.res.info.cloudinaryImageId


    // const Rest_card=(props)=>
    //     {    
    //         console.log (props)
    //         const id=props.res.info.cloudinaryImageId
              
    //         return (
    //             <>
    //                <div className="card">
    //                <div className="card_image">
    // <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+id}  alt="Restaurent">
    //                </img>
    //                </div>
    //                <div className="bottom_card">
    //                 <h3><a href=" ">{props.res.info.differentiatedUi.name}</a></h3>
    //                 <h4>{props.res.info.differentiatedUi.locality}</h4>
    //                 <h5>{props.res.info.totalRatingsString}</h5>
    //                </div>
    
    //             </div>
    //             </>
    //         )
      //  }
      
      //  export default Rest_card;