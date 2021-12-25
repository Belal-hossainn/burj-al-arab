import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './Config.firebase';
const app = initializeApp(firebaseConfig);


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;

        // ...
      });
  };
    return (
        <div>
            <button onClick={googleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;