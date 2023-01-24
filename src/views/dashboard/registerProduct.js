import React, { useState, useEffect } from "react";
import DashLayout from "../../components/dashLayout"
import "./registerProduct.css"

import { Container, Grid, Card, TextField, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { private_createTypography } from "@mui/material/node/styles";
import {useSelector,useDispatch} from 'react-redux';
import createProductAction from "../../redux/product/actions"


// const styles = { width: "100%", height: "100vh" }

const RegisterProduct = () => {
  const [name,setName]=useState();
  const [description,setDescription]=useState();
  const [price,setPrice]=useState();
  return(

    <div className="register-container">
<DashLayout>

 <div className="registering">
 <h1>Register product</h1>
 <Container >
      <Grid
        
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Card className="signin_container">
            <Stack spacing={2} alignItems="center" justifyContent="center">
      

              <TextField
                fullWidth
                id="filled-basic"
                label="Product Name"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="price"
                variant="filled"
                onChange={(e) => setDescription(e.target.value)}
              />
                <TextField
                fullWidth
                id="filled-basic"
                label="Description"
                variant="filled"
                onChange={(e) => setPrice(e.target.value)}
              />
              <LoadingButton
                // loading={isFetching}
                fullWidth
                variant="contained"
                onClick={() => {
                  // navigate("/dashboard");
                  console.log({ name,description,price });
                 
                }}
              >
              Submit
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Container>

 </div>

</DashLayout>
    </div>  
    
 );
};
export default RegisterProduct;
