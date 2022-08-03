import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Thailand = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Thailand</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Thailand-about">

<p>Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces,</p>
<p> ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an </p>
<p> ultramodern cityscape rises next to quiet canalside communities and the iconic temples of </p>
<p> Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts </p>
<p> include bustling Pattaya and fashionable Hua Hin.</p>

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
<Link to="/Mexico">
    <button type="button">Previous: Mexico</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/Germany">
    <button type="button">Next: Germany</button>
</Link>
</Grid>
    </div>
     
    );  
};


export default Thailand;