import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";


function App() {

	return (
	<div className="App">
		<div> <Nav /></div>
		<HogList hogs={hogs}/>
			
		
	</div>
	);
}

export default App;
// hogList={hogList} setHogList={setHogList}
//, {useState}