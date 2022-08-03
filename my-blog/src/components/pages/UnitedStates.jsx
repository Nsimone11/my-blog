import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UnitedStates = () => {
    return (
    
        <div>
      
        <Grid align="center">
        <div className="Title"><h1>United States</h1>
          </div>
          </Grid>
          
          <Grid align="center">
           <img src='https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt="Logo" height={200} width={300}/>
           </Grid>
  
           <Grid align="center">
        
        <div className="Spain-about">
  
  <p>The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. </p> 
  
   <p> Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. </p>
   
    <p> Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.</p>
  
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
<Link to="/Spain">
    <button type="button">Previous: Spain</button>
</Link>
</Grid>

  <Grid align="right">
  <Link to="/China">
      <button type="button">Next: China</button>
  </Link>
  </Grid>
      </div>



    );  
};


export default UnitedStates;