
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Login = ({handleChange, onSubmit,}) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema =Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Required'),
    password:Yup.string().required('Required')
  })
  
  const paperStyle = {
    height: 380,
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
                  <Formik initialValues={initialValues} 
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}>
                    {(props)=>(
                      <Form>
                         <Field as={TextField}  name='email' type='email'  label="E-mail" placeholder='Enter e-mail' variant="standard" 
                         helperText={<ErrorMessage name="email" />} fullWidth required />
                 
                         <Field as={TextField}  name='password'  label="Password" placeholder='Enter password' variant="standard" type='password'
                         helperText={<ErrorMessage name="password" />} fullWidth required />

                         <Button style={{margin: '10px 0'}} color='primary' type='submit' variant="contained" fullWidth>sign in</Button>
                      </Form>
                    )}
                  </Formik>
                 <Typography>
                   Don't you have an account?
                   <Link style={{cursor: 'pointer'}} onClick={()=>handleChange("event",1)}> sign up</Link>
                 </Typography>
              </Paper>
            </Grid>
        </div>
    );
};

export default Login;