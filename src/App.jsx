import { useState, useRef } from "react"
import "./App.css"
import { Auth } from './components/Auth'
import Cookies from "universal-cookie"
import { Chat } from "./components/Chat"
import { signOut } from "firebase/auth"
import { auth } from "./config/firebase-config"
const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef();

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    )
  }

  return (
    <div className="enter-room">
      <div className="sign-out">
        <h4 className="user-info">
          <img src={auth.currentUser.photoURL} alt="user-profile" className="user-profile" />
          <span>{auth.currentUser.email}</span>
        </h4>
        <button onClick={signUserOut}>Sign Out</button>
      </div>

      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter room name:</label>
          <input ref={roomInputRef} placeholder="room name" />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            enter chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App
