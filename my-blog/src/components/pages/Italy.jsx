import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Italy = () => {
    return (   
      <div>
      
      <Grid align="center">
      <div className="Title"><h1>Italy</h1>
        </div>
        </Grid>
        
        <Grid align="center">
         <img src='https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
         </Grid>

         <Grid align="center">
      
      <div className="Italy-about">

<p>Italy, a European country with a long Mediterranean coastline, has left a powerful mark</p>
<p> on Western culture and cuisine.  Its capital, Rome, is home to the Vatican as well as </p>
<p> landmark art and ancient ruins. Other major cities include Florence, with Renaissance </p>
<p> masterpieces such as Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city </p>
<p> of canals; and Milan, Italy’s fashion capital.</p>

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
<Link to="/China">
<button type="button" >Previous: China</button>
</Link>
</Grid>

<Grid align="right">
<Link to="/Turkey">
    <button type="button">Next: Turkey</button>
</Link>
</Grid>
    </div>
    );  
};


export default Italy;