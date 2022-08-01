import React from "react";
import { Link } from "react-router-dom";

const France = () => {
    return (
    
    <div>  
     <image src='https://source.unsplash.com/random'></image> 
     
     <h1>France</h1>
      
      <p>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. 
        Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and 
        monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. 
        Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its 
       
        rich history. </p>  
        <p id="demo">Click here to get back to the main page.</p>

<Link to="/">
<button type="button" >Home</button>
</Link>

    </div>



    );  
};
  

export default France;