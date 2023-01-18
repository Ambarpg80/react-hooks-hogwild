import React from "react";
import Details from "./Details.js";

function HogCard({hog}) {

    return (
    <div  className="ui eight wide column ">
       <div  >
        <div  className="ui card">
            <div className='content'> {hog.name} </div>
            <div className="image"> 
                <img style={{maxHeight: "200px", maxWidth: "300px"}} src={hog.image} alt={hog.name}></img>
            </div>
        <Details hog={hog}  /> 
        </div>
        </div>       
    </div>
    )
}
export default HogCard
