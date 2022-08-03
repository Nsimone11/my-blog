import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Germany = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Germany</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Thailand-about">

<p>Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.</p>
<p> It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, </p>
<p> the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and </p>
<p> beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank. </p>

  </div>  
        </Grid>

        <Grid align="center">
        <p id="demo">Click here to get back to the home page:</p>
</Grid>

<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>

<Grid align="left">
<Link to="/Thailand">
    <button type="button">Previous: Thailand</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/UnitedKingdom">
    <button type="button">Next: United Kingdom</button>
</Link>
</Grid>
    </div>
     
    );  
};


export default Germany;