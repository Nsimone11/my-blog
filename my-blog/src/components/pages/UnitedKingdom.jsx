import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UnitedKingdom = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>United Kingdom</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1519773483179-fa089c182a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdGVkJTIwa2luZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="UnitedKingdom-about">

<p>The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. </p>
<p> England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre </p>
<p> of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old</p>
<p> universities at Oxford and Cambridge. </p>

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
<Link to="/Germany">
    <button type="button">Previous: Germany</button>
</Link>
</Grid>
    </div>
     
    );  
};


export default UnitedKingdom;