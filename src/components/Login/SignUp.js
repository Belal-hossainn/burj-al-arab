import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React from 'react';

const SignUp = () => {
    

    const paperStyle = {
        padding: 20,
        margin: '0 auto',
        height: 350,
        width: 320
    }
    return (
        <div>
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align ='center'>
                        <Avatar style={{backgroundColor: '#2c54c5', margin: 0}}> <AddCircleOutlineOutlinedIcon/> </Avatar>
                        <h3 style={{margin: 0, color: '#4f79c5'}}>SIGN UP</h3>
                        <Typography variant='caption'>Please fill this form to create an account.</Typography>
                    </Grid>
                    <form >
                        <TextField name='username'   label="username" variant="standard" placeholder='Enter your name' fullWidth required/>
                        <TextField name='email'  label="email" variant="standard" placeholder='Enter your email' fullWidth required/>
                        <TextField name='password'  type='password'  label="password" variant="standard" placeholder='Enter password' fullWidth required/>
                        <Button variant="contained" type='submit' style={{marginTop:'20px'}} color='primary' fullWidth>sign up</Button>
                    </form>
                    <Typography style={{marginTop: '3px'}}>Already have an account? 
                    </Typography>
                  
                </Paper>
            </Grid>
        </div>
    );
};

export default SignUp;