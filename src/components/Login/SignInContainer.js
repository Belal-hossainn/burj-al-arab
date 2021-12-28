
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Login from './Login';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import SignUp from './SignUp';

const SignInContainer = () => {
    initializeLoginFramework();
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   
    const googleSignIn  = () =>{
      console.log('ccliccked')
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true)
      })
    }
  
  
    const handleResponse = (res, redirect) =>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
    // const handleBlur = (e)=>{
    //   let isFormValid;
    //   if(e.target.name === 'email'){
    //       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    //   };
    //   if(e.target.name === 'password'){
    //     const isPasswordValid = /\d{1}/.test(e.target.value);
    //     const isPassLength = e.target.value.length > 6;
    //     isFormValid = isPassLength && isPasswordValid;
    //   }
    //   if(isFormValid){
    //     const userInfo = {...user};
    //     userInfo[e.target.name] = e.target.value;
    //     setUser(userInfo);
    //     console.log(userInfo)
    //   }
    // }
    const handleSubmit = (e) => {
      e.preventDefault();
      
     
    };
    const handleSignUp = (values, props)=>{
      const newUserInfo = {
        isSignedIn: true,
        name: values.name,
        email: values.email,
        password: values.password
      }
      console.log(newUserInfo)
      setUser(newUserInfo);

      if ( values.email && values.password) {
        createUserWithEmailAndPassword(values.name, values.email.trim(), values.password)
        .then(res => {
            console.log(res)
          handleResponse(res, true);
        })
      }
      setTimeout(()=>{
         props.resetForm();
         props.setSubmitting(true)
      }, 2000)
  };

    const onSubmit = (values, props) =>{
      const newUserInfo = {
        isSignedIn: true,
      email: values.email,
      password: values.password
      }
      console.log(newUserInfo)
      setUser(newUserInfo)

      if( values.email && values.password){
        console.log(values.email)
        signInWithEmailAndPassword(values.email.trim(), values.password)
        .then(res => {
          console.log(res)
          handleResponse(res, true);
        })
      }
      setTimeout(()=>{
        props.resetForm();
        // props.setSubmitting(true)
      }, 2000)
    };

    

    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle={width:360,margin:"20px auto"}
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login onSubmit={onSubmit} handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SignUp handleSignUp={handleSignUp}/>
      </TabPanel>
      </Paper>
    );
};

export default SignInContainer;