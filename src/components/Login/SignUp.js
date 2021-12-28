import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUp = ({handleSignUp}) => {
     const initialValues = {
         name: '',
         email: '',
         password: ''
     };
     

    

     const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
       
    })

    const paperStyle = {
        padding: 20,
        margin: '0 auto',
        height: 380,
        width: 320
    }
    return (
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align ='center'>
                        <Avatar style={{backgroundColor: '#2c54c5', margin: 0}}> <AddCircleOutlineOutlinedIcon/> </Avatar>
                        <h3 style={{margin: 0, color: '#4f79c5'}}>SIGN UP</h3>
                        <Typography variant='caption'>Please fill this form to create an account.</Typography>
                    </Grid>
                    <Formik initialValues={initialValues}
                    onSubmit={handleSignUp}
                    validationSchema={validationSchema}
                    >
                        {(props)=>(
                            <Form>
                                 <Field as={TextField} name='name'   label="username" variant="standard" placeholder='Enter your name' 
                                 helperText={<ErrorMessage name="name" />} fullWidth required/>
                                 <Field as={TextField} name='email'  label="email" variant="standard" placeholder='Enter your email'
                                 helperText={<ErrorMessage name="email" />} fullWidth required/>
                                 <Field as={TextField} name='password'  type='password'  label="password" variant="standard" placeholder='Enter password' 
                                 helperText={<ErrorMessage name="password" />} fullWidth required/>
                                 <Button variant="contained" type='submit' style={{marginTop:'20px'}} color='primary' fullWidth>sign up</Button>
                            </Form>
                        )}
                    </Formik>
                    <Typography style={{marginTop: '3px'}}>Already have an account? 
                    </Typography>
                  
                </Paper>
            </Grid>
    );
};

export default SignUp;