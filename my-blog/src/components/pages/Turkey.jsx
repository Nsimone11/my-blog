import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Turkey = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Turkey</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Turkey-about">

<p>Turkey, officially the Republic of Türkiye, is a transcontinental country </p>
<p>located mainly on the Anatolian Peninsula in Western Asia, with a small </p>
<p> portion on the Balkan Peninsula  in Southeast Europe.</p>

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
<Link to="/Italy">
<button type="button" >Previous: Italy</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/Mexico">
    <button type="button">Next: Mexico</button>
</Link>
</Grid>
    </div>
     
    );  
};


export default Turkey;