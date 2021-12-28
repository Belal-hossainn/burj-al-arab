
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import React from 'react';




const Login = ({handleChange}) => {
  
  const paperStyle = {
    height: 350,
    width: 320,
    padding: 20,
    margin: '0 auto' 
  }
  const avaterStyle = { backgroundColor: '#2c54c5'}
    return (
        <div>
            
            
            <Grid>
              <Paper  style={paperStyle}>
                 <Grid align= 'center'>
                   <Avatar style={avaterStyle}> <LockOutlinedIcon/> </Avatar>
                   <h3 color='#b0bec5'>Sign In</h3>
                 </Grid>
                 <form >
                   <TextField type="text" name='email' id="standard-basic" label="E-mail" placeholder='Enter e-mail' variant="standard" fullWidth  />
                 
                 <TextField  name='password' id="standard-basic" label="Password" placeholder='Enter password' variant="standard" type='password' fullWidth required />
                 <Button style={{margin: '10px 0'}} color='primary' type='submit' variant="contained" fullWidth>sign in</Button>
                 </form>
                 <Typography>
                   Do you have an account?
                   <Link style={{cursor: 'pointer'}} onClick={()=>handleChange("event",1)}> sign up</Link>
                 </Typography>
                 <Typography align='center'>OR</Typography>
                 <Box sx={{ textAlign: 'center', m: 1 }}><Button  variant="contained" color="primary" ><GoogleIcon mx-2 color ="red[500]"/>  Sign in with Google</Button></Box>
              </Paper>
            </Grid>
        </div>
    );
};

export default Login;