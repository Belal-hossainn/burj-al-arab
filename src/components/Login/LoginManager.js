import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Config.firebase';





export const initializeLoginFramework = () => {
  if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
}


   export const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth.signInWithPopup(googleProvider)
          .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
              };
                return signedInUser
          })
          .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
    
            // ...
          });
      };
      export const createUserWithEmailAndPassword = (name, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( res => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          updateUserName(name);
          return newUserInfo;
        })
        .catch( error => {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
     }
     export const signInWithEmailAndPassword = (email, password) =>{
      return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
      })
      .catch(function(error) {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
   }
  
   const updateUserName = name =>{
      const user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name
      }).then(function() {
        console.log('user name updated successfully')
      }).catch(function(error) {
        console.log(error)
      });
    }
    

