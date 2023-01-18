import React ,{useState} from "react";
import FilterGreased from "./FilterGreased.js";
import HogCard from  "./HogCard.js"

function HogList({hogs}){
  const  [sortBy , setSortBy] = useState("name")
	const  [isItGreased , setIsItGreased] = useState(false) 

  
  
  const filterNSort= hogs
  .filter(hog=> ( isItGreased ? hog.greased : true ))
  .sort((hog1, hog2)=> {
        if (sortBy === "weight"){
        return  (hog1.weight < hog2.weight ? -1 : 1)
        }else {
       return  (hog1.name < hog2.name ? -1 : 1)}
      } )
  
  // const sort= hogs


  
   
  return(
    <>
        <div >
          <FilterGreased setSortBy={setSortBy}
                      isItGreased={isItGreased}  
                      setIsItGreased= {setIsItGreased}
                      hog={hogs.map(hog=>hog)}/>
          </div>
          <div className="ui grid container" >
           {filterNSort.map(hog => <HogCard key={hog.name}  hog={hog} /> ) }  
          </div>
    </>
  )
}

export default HogList