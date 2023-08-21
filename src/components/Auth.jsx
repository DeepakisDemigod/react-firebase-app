import { auth, provider } from "../config/firebase-config.js"
import { signInWithPopup } from "firebase/auth"
import "../Auth.css"

import Cookies from "universal-cookie"
const cookies = new Cookies();

export const Auth = (props) => {

  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="auth">
      <div className="continue-to">
        <h1>ChatBlend</h1>
        <p>Sign in With Google to Continue</p>
      </div>
      <button className="sign-in-button" onClick={signInWithGoogle}><img className="google-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" /> Sign in With Google</button>
    </div>
  )
}
