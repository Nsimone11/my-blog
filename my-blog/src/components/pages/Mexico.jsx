import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Mexico = () => {
    return (
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Mexico</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Mexico-about">

<p>Mexico, officially the United Mexican States, is a country in the southern portion of North America. </p>
<p> It is bordered to the north by the United States; to the south and west by the Pacific Ocean; </p>
<p> to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.</p>

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
<Link to="/Turkey">
<button type="button" >Previous: Turkey</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/Thailand">
    <button type="button">Next: Thailand</button>
</Link>
</Grid>
    </div>
     
    );  
};


export default Mexico;