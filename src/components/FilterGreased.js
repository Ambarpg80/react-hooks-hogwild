import React from 'react';


function FilterGreased({isItGreased , setIsItGreased,setSortBy,  hog}){
    
    function toggleGreased(){
        setIsItGreased(!isItGreased)
    }
     
    function handleSort(e){
        setSortBy(e.target.value)
       }
    return(
   <>
        <div style={{margin: "30px" , float: "left", display: "inline-block"}} > 
           <input type="checkbox" onClick={toggleGreased}></input> 
           <label> Greased </label>
        </div>
        <div>      
            <select style={{float: "right"}} className="ui button"  onChange={handleSort}>Sort By Name
              <option value={hog.name}>name</option>
              <option value={hog.weight}>weight</option>
            </select>
          </div>
        
    </>   
        )}
        
export default FilterGreased;