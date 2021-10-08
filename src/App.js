import initaializeAuthentication from "./Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';



initaializeAuthentication();

const provider = new GoogleAuthProvider();


function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>


    </div>
  );
}

export default App;
