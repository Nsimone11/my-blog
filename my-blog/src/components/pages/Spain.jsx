import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Spain = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Spain</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Spain-about">

<p>Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures.</p> 
 
 <p> Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. </p>

 <p> Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. </p>

 <p> Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church</p>

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

<Grid align="left">
<Link to="/France">
<button type="button" >Previous: France</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/UnitedStates">
    <button type="button">Next: United States</button>
</Link>
</Grid>
    </div>

        );  
    };
      
    
    export default Spain;