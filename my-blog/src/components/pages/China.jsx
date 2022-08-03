import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const China = () => {
    return (
    <div>
      
      <Grid align="center">
      <div className="Title"><h1>China</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1529921879218-f99546d03a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="China-about">

<p>China, officially the People's Republic of China, is a country in East Asia. </p> 
<p> It is the world's most populous country, with a population of more than 1.4 billion people. </p>
<p> China spans five geographical time zones and borders 14 countries, the second most of any country in the world after Russia.</p>

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
<Link to="/UnitedStates">
    <button type="button">Previous: United States</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/Italy">
    <button type="button">Next: Italy</button>
</Link>
</Grid>
    </div>
 
      
    );
};
export default China;