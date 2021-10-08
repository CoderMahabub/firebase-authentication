import initaializeAuthentication from "./Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import './App.css';
import { useState } from "react";

// Import Firebase Configuration
initaializeAuthentication();
// Step One of Authentication
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


function App() {
  const [user, setUser] = useState({});

  // getAuth Common so Used globally
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(loggedInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }
  return (
    <div className="App">
      {!user.name ? <div>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        <button onClick={handleGithubSignIn}>Github Sign In</button>
      </div> :
        <button onClick={handleSignOut}>Sign Out</button>}
      <br />
      {
        user.name && <div>
          <h2>Welcome {user.name}</h2>
          <p>Your Email is {user.email}</p>
          <img src={user.photo} alt="img" />
        </div>
      }
    </div>
  );
}

export default App;
