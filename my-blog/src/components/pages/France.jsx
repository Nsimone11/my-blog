import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const France = () => {
    return (
    
    <div>  
    
    <Grid align="center">
   <div className="Title"><h1>France</h1></div>
     </Grid>

      <Grid align="center">
         <img src='https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="Logo" height={200} width={300}/>
         </Grid>
     
      <Grid align="center">
      
      <div className="France-about">
        
        <p>France, in Western Europe, encompasses medieval cities, 
        alpine villages and Mediterranean beaches.</p> 
        
        <p> Paris, its capital, is famed for its fashion 
        houses, classical art museums including the Louvre and monuments like the Eiffel Tower. </p>


        <p>The country is also renowned for its wines and sophisticated cuisine.</p>
        
        <p> Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles 
        attest to its rich history. </p>
        
    </div>  
        </Grid>
        
        <Grid align="center">
        <p id="demo">Click here to get back to the main page:</p>
</Grid>

<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>


<Grid align="right">
<Link to="/Spain">
    <button type="button">Next: Spain</button>
</Link>
</Grid>
    </div>



    );  
};
  

export default France;