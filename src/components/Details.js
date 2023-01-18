import React ,{useState} from 'react';


function Details({ hog}){
    const  [details , setDetails] = useState(false)
    
   function showDetails(){
    setDetails(!details)
   }

return(
    <>
    <div className='content' >
        <button 
            style={{float : "left"}}  
            value={hog.name}
            onClick={showDetails}>{details ? "Hide Details" : "More Details"}
        </button>
        <span style={{float : "right"}}> ❤️   0 likes 
        </span>  
    </div>
    <div> {details ? ( <div className="content">
        specialty : {hog.specialty},
        greased : {String(hog.greased)},
        weight : {hog.weight},
        highest medal achieved : {hog["highest medal achieved"]}</div>)
        : null }  
    </div>     
    </>
    )
}

    export default Details;

